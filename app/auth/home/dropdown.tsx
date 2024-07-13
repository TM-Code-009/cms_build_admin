import Link from "next/link"
import { FC } from "react"
import { MdCancel } from "react-icons/md"


interface iDrops{
   header: {}[],
   onToggle:any
}
const Dropdown:FC<iDrops> = ({ header, onToggle }) => {
    return(
      <div className="w-[300px] rounded-b-md bg-slate-700 min-h-[220px] flex flex-col ">
      <div className="flex gap-7 mt-10 flex-col p-2">
        <div className="text-[20px]" onClick={onToggle}><MdCancel/></div>
      {header?.map((el: any) => (
          <Link href={el.url} key={el.id}>
             <div
            
            className=" flex items-center text-[16px] hover:bg-blue-500 text-white cursor-pointer border-non rounded-md w-[200px] h-[40px] transition-all duration-300 px-2"
            onClick={onToggle}
          >
            {el.name}
          </div>
          </Link>
        ))}
      </div>

    </div>
    )
}

export default Dropdown