'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import FilterOptions from '@/components/url-management/FilterOptions'
import URLTable from '@/components/url-management/URLTable'
import Pagination from '@/components/url-management/Pagination'
import { useToast } from '@/hooks/use-toast'

export default function URLManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState<{ date: string | null; clicks: string | null; expiration: string | null }>({ date: null, clicks: null, expiration: null })
  const { toast } = useToast()

  // Placeholder data - replace with actual data fetching logic
  const [urls, setUrls] = useState([
    { id: 1, shortUrl: 'qshrink.co/abc123', originalUrl: 'https://example.com/very-long-url-1', clicks: 100, createdAt: '2023-05-01' },
    { id: 2, shortUrl: 'qshrink.co/def456', originalUrl: 'https://example.com/very-long-url-2', clicks: 50, createdAt: '2023-05-02' },
    { id: 3, shortUrl: 'qshrink.co/ghi789', originalUrl: 'https://example.com/very-long-url-3', clicks: 25, createdAt: '2023-05-03' },
    { id: 4, shortUrl: 'qshrink.co/jkl012', originalUrl: 'https://example.com/very-long-url-4', clicks: 10, createdAt: '2023-05-04' },
    { id: 5, shortUrl: 'qshrink.co/mno345', originalUrl: 'https://example.com/very-long-url-5', clicks: 5, createdAt: '2023-05-05' },
    { id: 6, shortUrl: 'qshrink.co/pqr678', originalUrl: 'https://example.com/very-long-url-6', clicks: 2, createdAt: '2023-05-06' },
    { id: 7, shortUrl: 'qshrink.co/stu901', originalUrl: 'https://example.com/very-long-url-7', clicks: 1, createdAt: '2023-05-07' },
    { id: 8, shortUrl: 'qshrink.co/vwx234', originalUrl: 'https://example.com/very-long-url-8', clicks: 0, createdAt: '2023-05-08' },
    { id: 9, shortUrl: 'qshrink.co/yz012', originalUrl: 'https://example.com/very-long-url-9', clicks: 0, createdAt: '2023-05-09' },
    { id: 10, shortUrl: 'qshrink.co/abc345', originalUrl: 'https://example.com/very-long-url-10', clicks: 0, createdAt: '2023-05-10' },
    { id: 11, shortUrl: 'qshrink.co/def678', originalUrl: 'https://example.com/very-long-url-11', clicks: 0, createdAt: '2023-05-11' },
    { id: 12, shortUrl: 'qshrink.co/ghi901', originalUrl: 'https://example.com/very-long-url-12', clicks: 0, createdAt: '2023-05-12' },
    { id: 13, shortUrl: 'qshrink.co/jkl234', originalUrl: 'https://example.com/very-long-url-13', clicks: 0, createdAt: '2023-05-13' },
    { id: 14, shortUrl: 'qshrink.co/mno567', originalUrl: 'https://example.com/very-long-url-14', clicks: 0, createdAt: '2023-05-14' },
    { id: 15, shortUrl: 'qshrink.co/pqr890', originalUrl: 'https://example.com/very-long-url-15', clicks: 0, createdAt: '2023-05-15' },
    { id: 16, shortUrl: 'qshrink.co/stu123', originalUrl: 'https://example.com/very-long-url-16', clicks: 0, createdAt: '2023-05-16' },
    { id: 17, shortUrl: 'qshrink.co/vwx456', originalUrl: 'https://example.com/very-long-url-17', clicks: 0, createdAt: '2023-05-17' },
    { id: 18, shortUrl: 'qshrink.co/yz789', originalUrl: 'https://example.com/very-long-url-18', clicks: 0, createdAt: '2023-05-18' },
    { id: 19, shortUrl: 'qshrink.co/abc012', originalUrl: 'https://example.com/very-long-url-19', clicks: 0, createdAt: '2023-05-19' },
    { id: 20, shortUrl: 'qshrink.co/def345', originalUrl: 'https://example.com/very-long-url-20', clicks: 0, createdAt: '2023-05-20' },
  ])

  const itemsPerPage = 5
  const totalPages = Math.ceil(urls.length / itemsPerPage)

  const paginatedUrls = urls.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page on new search
  }

  const handleFilterChange = (newFilter: { date: string | null; clicks: string | null; expiration: string | null }) => {
    setFilter(newFilter)
    setCurrentPage(1) // Reset to first page on filter change
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleUpdateUrl = (id: number, newShortUrl: string, newOriginalUrl: string) => {
    setUrls(urls.map(url =>
      url.id === id ? { ...url, shortUrl: newShortUrl, originalUrl: newOriginalUrl } : url
    ))
    toast({
      title: "URL actualizada",
      description: "La URL ha sido actualizada exitosamente.",
    })
  }

  const handleDeleteUrl = (id: number) => {
    setUrls(urls.filter(url => url.id !== id))
    toast({
      title: "URL eliminada",
      description: "La URL ha sido eliminada exitosamente.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gravel-900">URL Management</h1>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for URLs..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gravel-300 focus:outline-none focus:ring-2 focus:ring-water-leaf-400"
          value={searchQuery}
          onChange={handleSearch}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gravel-400" size={20} />
      </div>

      {/* Filter Options */}
      <FilterOptions onFilterChange={handleFilterChange} />

      {/* URL Table */}
      <URLTable
        urls={paginatedUrls}
        onUpdateUrl={handleUpdateUrl}
        onDeleteUrl={handleDeleteUrl}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}