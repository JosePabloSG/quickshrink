'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamic import of Sidebar with no SSR
const Sidebar = dynamic(() => import('@/components/layout/sidebar'), {
  ssr: false
})

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div suppressHydrationWarning>
        <Sidebar />
      </div>
      <main className="flex-1 p-8 md:ml-64 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout