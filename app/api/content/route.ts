import { dbConfig } from "@/utils/dbConfig"
import comtentmodel from "@/utils/model/contentmodel"
import { NextRequest, NextResponse } from "next/server"



export const GET = async() => {
    try {
        await dbConfig()

        const admin = await comtentmodel.find()

        return NextResponse.json({
            status: 200,
            message: 'Content fetched successfully',
            data: admin
        })
    } catch (error) {
       return NextResponse.json({
        status: 500,
        message: 'Can not get content'
       }) 
    }
}


export const POST = async(req:NextRequest) => {
    try {
        await dbConfig()

        const{title,desc,color,image,imageID,fontbold,fontsize,desccolor,
            descfontsize,
            descfontbold} = await req.json()

        const admin = await comtentmodel.create({title,desc,color,image,imageID,fontbold,fontsize,desccolor,
            descfontsize,
            descfontbold})

        return NextResponse.json({
            status: 200,
            message: 'Content fetched successfully',
            data: admin
        })
    } catch (error) {
       return NextResponse.json({
        status: 500,
        message: 'Can not get content'
       }) 
    }
}