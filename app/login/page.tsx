'use client'
import { TextField } from '@/components'
import CustomButton from '@/components/inputs/CustomButton'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Database } from '@/types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


const Login = () => {
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignIn = async () => {
        const mail = userData.email
        const password = userData.password
        await supabase.auth.signInWithPassword(
            {
                email: mail,
                password: password
            }
        )
        router.push("/")
    }

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className='m-16 p-16 flex flex-col bg-white rounded-lg max-w-[800px] gap-3'>
                <h2 className='text-3xl font-bold my-5'>Login</h2>
                <div className='flex flex-col'>
                    <label className='mb-1 font-semibold'>Email</label>
                    <TextField
                        type='Email'
                        onValueChange={(v) => {
                            setUserData({
                                ...userData,
                                email: v
                            })
                        }}></TextField>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1 font-semibold'>Password</label>
                    <TextField
                        type='password'
                        onValueChange={(v) => {
                            setUserData({
                                ...userData,
                                password: v
                            })
                        }}></TextField>
                </div>
                <div className='flex justify-center'>
                    <CustomButton title="register" containerStyles='rounded-full mt-5' />
                    <div className='w-[40px]' />
                    <CustomButton
                        title="sign-in"
                        containerStyles='bg-green-500 text-white rounded-full mt-5'
                        handleClick={handleSignIn}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login