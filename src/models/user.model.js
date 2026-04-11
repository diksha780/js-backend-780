import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true,
        index: true,
    },

    fullName :{
        type: String,
        required: true,
        trim: true,
        index: true,

    },
    email: {
        type:String,
        required: true, 
        unique: true,
        lowercase: true, 
        trim: true,
    },

    password:{
        type: String, 
        required: [true, 'Password id required'],

    },

    coverImage: {
        type: String,
        
    },

    avatar: {
        type: String, //cloudinRY URL
        required: true,
    },
    

    refreshToken:{
        type: String
    },

    watchHistory : {
        type: Schema.Types.ObjectId,
        ref: 'Video'
    },

}, {timestamps: true})


userSchema.pre('save', async function (next) { //arrow function does not access this scope
if(!this.ismodified('password')){
    return next();
}
    this.password = bcrypt.hash(this.password, 10)
    next();
})


userSchema.methods.isPasswordCorrect = async function(password){

    return await bcrypt.compare(password, this.password)

}


//genrate accesstoken

userSchema.methods.genrateAccessToken = function (){
    jwt.sign(
        {
            //payload
            _id : this._id,
            email: this.email,
            fullName: this.fullName,
            username : this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY,
        }
    )

}


//generate refresh token
useSchema.methods.generateRefreshToken = function(){
jwt.sign(
    {
        _id: this._id,
    },

    process.env.REFRESH_TOKEN_SECRET,

    {
        expiresIn : REFRESH_TOKEN_EXPIRY
    }
    

)
}

export const User = mongoose.model('User', userSchema)  