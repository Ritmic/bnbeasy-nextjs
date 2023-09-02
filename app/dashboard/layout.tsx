import { DashboardHeader, DashboardSideBar } from '@/components'
import DashboardLayout from '@/components/navigation/DashboardLayout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'BnB easy dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </section>
  )
}
