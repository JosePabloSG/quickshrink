'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LayoutDashboard, LinkIcon, BarChart2, Settings, LogOut } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard Overview', href: '/dashboard' },
  { icon: LinkIcon, label: 'URL Management', href: '/dashboard/urls' },
  { icon: BarChart2, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

const Sidebar = () => {
  const pathname = usePathname()

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...')
  }

  return (
    <motion.aside className="fixed inset-y-0 left-0 w-64 bg-dull-lavender-100 text-gravel-700 shadow-lg overflow-y-auto z-40 flex flex-col">
      <div className="flex items-center px-6 py-4 border-b border-dull-lavender-200">
        <div className="w-10 h-10 rounded-full bg-blue-violet-200 flex items-center justify-center">
          <Image src="/placeholder.svg" alt="Avatar" width={40} height={40} className="rounded-full" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gravel-800">John Doe</p>
          <p className="text-xs text-gravel-500">User</p>
        </div>
      </div>

      <nav className="flex-grow px-4 pt-8 pb-4 space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} passHref>
              <motion.div
                className={`flex items-center p-2 rounded-md mb-4
                  ${isActive ? 'bg-blue-violet-500 text-white' : 'hover:bg-blue-violet-100 hover:text-water-leaf-500'}`}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <item.icon className="mr-3 h-6 w-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            </Link>
          )
        })}
      </nav>

      <motion.button
        onClick={handleLogout}
        className="flex items-center p-2 mb-4 mx-4 rounded-md text-gravel-700 hover:bg-beauty-bush-300 hover:text-white"
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <LogOut className="mr-3 h-6 w-6" />
        <span className="text-sm font-medium">Logout</span>
      </motion.button>
    </motion.aside>
  )
}

export default Sidebar