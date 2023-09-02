'use client'
import Image from 'next/image'
import Auth, { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
export default function Home() {
  const supabase = createClientComponentClient<Database>()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
