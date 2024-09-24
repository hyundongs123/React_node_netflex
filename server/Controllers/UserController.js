const User = require("../Models/UserModels"); // require를 사용하여 User 모델 가져오기
const asyncHandler = require("express-async-handler"); // require를 사용하여 asyncHandler 가져오기

// @desc Register useer
// @route POST /api/users/**
// @access Public
const registerUser = asyncHandler(async(req,res)=>{
    const {fullName,email,password,image} = req.body

    try {
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400)
            throw new Error("이미 존재하는 아이디입니다.");
        }
        res.status(201).json({
            fullName,
            email,
            password,
            image,
        });

    }catch (error){ 

    }
})