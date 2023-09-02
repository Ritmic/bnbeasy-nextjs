'use client'
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'
import { format } from 'path'

const CustomButton = (
    { title, containerStyles, formAction ,handleClick, btnType }: CustomButtonProps
) => {
    return (
        <button
            disabled={false}
            type={ btnType || "button"}
            formAction={formAction}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={'flex-1'}>
                {title}
            </span>
        </button>
    )
}

export default CustomButton;