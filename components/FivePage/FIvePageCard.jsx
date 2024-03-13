import React from 'react'

export default function FIvePageCard() {
  return (
    <div className='flex items-center justify-center flex-col w-[400px] FivePageCard hover:duration-500'>
        <img src="https://apteka.uz/upload/iblock/fa9/fa94b0038b987352421e51c66e785770.png" alt="" />
        <h1 className='text-black font-bold text-[18px]'>Активная жизнь без "приливов" все в ваших руках</h1>
        <h1>И все же природу обмануть невозможно, и почти каждая женщина после сорока лет задумывается о приближении климакса.</h1>
        <button className="btn hidden absolute mb-32">Glass button</button>
    </div>
  )
}
