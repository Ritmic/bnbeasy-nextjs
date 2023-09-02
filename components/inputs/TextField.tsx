'use client'
import { TextFieldProps } from '@/types'
import React from 'react'


const TextField = (
  { type, hint, className, name ,onValueChange }: TextFieldProps
) => {
  return (
    <input 
          type={type !== "" ? type : "text"} 
          name={name}
          placeholder={hint} 
          onChange={(e) => onValueChange !== undefined ? onValueChange(e.target.value) : ''}
          className={`px-4 py-2 border-2 border-gray-300 rounded-md ${className}`}
           
           />)
}

export default TextField