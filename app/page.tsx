import Link from 'next/link'
import { ArrowRight, PlusCircle, Megaphone, Star, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProblemCard from '@/components/ProblemCard'
import CategoryIcon from '@/components/CategoryIcon'
import { INITIAL_PROBLEMS, CATEGORIES } from '@/lib/data'

export default function HomePage() {
  const popularFixes = INITIAL_PROBLEMS.filter((p) => p.isPopular)
  const recentFixes = [...INITIAL_PROBLEMS]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-24 pb-12 px-4">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto text-center mb-20">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1 rounded-full">
                Professional Repair Guides
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Fix Your Device <br />{' '}
                <span className="text-blue-600">Like a Professional</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
                Step-by-step solutions for common tech problems. No expensive
                tools required, just clear instructions.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} href={`/category/${cat.slug}`}>
                  <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 group overflow-hidden h-full">
                    <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <CategoryIcon
                          name={cat.icon}
                          className="w-6 h-6 md:w-8 md:h-8"
                        />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-1">
                        {cat.subcategories.length} subcategories
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Fixes */}
          <section className="max-w-7xl mx-auto mb-20 px-2 md:px-0">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Popular Fixes
              </h2>
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {popularFixes.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </section>

          {/* Recent Fixes */}
          <section className="max-w-7xl mx-auto mb-20 px-2 md:px-0">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Recent Fixes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {recentFixes.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </section>

          {/* Request a Fix CTA */}
          <section className="max-w-7xl mx-auto px-4 mb-20">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-500/20">
                  <PlusCircle className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Can&apos;t find your problem?
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  Our database is growing every day. If you have a device issue
                  that isn&apos;t listed, let us know and our experts will create a
                  guide for you.
                </p>
                <Link href="/request-fix">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                    Request a Fix Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
