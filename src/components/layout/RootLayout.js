import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 h-screen w-screen bg-black text-white">
       <Navbar />
       <div className="overflow-y-auto w-full h-full">
        <Outlet/>
       </div>
     </div>
  )
}

export default RootLayout