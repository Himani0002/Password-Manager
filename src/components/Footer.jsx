import React from 'react'

function Footer() {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full">
      <div className="logo font-bold text-white text-2xl ">
        <span className="text-green-500">  &lt;</span>
        Pass
        <span className="text-green-500">OP/ &gt;</span>

      </div>
      <div className='flex justify-center items-center'>

        Created with <img class="w-10 mx-2" src="heart.png" alt="" /> by Himani Gohil
      </div>
    </div>
  )
}

export default Footer
