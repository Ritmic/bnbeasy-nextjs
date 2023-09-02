import { Database } from '@/types';
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = async () => {
    const supabase = createServerComponentClient<Database>({cookies});

    const signOut =  ()=>{
        supabase.auth.signOut()
    }

    const {
        data: { session },
    } = await supabase.auth.getSession()
    console.log(session)
    if (session == null) {
        redirect("/");
    }

    const establishment = await supabase.from("establishment").select();
    const room = await supabase.from("room").select();

    return (
        <div>
            <div>

            </div>
        </div>
    )
}

export default Dashboard