import { dbConfig } from "@/utils/dbConfig"
import adminmodel from "@/utils/model/adminmodel";
import comtentmodel from "@/utils/model/contentmodel";
import { NextRequest, NextResponse } from "next/server"



export const PATCH = async(req:NextRequest,{params}:any) => {
    try {
        await dbConfig()

        const{contentID} = params;

        const {title,desc,color,image,imageID,fontbold,fontsize,desccolor,
            descfontsize,
            descfontbold} = await req.json()

        const content = await comtentmodel.findByIdAndUpdate(contentID,{title,desc,color,image,imageID,fontbold,fontsize,desccolor,
            descfontsize,
            descfontbold},{new:true})

        return NextResponse.json({
            status: 201,
            message: "updating content",
            data: content,
          });

        
    } catch (error) {
        return NextResponse.json({
            status: 404,
            message:"unable to update"
        })
    }
}