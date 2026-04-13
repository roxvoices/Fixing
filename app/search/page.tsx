import type { Metadata } from 'next'
import { Search, Lightbulb, Tag } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProblemCard from '@/components/ProblemCard'
import SearchPagination from '@/components/SearchPagination'
import { INITIAL_PROBLEMS } from '@/lib/data'
import { smartSearch, extractKeywords } from '@/lib/search'

export const metadata: Metadata = {
  title: 'Search Results',
  description: 'Search through thousands of device troubleshooting guides.',
  robots: { index: false, follow: true },
}

const SUGGESTED_SEARCHES = [
  'phone not charging',
  'wifi not working',
  'screen flickering',
  'laptop not turning on',
  'battery draining fast',
  'app keeps crashing',
  'bluetooth not connecting',
  'slow internet',
]

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {
  const { q: query = '', page: pageParam } = await searchParams

  const results  = smartSearch(INITIAL_PROBLEMS, query)
  const keywords = extractKeywords(query)

  const itemsPerPage  = 12
  const currentPage   = Math.max(1, parseInt(pageParam ?? '1', 10))
  const totalPages    = Math.ceil(results.length / itemsPerPage)
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const hasQuery = query.trim().length > 0

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto">

          {hasQuery ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {results.length > 0
                    ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
                    : `No results for "${query}"`}
                </h1>

                {/* Show the keywords the engine extracted — helps user understand + builds trust */}
                {keywords.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap mt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Searching for:</span>
                    </div>
                    {keywords.map(kw => (
                      <span
                        key={kw}
                        className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100 font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Results grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {paginatedResults.length > 0 ? (
                  paginatedResults.map((problem) => (
                    <ProblemCard key={problem.id} problem={problem} />
                  ))
                ) : (
                  <NoResults query={query} />
                )}
              </div>

              {totalPages > 1 && (
                <SearchPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  query={query}
                />
              )}
            </>
          ) : (
            /* Empty state — show popular searches */
            <div className="max-w-2xl mx-auto text-center py-20">
              <Search className="w-16 h-16 text-blue-100 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                What can we help you fix?
              </h1>
              <p className="text-slate-500 mb-10">
                Describe your problem in your own words and we&apos;ll find the right guide.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SUGGESTED_SEARCHES.map((s) => (
                  <a
                    key={s}
                    href={`/search?q=${encodeURIComponent(s)}`}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors border border-blue-100"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

// ─── No results state with smart suggestions ─────────────────────────────────
function NoResults({ query }: { query: string }) {
  const suggestions = getSuggestions(query)

  return (
    <div className="col-span-full py-16 text-center">
      <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-slate-900 mb-2">
        No guides found
      </h3>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Try one of these related searches:
      </p>

      {suggestions.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-700">Suggested searches</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((s) => (
              <a
                key={s}
                href={`/search?q=${encodeURIComponent(s)}`}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors border border-blue-100"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      )}

      <p className="text-sm text-slate-400">
        Tip: use device names like <span className="text-slate-600">&quot;iPhone&quot;</span> or{' '}
        <span className="text-slate-600">&quot;Samsung&quot;</span> and describe the symptom —{' '}
        <span className="text-slate-600">&quot;black screen&quot;</span>,{' '}
        <span className="text-slate-600">&quot;won&apos;t charge&quot;</span>,{' '}
        <span className="text-slate-600">&quot;keeps restarting&quot;</span>
      </p>
    </div>
  )
}

function getSuggestions(query: string): string[] {
  const q = query.toLowerCase()
  const out: string[] = []

  if (q.match(/charg|battery|power|dead|plug/))
    out.push('phone not charging', 'battery draining fast', 'phone not turning on')
  if (q.match(/screen|display|black|flicker|bright|touch/))
    out.push('screen flickering', 'black screen', 'touchscreen not responding')
  if (q.match(/wifi|internet|network|connect|signal|data/))
    out.push('wifi not working', 'slow internet', 'mobile data not working')
  if (q.match(/slow|lag|hang|freez|perform/))
    out.push('phone running slow', 'laptop overheating', 'app freezing')
  if (q.match(/crash|clos|stop|open|launch/))
    out.push('app keeps crashing', 'app not opening')
  if (q.match(/sound|audio|speaker|hear|volume/))
    out.push('no sound on phone', 'speaker not working', 'microphone not working')
  if (q.match(/boot|start|turn|restart|reboot/))
    out.push('laptop not turning on', 'phone stuck on startup', 'boot loop')
  if (q.match(/bluetooth|pair/))
    out.push('bluetooth not connecting', 'bluetooth pairing failed')
  if (q.match(/camera|photo|picture|video/))
    out.push('camera not working', 'camera blurry')

  return [...new Set(out)].slice(0, 6)
}
