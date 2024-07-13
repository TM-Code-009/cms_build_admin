// import Link from "next/link"
// import { redirect } from "next/navigation"
// import React from "react";


// const page = () => {
    
//     const createUser = async(formData:FormData) => {
//         "use server"
//      const name = formData.get("name")
//      const email = formData.get("email")
//      const password = formData.get("password")
     
//      const newurl = "http://localhost:3000/api/register"

//      await fetch(newurl,{
//         method: "POST",
//        headers:{
//          "Content-Type": "Application/json"
//        },
//        body: JSON.stringify({name, email, password})
//       }).then(() => {
//         redirect("/auth/signin")
//       })

       
//      }
    

//     return(
//         <div className="w-full h-full flex justify-center items-center">
//             <div className="w-[300px] min-h-[300px] flex flex-col border-slate-400 rounded-md p-4">
//                 <div className="font-semibold mb-5">Register here</div>
//                 <div><hr/></div>
//                 <form action={createUser}>
                    
//                     <div className="flex flex-col mt-3">
//                         <label className="font-semibold text-[18px]">Name</label>
//                         <input type="text"  name="name" required placeholder="eg. Terry Mike" className="w-[300px] h-[45px] flex py-4 border-slate-700 outline rounded-md"/>
//                     </div>

//                     <div className="flex flex-col mt-3">
//                         <label className="font-semibold text-[18px]">Email</label>
//                         <input type="email"  name="email" required placeholder="eg. terrymike@gmail.com" className="w-[300px] h-[45px] flex py-4 border-slate-700 outline rounded-md"/>
//                     </div>

//                     <div className="flex flex-col mt-3">
//                         <label className="font-semibold text-[18px]">Password</label>
//                         <input type="password" name="password" required  className="w-[300px] h-[45px] flex py-4 border-slate-700 outline rounded-md"/>
//                     </div>

//                     <button className="mt-5 w-[300px] h-[45px] bg-blue-700 text-white border-none rounded-md" type= "submit">
//                         Register
//                     </button>

//                     <div className="text-center text-[12px] mt-2 ">
//                          Already have an Account{" "}
//                     <Link href="./signin" className="font-semibold   italic">
//                        Sign in Here
//                    </Link>
//         </div>

//                 </form>
//             </div>
//         </div>
//     )
// }


// export default page;