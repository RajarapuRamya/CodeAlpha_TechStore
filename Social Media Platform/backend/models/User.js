const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },

    password:{
        type:String,
        required:true
    },

    profilePic:{
        type:String,
        default:""
    },

    coverPic:{
        type:String,
        default:""
    },

    bio:{
        type:String,
        default:""
    },

    followersCount:{
        type:Number,
        default:0
    },

    followingCount:{
        type:Number,
        default:0
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("User", userSchema);