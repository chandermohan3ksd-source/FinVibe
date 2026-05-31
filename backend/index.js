require("dotenv").config()
const express=require("express");
const mongoose=require("mongoose");
const { holdingModel } = require("./models/holdingModel");
const { positionModel } = require("./models/positionModel");
const User=require("./models/userModel");
const cors=require("cors");
const bodyParse=require("body-parser");
const { orderModel } = require("./models/orderModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const JWT_Secret = process.env.JWT_SECRET || "zerodha_super_secret_key_123";
const app=express();
const mongoUrl=process.env.MONGO_URL;
const dns=require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);
app.use(cors());
app.use(bodyParse.json());
app.get("/allholding",async(req,res)=>{
    let holdingAll= await holdingModel.find({});
    console.log(holdingAll);
    res.json(holdingAll);
});
app.get("/allposition",async(req,res)=>{
    let positionsAll=await positionModel.find({});
    res.json(positionsAll);
});
app.post("/newOrder",async(req,res)=>{
    let newOrder=new orderModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode
    });
    newOrder.save();
    let random = Math.floor(Math.random() * 20) + 1;

    // NET
    let net =
        random < 10
        ? `-${random}%`
        : `+${random}%`;

    // DAY
    let randomday =
        (Math.random() * 5).toFixed(2);

    let day =
        randomday < 2
        ? `-${randomday}%`
        : `+${randomday}%`;

    await holdingModel.create({

        name: req.body.name,

        qty: req.body.qty,

        avg: Number(req.body.price) - random,

        price: req.body.price,

        net: net,

        day: day,

        isLoss: random < 10,
    });

    res.send("order added");
});
app.post("/signup",async(req,res)=>{
    const {username,email,password}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    const isUser=await User.findOne({email});
    if(isUser){
        return res.status(400).json({
            success:false,
            message:"User already registered"
        });
    }
    await User.create({
        username:username,
        email:email,
        password:hashedPassword
    });
    res.json({
        success:true,
        message:"Signup successful! Please login now."
    });
});

app.post("/login",async(req,res)=>{
    try{
         let {email,password}= req.body;
    let user=await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Email Not Registered Please Signp!"
        });
    }
    let checPassword=await bcrypt.compare(password,user.password);
    if(!checPassword){
        return res.status(400).json({
            success:false,
            message:"Wrong Password !!"
        })
    };
    const token=jwt.sign(
        {userId:user._id, email: user.email},
        JWT_Secret,
        {expiresIn: "1d"}
    );
    res.status(200).json({
        success:true,
        message:"Login successful",
        token:token,
        username:user.username
    });
    }catch(er){
        console.log(er);
        res.status(500).json({
            success:false,
            message:"Server Problem !"
        })
    }
   
})
async function startServer() {
    try {

        await mongoose.connect(mongoUrl);

        console.log("DB Connected");

        app.listen(3000, () => {
            console.log("App listening on port 3000");
        });

    } catch (err) {
        console.log("MongoDB connection error");
        console.log(err);

    }
}

startServer();
