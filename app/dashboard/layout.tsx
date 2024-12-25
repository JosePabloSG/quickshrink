import Sidebar from '@/components/layout/sidebar'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout

