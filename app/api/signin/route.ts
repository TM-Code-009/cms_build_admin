// import { dbConfig } from "@/utils/dbConfig"
// import { NextRequest, NextResponse } from "next/server"
// import bcryptjs from "bcryptjs"
// import adminmodel from "@/utils/model/adminmodel"


// export const POST = async(req:NextRequest) => {
//     try {
//         await dbConfig()

//         const { email, password } = await req.json()

//         const user = await adminmodel.findOne({ email })

//         if(user){
//           const check = await bcryptjs.compare(password, user.password)

//           if(check){
//              return NextResponse.json({
//                 status:200,
//                 message:"Login successful",
//                 data:user
//              })
//           }else{
//             return NextResponse.json({
//                 status:401,
//                 message:"Invalid password"
//             })
//           }
//         }else{
//             return NextResponse.json({
//                 status:404,
//                 message:"User not found"
//             })
//         }
//     } catch (error) {
//         return NextResponse.json({
//             status:404,
//             message:"unable to signin users"
//         })
//     }
// }