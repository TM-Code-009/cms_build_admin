"use client"

import Link from "next/link"
import { useState } from "react"
import Dropdown from "../home/dropdown"
import { MdMenu } from "react-icons/md"




const Header = () => {

    const [toogle,setToggle] = useState<boolean>()

    const onToggle = () => {
        setToggle(!toogle)
    }

    const header = [
        {
            id:1,
            name: "Home",
            url: "/auth/home"
        },
        {
            id:2,
            name: "About",
            url: "/auth/home/about"
        },
        {
            id:3,
            name: "Creacte content",
            url: "/auth/home/content"
        },
        {
            id:4,
            name: "reach",
            url: "/"
        },
    ]

    return (
        <div className="relative flex md:bg-slate-700  md:w-[300px]  h-full  justify-center items-center">
            <div className=" w-full h-full flex justify-between items-center p-6">
        <div className="hidden md:flex flex-col  h-screen gap-3 ">
                <div className="font-bold">logo</div>
                <div className="flex gap-7 mt-10 flex-col">
                    {
                        header.map((el) => (
                           <Link key={el.id} href={el.url}>
                                <nav  className="flex items-center text-[16px]  hover:bg-blue-500 text-white cursor-pointer border-non rounded-md w-[200px] h-[40px] transition-all duration-300 px-2">
                                {""}
                             {el.name}
                            </nav>
                           </Link>
                        ))
                    }
                </div>

                
            </div>
            
            </div>

            <div className="abolute left-0 flex text-[20px] md:hidden" onClick={onToggle}><MdMenu/></div>


           
      {toogle && (
        <div className="absolute top-1 right-0 ">
          <Dropdown header={header} onToggle={onToggle} />
        </div>
      )}
        </div>
    )
}


export default Header