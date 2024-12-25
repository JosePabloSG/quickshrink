'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function SettingsPage() {
  const [expandedSections, setExpandedSections] = useState({
    profile: true,
    preferences: true,
    account: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="min-h-screen bg-dull-lavender-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gravel-900">Settings</h1>

      {/* Profile Section */}
      <section className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div
          className="bg-gravel-50 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('profile')}
        >
          <h2 className="text-xl font-semibold text-gravel-900">Profile</h2>
          {expandedSections.profile ? <ChevronUp /> : <ChevronDown />}
        </div>
        {expandedSections.profile && (
          <div className="p-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-gravel-600">john.doe@example.com</p>
              </div>
            </div>
            <button className="bg-blue-violet-500 hover:bg-blue-violet-600 text-white px-4 py-2 rounded transition-colors duration-200">
              Edit Profile
            </button>
          </div>
        )}
      </section>

      {/* Preferences Section */}
      <section className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div
          className="bg-gravel-50 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('preferences')}
        >
          <h2 className="text-xl font-semibold text-gravel-900">Preferences</h2>
          {expandedSections.preferences ? <ChevronUp /> : <ChevronDown />}
        </div>
        {expandedSections.preferences && (
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <ToggleSwitch />
            </div>
            <div className="flex items-center justify-between">
              <span>Default URL Behavior</span>
              <select className="border rounded p-2">
                <option>Short</option>
                <option>Original</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span>Privacy Mode</span>
              <ToggleSwitch />
            </div>
          </div>
        )}
      </section>

      {/* Account Management Section */}
      <section className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        <div
          className="bg-gravel-50 p-4 flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('account')}
        >
          <h2 className="text-xl font-semibold text-gravel-900">Account Management</h2>
          {expandedSections.account ? <ChevronUp /> : <ChevronDown />}
        </div>
        {expandedSections.account && (
          <div className="p-4 space-y-4">
            <button className="w-full bg-blue-violet-500 hover:bg-blue-violet-600 text-white px-4 py-2 rounded transition-colors duration-200">
              Reset Password
            </button>
            <button className="w-full bg-beauty-bush-500 hover:bg-beauty-bush-600 text-white px-4 py-2 rounded transition-colors duration-200">
              Delete Account
            </button>
            <button className="w-full border border-gravel-300 hover:bg-gravel-100 px-4 py-2 rounded transition-colors duration-200">
              View Terms of Service
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

// ToggleSwitch component with animation
function ToggleSwitch() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isActive ? 'bg-water-leaf-400' : 'bg-gravel-300'
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      {/* Toggle switch animation */}
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isActive ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  )
}

