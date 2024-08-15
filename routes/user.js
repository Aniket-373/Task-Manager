const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Signin Api
router.post("/sign-in", async (req,res)=>{
   try{
    const{ username } = req.body;
    const{ email } = req.body;
    const existingUser = await User.findOne({username : username});
    const existingEmail = await User.findOne({email : email});
    if(existingUser){
        return res.status(400).json({message:"Username already exists"});
    } else if(username.length < 4){
        return res.status(400).json({message:"Username should have atleast 4 characters"});
    }
    if(existingEmail){
        return res.status(400).json({message:"Email already exists"});
    }
    const hashPass = await bcrypt.hash(req.body.password,10); 
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass,
    });

    await newUser.save();
    return res.status(200).json({message: "Signin Successfully"});
   } catch(error){
    console.log(error);
    return res.status(400).json({message:"Internal Server Error"});
   }
    
});

//Login
router.post("/log-in",async (req,res)=>{
    const{ username,password } = req.body;
    const existingUser = await User.findOne({username : username});
    if(!existingUser){
        return res.status(400).json({message:"Invalid Credentials"});
    }
    bcrypt.compare(password,existingUser.password,(err,data)=>{
        if(data){
            const authClaims = [{name: username}, {jti: jwt.sign({}, "ab1TM")}];
            const token = jwt.sign({authClaims}, "ab1TM", {expiresIn : "5d"});
            res.status(200).json({id: existingUser.id, token: token}); 
        }else{
            return res.status(400).json({message:"Invalid Credentials"});
        }
    })
});
module.exports = router;