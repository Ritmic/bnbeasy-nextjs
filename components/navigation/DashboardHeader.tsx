'use client'
import { DashboardHeaderProps } from '@/types'
import React from 'react'
import {FiMenu} from 'react-icons/fi'

const DashboardHeader = (
    {style, onMenuButtonClicked} : DashboardHeaderProps
) => {
  return (
    <div className={`flex px-16 py-4 items-center ${style}`}>
        <h1 className='text-2xl'>BnB easy</h1>
        <div className='grow'/>
        <button className='md:hidden' onClick={onMenuButtonClicked}>
            <FiMenu size={25}/>
        </button>
        <button className='hidden md:block'>
            Davide
        </button>
    </div>
  )
}

export default DashboardHeader