'use client'

import { useState } from 'react'
import { Edit, Trash2, Copy, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { EditUrlModal } from './EditUrlModal'
import { DeleteUrlModal } from './DeleteUrlModal'
import { useToast } from '@/hooks/use-toast'

interface URL {
  id: number
  shortUrl: string
  originalUrl: string
  clicks: number
  createdAt: string
}

interface URLTableProps {
  urls: URL[]
  onUpdateUrl: (id: number, newShortUrl: string, newOriginalUrl: string) => void
  onDeleteUrl: (id: number) => void
}

export default function URLTable({ urls, onUpdateUrl, onDeleteUrl }: URLTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof URL>('createdAt')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [editingUrl, setEditingUrl] = useState<URL | null>(null)
  const [deletingUrl, setDeletingUrl] = useState<URL | null>(null)
  const { toast } = useToast()

  const handleSort = (column: keyof URL) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const sortedUrls = [...urls].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const handleCopy = (shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl)
    toast({
      title: "URL copiada",
      description: "La URL corta ha sido copiada al portapapeles.",
    })
  }

  const handleExternalLink = (shortUrl: string) => {
    window.open(`https://${shortUrl}`, '_blank')
  }

  return (
    <>
      {urls.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort('shortUrl')}>
                Short URL {sortColumn === 'shortUrl' && (sortDirection === 'asc' ? '▲' : '▼')}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('originalUrl')}>
                Original URL {sortColumn === 'originalUrl' && (sortDirection === 'asc' ? '▲' : '▼')}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('clicks')}>
                Clicks {sortColumn === 'clicks' && (sortDirection === 'asc' ? '▲' : '▼')}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('createdAt')}>
                Created At {sortColumn === 'createdAt' && (sortDirection === 'asc' ? '▲' : '▼')}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUrls.map((url, index) => (
              <TableRow key={url.id} className={index % 2 === 0 ? 'bg-gravel-50' : 'bg-gravel-100'}>
                <TableCell>{url.shortUrl}</TableCell>
                <TableCell className="max-w-xs truncate">{url.originalUrl}</TableCell>
                <TableCell>{url.clicks}</TableCell>
                <TableCell>{new Date(url.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-blue-violet-500 hover:text-blue-violet-600 hover:bg-blue-violet-100"
                      onClick={() => setEditingUrl(url)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-beauty-bush-500 hover:text-beauty-bush-600 hover:bg-beauty-bush-100"
                      onClick={() => setDeletingUrl(url)}
                    >
                      <Trash2 size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-dull-lavender-500 hover:text-dull-lavender-600 hover:bg-dull-lavender-100"
                      onClick={() => handleCopy(url.shortUrl)}
                    >
                      <Copy size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="text-water-leaf-500 hover:text-water-leaf-600 hover:bg-water-leaf-100"
                      onClick={() => handleExternalLink(url.shortUrl)}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center py-8 text-gravel-500">
          No hay URLs en esta página.
        </div>
      )}
      {editingUrl && (
        <EditUrlModal
          isOpen={!!editingUrl}
          onClose={() => setEditingUrl(null)}
          url={editingUrl}
          onSave={onUpdateUrl}
        />
      )}
      {deletingUrl && (
        <DeleteUrlModal
          isOpen={!!deletingUrl}
          onClose={() => setDeletingUrl(null)}
          url={deletingUrl}
          onDelete={onDeleteUrl}
        />
      )}
    </>
  )
}
