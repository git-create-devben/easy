import CanvasComponent from '$/components/canva'
import ChatComponent from '$/components/chat'
import React from 'react'


const page = () => {
  return (
    <main className="min-h-screen h-screen  flex flex-col relative flex-1 overflow-hiden p-2 lg:p-3 bg-gradient-to-bl from-[#171311] to-neutral-700">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-4 p-4 h-screen bg-[#171311]  rounded-md drop-shadow-xl">
      <div className="md:col-span-1 lg:col-span-7 h-[50vh] md:h-screen">
          <CanvasComponent />
        </div>
            <div className="md:col-span-1 lg:col-span-4 h-[50vh] md:h-screen bg-[#1e1e1e8c]">
          <ChatComponent />
        </div>


      </div>
    </main>
  )
}

export default page