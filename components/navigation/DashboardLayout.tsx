'use client'
import React, { PropsWithChildren, useState } from 'react'
import { DashboardHeader, DashboardSideBar } from '..'

const DashboardLayout = (props : PropsWithChildren) => {

    const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='grid min-h-screen grid-rows-header bg-red-100'>
    <DashboardHeader style='bg-white' onMenuButtonClicked={()=> setShowSidebar((prev) => !prev)} />
    <div className="grid md:grid-cols-sidebar">
      <DashboardSideBar open={showSidebar} setOpen={setShowSidebar} />
      {props.children}
    </div>
  </div>
)
}

export default DashboardLayout