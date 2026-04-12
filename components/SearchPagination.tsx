'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function SearchPagination({
  currentPage,
  totalPages,
  query,
}: {
  currentPage: number
  totalPages: number
  query: string
}) {
  const router = useRouter()

  const go = (page: number) => {
    router.push(`/search?q=${encodeURIComponent(query)}&page=${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => go(currentPage - 1)}
      >
        Previous
      </Button>
      <span className="text-slate-600 font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => go(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  )
}
