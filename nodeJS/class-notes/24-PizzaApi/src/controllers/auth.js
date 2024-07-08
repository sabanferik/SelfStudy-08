"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const User = require("../models/user")
const Token = require("../models/token");
const { CustomError } = require("../errors/customError");
const passwordEncrypt = require("../helpers/passwordEncrypt");


module.exports = {
    login: async (req,res)=>{
        const {username,email,password} = req.body;

        if(password && (username || email)) {
            // const user = await User.findOne({username,email}) //* and operatörü
            const user = await User.findOne({$or:[{username},{email}]})
            if(user && user.password == passwordEncrypt(password)){
                if(user.isActive){
                    let tokenData = await Token.findOne({userId:user._id})
                    if(!tokenData){
                        tokenData = await Token.create({
                          userId: user._id,
                          token:passwordEncrypt(user._id + Date.now())
                        });
                    }

                    res.status(200).send({
                        error:false,
                        token:tokenData.token,
                        user
                    })
                }else{
                    throw new CustomError("This account is inactive!",401)
                }
            }else {
                throw new Error("Wrong username/email or password!",401)
            }

        }else {
            throw new CustomError("Please enter username/email and password!", 401)
        }

    },
    logout: async (req,res)=>{

    },
}