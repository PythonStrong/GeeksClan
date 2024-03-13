import React from "react";
import { ImAidKit } from "react-icons/im";

export default function FiveNavCard({title, amount}) {
  return (
      <div className="bg-white w-[600px] h-[60px] flex items-center gap-2 p-1 FiveCard select-none cursor-pointer">
        <ImAidKit style={{color:'#2FD3AEFF'}} size={20}/>
        <h1 className="font-semibold">{title}</h1>
        <h1 className="text-gray-400">{amount}</h1>
      </div>
  );
}
