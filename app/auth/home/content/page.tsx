import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
// import BodyScreen from "./BodyScreen";

const page = async() => {

  const res = await fetch("http://localhost:3000/api/content", {
    cache: "no-cache",
    next: {
      tags: ["content"],
    },
  });

  const data = await res.json();


  const createcontent = async(formData:FormData) => {
    "use server"
    const title = formData.get("title");
    const desc = formData.get("desc");
    const color = formData.get("color");
    const fontsize = formData.get("fontsize");
    const fontbold = formData.get("fontbold");
    const image = formData.get("image");

    

    console.log(title);
      
    const newurl = "http://localhost:3000/api/content"

    await fetch(newurl,{
      method: 'POST',
      headers:{
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({title,desc,color,fontsize,fontbold,image})
    }).then(() => {
      redirect("/auth/home")      
    })
    
    
    revalidateTag("content");
  }


  const updatecontent = async(formData:FormData) => {
    "use server"
    const title = formData.get("title");
    const desc = formData.get("desc");
    const color = formData.get("color");
    const fontsize = formData.get("fontsize");
    const fontbold = formData.get("fontbold");
    const image = formData.get("image");
    const desccolor = formData.get("desccolor");
    const descfontsize = formData.get("descfontsize");
    const descfontbold = formData.get("descfontbold");
  

    

    console.log(title);
      
    const newurl = "http://localhost:3000/api/content"

    await fetch(`${newurl}/${data?.data[0]._id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({title,desc,color,image,fontbold,fontsize,desccolor,
        descfontsize,
        descfontbold})
    }).then(() => {
      redirect("/auth/home")      
    })
    
    
    revalidateTag("content");
  }


  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="min-w-[320px] md:min-w-[400px] min-h-[300px] border rounded-md p-4">

         <div className="font-semibold">Create Content</div>

          <form action={data?.data.length === 0 ?createcontent:updatecontent}>
            
             
             
             <div className="flex flex-col md:flex-row md:items-center md:gap-3 mt-10 md:mt-0">
             <div className="flex flex-col mt-3">
                  <label className="font-semibold text-[16px]">Title:</label>
                   <input type="text"  name="title" defaultValue={data?.data[0]?.title} placeholder="title" className="w-[220px] md:w-[280px] h-[35px] flex px-4 border  rounded-md"/>
              </div>

              <div className="flex items-center mt-7 font-">
                   <input type="color" className={`w-[20px] h-[20px] rounded-full ${data?.data[0]?.color && `bg-[${data?.data[0]?.color}]`} `} defaultValue={data?.data[0]?.color} name="color"/>
              </div>

              <div className="flex mt-7">
                   <input type="range" defaultValue={data?.data[0]?.fontsize} name="fontsize"  className="w-[120px]  h-[20px] flex px-4 border rounded-md"/>
                   
              </div>

              <div className="flex mt-7">
             <select className="w-[120px]  h-[20px] flex px-4 border rounded-md" name="fontbold">     
              <option value="black" >black</option>
              <option value="extra-bold">extra-bold</option>
            <option value="bold">bold</option>
            <option value="semi-bold">semi-bold</option>
              <option value="medium">medium</option>
              <option value="normal">normal</option>
              <option value="light">light</option>
              <option value="extra-ligh">extra-light</option>
              <option value="thin">thin</option>
         </select>
              </div>


             </div>

         


              <div className="flex flex-col md:flex-row md:items-center md:gap-3 mt-10 md:mt-0 ">
              <div className="flex flex-col mt-3">
                  <label className="font-semibold text-[16px]">Description:</label>
                  {/* <textarea className="p-4  border-slate-500" placeholder="Description" name="desc"></textarea> */}
                   <input type="text"  name="desc" defaultValue={data?.data[0]?.desc} placeholder="title" className="w-[220px] md:w-[280px] h-[35px] flex px-4 border rounded-md"/>
              </div>

              <div className="flex items-center mt-7 font-">
                   <input type="color" className={`w-[20px] h-[20px] rounded-full ${data?.data[0]?.color && `bg-[${data?.data[0]?.color}]`} `} defaultValue={data?.data[0]?.color} name="desccolor"/>
              </div>

              <div className="flex mt-7">
                   <input type="range" defaultValue={data?.data[0]?.fontsize} name="descfontsize"  className="w-[120px] h-[20px] flex px-4 border rounded-md"/>
                   
              </div>

              <div className="flex mt-7">
             <select className="w-[120px] h-[20px] flex px-4 border rounded-md" name="descfontbold">     
              <option value="black" >black</option>
              <option value="extra-bold">extra-bold</option>
            <option value="bold">bold</option>
            <option value="semi-bold">semi-bold</option>
              <option value="medium">medium</option>
              <option value="normal">normal</option>
              <option value="light">light</option>
              <option value="extra-ligh">extra-light</option>
              <option value="thin">thin</option>
         </select>
              </div>

              </div>




          
              <div className="flex flex-col mt-10 md:mt-3">
                  <label className="font-semibold text-[16px]">image</label>
                   <input type= "text"  name="image" defaultValue={data?.data[0]?.image} placeholder="title" className="w-[220px] md:w-[280px] h-[35px] flex px-4 border rounded-md"/>
              </div>



              <button className="w-[200px] md:w-[380px] h-[40px] flex flex-col mt-10  bg-slate-500 rounded-md justify-center items-center text-white" type="submit">
                  {data?.data.length === 0 ? "create" : "update"}
              </button>
          </form>
        </div>
    </div>
  );
};

export default page;