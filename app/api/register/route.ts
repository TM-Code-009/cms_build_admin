// import { dbConfig } from "@/utils/dbConfig"
// import { NextRequest, NextResponse } from "next/server"
// import bcryptjs from "bcryptjs"
// import adminmodel from "@/utils/model/adminmodel"


// export const GET = async() => {
//     try {
//         await dbConfig()
        
//         const user = await adminmodel.find()

//         return NextResponse.json({
//             status:200,
//             message:"Getting admins",
//             data:user
//         })
//     } catch (error) {
//         return NextResponse.json({
//             status:404,
//             message:"unable to get admins"
//         })
//     }
// }


// export const POST = async(req:NextRequest) => {
//     try {
//         await dbConfig()
        
//         const {name, email, password} = await req.json()

//         const salt = await bcryptjs.genSalt(10)
//         const hashed  = await bcryptjs.hash(password,salt)

//         const user = await adminmodel.create({name, email, password:hashed})

//         return NextResponse.json({
//             status:200,
//             message:"Admin created successfully",
//             data:user
//         })
//     } catch (error) {
//         return NextResponse.json({
//             status:404,
//             message:"unable to create admin"
//         })
//     }
// }