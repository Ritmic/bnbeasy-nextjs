'use client'
import { TextField } from '@/components'
import CustomButton from '@/components/inputs/CustomButton'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Database } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


const Login = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
        <form 
        action="/auth/login" 
        method='post'
        className='m-16 p-16 flex flex-col bg-white rounded-lg max-w-[800px] gap-3'>
            <h2 className='text-3xl font-bold my-5'>Login</h2>
            <div className='flex flex-col'>
                <label className='mb-1 font-semibold'>Email</label>
                <TextField
                    type='email'
                    name='email'
                />  
            </div>
            <div className='flex flex-col'>
                <label className='mb-1 font-semibold'>Password</label>
                <TextField
                    type='password'
                    name='password'
                />
            </div>
            <div className='flex justify-center'>
                <CustomButton title="register" formAction='/auth/logout' btnType='submit' containerStyles='rounded-full mt-5' />
                <div className='w-[40px]' />
                <CustomButton title="login" btnType='submit' containerStyles=' text-white bg-green-500 rounded-full mt-5' />
            </div>
        </form>
    </div>
    )
}

export default Login

/*

*/