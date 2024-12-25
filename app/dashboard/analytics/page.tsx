'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data (replace with actual data in a real application)
const clicksOverTime = [
  { date: '2023-01-01', clicks: 100 },
  { date: '2023-01-02', clicks: 150 },
  { date: '2023-01-03', clicks: 200 },
  { date: '2023-01-04', clicks: 180 },
  { date: '2023-01-05', clicks: 220 },
]

const deviceUsage = [
  { name: 'Desktop', value: 60 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 10 },
]

const deviceColors = {
  Desktop: "#5d66f7", // blue-violet-500
  Mobile: "#26a69a",  // water-leaf-500
  Tablet: "#ee7b7b",  
};


const topPerformingLinks = [
  { url: 'example.com/1', clicks: 1000 },
  { url: 'example.com/2', clicks: 800 },
  { url: 'example.com/3', clicks: 600 },
]

export default function AnalyticsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gravel-900">QuickShrink Analytics</h1>
      
      {/* Filters */}
      <div className="flex space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select URL" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All URLs</SelectItem>
            <SelectItem value="example1">example.com/1</SelectItem>
            <SelectItem value="example2">example.com/2</SelectItem>
            <SelectItem value="example3">example.com/3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-dull-lavender-50 hover:bg-blue-violet-300 transition-colors duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gravel-900">Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gravel-900">1,250</div>
          </CardContent>
        </Card>
        <Card className="bg-dull-lavender-50 hover:bg-blue-violet-300 transition-colors duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gravel-900">Unique Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gravel-900">850</div>
          </CardContent>
        </Card>
        <Card className="bg-dull-lavender-50 hover:bg-blue-violet-300 transition-colors duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gravel-900">Top Performing Link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gravel-900">example.com/1</div>
            <p className="text-xs text-gravel-900">1,000 clicks</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Clicks Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Clicks Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                clicks: {
                  label: "Clicks",
                  color: "hsl(var(--blue-violet-500))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={clicksOverTime}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="clicks" stroke="var(--color-clicks)" fill="var(--color-clicks)" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Device Usage */}
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Usage",
                  color: "hsl(var(--blue-violet-500))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {deviceUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={deviceColors[entry.name as keyof typeof deviceColors]} />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Top Performing Links */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {topPerformingLinks.map((link, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-dull-lavender-50 rounded-md">
                  <span className="text-gravel-900">{link.url}</span>
                  <span className="font-bold text-gravel-900">{link.clicks} clicks</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

