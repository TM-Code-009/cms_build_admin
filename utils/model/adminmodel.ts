import { Schema, model, models } from "mongoose";
import { iAdminData } from "../interface";
import { timeStamp } from "console";



const admindata = new Schema<iAdminData>({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
},{timestamps:true})

const adminmodel = models.Admin || model<iAdminData>("Admin",admindata)

export default adminmodel;