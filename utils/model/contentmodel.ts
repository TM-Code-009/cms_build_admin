import { Schema, model, models } from "mongoose";
import { iContentData } from "../interface";
import { timeStamp } from "console";



const contentdata = new Schema<iContentData>({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    desccolor:{
        type:String,
    },
    descfontbold:{
        type:String,
    },
    descfontsize:{
        type:String,
    },
    color:{
        type:String,
    },
    fontsize:{
        type:String,
    },
    fontbold:{
        type:String,
    },
    image:{
        type:String,
    },
    imageID:{
        type:String,
    },
},{timestamps:true})

const comtentmodel = models.Content || model<iContentData>("Content",contentdata)

export default comtentmodel;