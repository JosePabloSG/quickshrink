/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as RechartsBarChart, Bar } from 'recharts'

interface ChartProps {
  data: any[]
  xKey: string
  yKey: string
  color: string
}

export function LineChartComponent({ data, xKey, yKey, color }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function BarChartComponent({ data, xKey, yKey, color }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={yKey} fill={color} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

