'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface FilterOptionsProps {
  onFilterChange: (filter: { date: string | null; clicks: string | null; expiration: string | null }) => void
}

export default function FilterOptions({ onFilterChange }: FilterOptionsProps) {
  const [dateFilter, setDateFilter] = useState<string | null>(null)
  const [clicksFilter, setClicksFilter] = useState<string | null>(null)
  const [expirationFilter, setExpirationFilter] = useState<string | null>(null)

  const handleFilterChange = (type: 'date' | 'clicks' | 'expiration', value: string | null) => {
    let newFilter: { date: string | null; clicks: string | null; expiration: string | null }
    switch (type) {
      case 'date':
        setDateFilter(value)
        newFilter = { date: value, clicks: clicksFilter, expiration: expirationFilter }
        break
      case 'clicks':
        setClicksFilter(value)
        newFilter = { date: dateFilter, clicks: value, expiration: expirationFilter }
        break
      case 'expiration':
        setExpirationFilter(value)
        newFilter = { date: dateFilter, clicks: clicksFilter, expiration: value }
        break
    }
    onFilterChange(newFilter)
  }

  return (
    <div className="flex space-x-4 mb-6">
      <Select onValueChange={(value) => handleFilterChange('date', value)}>
        <SelectTrigger className="w-[180px] border-blue-violet-300 focus:ring-blue-violet-500">
          <SelectValue placeholder="Filter by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="year">This Year</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange('clicks', value)}>
        <SelectTrigger className="w-[180px] border-blue-violet-300 focus:ring-blue-violet-500">
          <SelectValue placeholder="Filter by clicks" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-10">0-10 clicks</SelectItem>
          <SelectItem value="11-50">11-50 clicks</SelectItem>
          <SelectItem value="51-100">51-100 clicks</SelectItem>
          <SelectItem value="100+">100+ clicks</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilterChange('expiration', value)}>
        <SelectTrigger className="w-[180px] border-blue-violet-300 focus:ring-blue-violet-500">
          <SelectValue placeholder="Filter by expiration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="expired">Expired</SelectItem>
          <SelectItem value="expiring-soon">Expiring Soon</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

