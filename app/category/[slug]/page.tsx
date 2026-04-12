import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Info } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProblemCard from '@/components/ProblemCard'
import CategoryIcon from '@/components/CategoryIcon'
import CategoryPagination from '@/components/CategoryPagination'
import { INITIAL_PROBLEMS, CATEGORIES } from '@/lib/data'

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = CATEGORIES.find((c) => c.slug === slug)
  if (!category) return {}
  return {
    title: `${category.name} — Troubleshooting Guides`,
    description: `Browse ${category.name} troubleshooting guides. Fix issues with ${category.subcategories.join(', ')}.`,
    alternates: {
      canonical: `https://fixmydevice.com/category/${category.slug}`,
    },
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { slug } = await params
  const { page: pageParam } = await searchParams

  const category = CATEGORIES.find((c) => c.slug === slug)
  if (!category) notFound()

  const categoryProblems = INITIAL_PROBLEMS.filter(
    (p) => p.category === category.id
  )

  const itemsPerPage = 12
  const currentPage = Math.max(1, parseInt(pageParam ?? '1', 10))
  const totalPages = Math.ceil(categoryProblems.length / itemsPerPage)
  const paginatedProblems = categoryProblems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <CategoryIcon name={category.icon} className="w-6 h-6" />
                </div>
                <h1 className="text-4xl font-bold text-slate-900">
                  {category.name}
                </h1>
              </div>
              <p className="text-slate-600 max-w-2xl">
                Browse troubleshooting guides for {category.name.toLowerCase()}.
                Find solutions for {category.subcategories.join(', ')}.
              </p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {category.subcategories.map((sub) => (
                <Badge
                  key={sub}
                  variant="secondary"
                  className="whitespace-nowrap cursor-pointer hover:bg-slate-200"
                >
                  {sub}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {paginatedProblems.length > 0 ? (
              paginatedProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-slate-100 rounded-3xl border-2 border-dashed border-slate-200">
                <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">
                  No guides yet
                </h3>
                <p className="text-slate-500">
                  We&apos;re working on adding more guides for this category.
                </p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <CategoryPagination
              currentPage={currentPage}
              totalPages={totalPages}
              slug={slug}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
