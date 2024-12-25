import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages === 0) {
    return null
  }
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-blue-violet-500 hover:text-blue-violet-600 hover:bg-blue-violet-100"
      >
        <ChevronLeft size={16} />
      </Button>
      {totalPages > 0 && (
        <>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? 'default' : 'outline'}
              onClick={() => onPageChange(i + 1)}
              className={currentPage === i + 1 ? 'bg-blue-violet-500 hover:bg-blue-violet-600' : 'text-blue-violet-500 hover:text-blue-violet-600 hover:bg-blue-violet-100'}
            >
              {i + 1}
            </Button>
          ))}
        </>
      )}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-blue-violet-500 hover:text-blue-violet-600 hover:bg-blue-violet-100"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  )
}

