import Image from "next/image";
import React from "react";
// import BodyScreen from "./BodyScreen";

const Homes = async() => {
  const res = await fetch("https://vercel.com/cms-build-admin-uhy2-c4zex6qy5/api/content", {
    cache: "no-cache",
    next: {
      tags: ["content"],
    },
  });

  const data = await res.json();

  console.log(data);
  return (
    <div className="w-full h-screen flex justify-center items-center">
       <div className="flex flex-col min-w-[300px] min-h-[300px] md:min-w-[400px] md:flex-row   md:min-h-[200px]  justify-center gap-5 items-center border rounded-md p-2">
          <div className="h-[300px] w-[300px] md:w-[300px] md:h-[200px]  flex justify-center text-center md:text-left flex-col rounded-md ">
            <div className={`${data!.data[0]!.color && `text-[${data!.data[0]!.color}]`},${data!.data[0]!.fontbold && `font-[${data!.data[0]!.fontbold}]`}`}>{data?.data[0]?.title}</div>
            <div >{data?.data[0]?.desc}</div>
          </div>
          
         
          <Image src={data?.data[0]?.image} alt="image" width={300} height={500} className="rounded-md" />
       </div>
    </div>
  );
};

export default Homes;

// className={`${data?.data[0]?.desccolor && `text-[${data?.data[0]?.desccolor}]`
//              } ${data?.data[0]?.descfontbold && `font-${data?.data[0]?.descfontbold}`} ${data?.data[0]?.descfontsize && `text-[${data?.data[0]?.descfontsize}]`}`}



{/* <div className="m-2 border rounded-md w-[calc(100vw-15px)] h-[calc(100vh-120px)]">
      <div className="w-[97.6%] border h-[500px] rounded-md m-4 grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2 bg-red-300 h-[300px] p-4">
          <div
            className={`font-bold text-[20px] mb-4 ${
              data?.data[0]?.color && `text-[${data?.data[0]?.color}]`
            } `}
          >
            {data?.data[0]?.title}
          </div>
          <div>{data?.data[0]?.desc}</div>
        </div>
        <div className="bg-blue-500 col-span-3 h-[300px]">image</div>
      </div>
    </div> */}