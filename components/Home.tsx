import React from 'react'
import ChatTemplate from './chatTemplate'
import CanvaTemplate from './canvaTemplate'

const Homepage = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-4 p-4">
        <div className="md:col-span-1 lg:col-span-7 h-[50vh] md:h-screen">
          {/* canva */}
          <CanvaTemplate />
        </div>
        <div className="md:col-span-1 lg:col-span-4 h-[50vh] md:h-screen bg-[#1e1e1e8c]">
          {/* Chat  */}
          <ChatTemplate />
        </div>
      </div>
    </section>
  )
}

export default Homepage


