// "use client"

// import { signIn } from "next-auth/react"
// import Link from "next/link"
// import React from "react";


// const page = () => {
    
//     const signinuser = async(formData:FormData) => {
    

//      const email = formData.get("email")
//      const password = formData.get("password")
     
//      signIn("credentials",{email,password})
       
//      }
    

//     return(
//         <div className="w-full h-full flex justify-center items-center">
//             <div className="w-[300px] min-h-[300px] flex flex-col border-slate-400 rounded-md p-4">
//                 <div className="font-semibold mb-5">Sign in here</div>
//                 <div><hr/></div>
//                 <form action={signinuser}>
                    
//                     <div className="flex flex-col mt-3">
//                         <label className="font-semibold text-[18px]">Email</label>
//                         <input type="email"  name="email" required placeholder="eg. terrymike@gmail.com" className="w-[300px] h-[45px] flex py-4 border-slate-700 outline rounded-md"/>
//                     </div>

//                     <div className="flex flex-col mt-3">
//                         <label className="font-semibold text-[18px]">Password</label>
//                         <input type="password" name="password" required  className="w-[300px] h-[45px] flex py-4 border-slate-700 outline rounded-md"/>
//                     </div>

//                     <button className="mt-5 w-[300px] h-[45px] bg-blue-700 text-white border-none rounded-md" type= "submit">
//                         Sign in
//                     </button>

//                     <div className="text-center text-[12px] mt-2 ">
//                          Don't have an Account{" "}
//                     <Link href="/register" className="font-semibold   italic">
//                        Register Here
//                    </Link>
//                  </div>

//                 </form>
//             </div>
//         </div>
//     )
// }


// export default page;