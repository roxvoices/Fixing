import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProblemCard from '@/components/ProblemCard'
import SearchPagination from '@/components/SearchPagination'
import { INITIAL_PROBLEMS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Search through thousands of device troubleshooting guides.',
  robots: { index: false, follow: true },
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {
  const { q: query = '', page: pageParam } = await searchParams

  const results = INITIAL_PROBLEMS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      p.subcategory.toLowerCase().includes(query.toLowerCase()) ||
      p.symptoms.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
      p.causes.some((c) => c.toLowerCase().includes(query.toLowerCase()))
  )

  const itemsPerPage = 12
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))
  const totalPages = Math.ceil(results.length / itemsPerPage)
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Search Results
          </h1>
          <p className="text-slate-500 mb-12">
            Showing {results.length} results for &quot;{query}&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {paginatedResults.length > 0 ? (
              paginatedResults.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">
                  No matches found
                </h3>
                <p className="text-slate-500">
                  Try searching for different keywords like &quot;charging&quot; or
                  &quot;wifi&quot;.
                </p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <SearchPagination
              currentPage={currentPage}
              totalPages={totalPages}
              query={query}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
