import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Info,
  Smartphone,
  Star,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProblemCard from '@/components/ProblemCard'
import ProblemInteractive from '@/components/ProblemInteractive'
import { ALL_PROBLEMS, PROBLEMS_BY_SLUG, CATEGORIES } from '@/lib/allProblems'

// Only generate pages that exist — no dynamic fallback
export const dynamicParams = false

// Pre-render every single slug from ALL data files at build time
export async function generateStaticParams() {
  return ALL_PROBLEMS.map((problem) => ({
    slug: problem.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const problem = PROBLEMS_BY_SLUG.get(slug)
  if (!problem) return {}

  const category = CATEGORIES.find((c) => c.id === problem.category)

  return {
    title: problem.title,
    description: problem.shortDescription,
    keywords: [
      problem.title,
      problem.subcategory,
      category?.name ?? '',
      'fix',
      'troubleshoot',
      'repair guide',
      ...problem.symptoms,
    ],
    openGraph: {
      title: `${problem.title} | FixMyDevice`,
      description: problem.shortDescription,
      type: 'article',
    },
    alternates: {
      canonical: `https://fixmydevice.vercel.app/problem/${problem.slug}`,
    },
  }
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const problem = PROBLEMS_BY_SLUG.get(slug)

  if (!problem) notFound()

  const category = CATEGORIES.find((c) => c.id === problem.category)
  const relatedProblems = problem.relatedProblemIds
    .map((id) => ALL_PROBLEMS.find((p) => p.id === id))
    .filter(Boolean) as typeof ALL_PROBLEMS

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: problem.title,
    description: problem.shortDescription,
    step: problem.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fixmydevice.vercel.app' },
      {
        '@type': 'ListItem',
        position: 2,
        name: category?.name ?? problem.category,
        item: `https://fixmydevice.vercel.app/category/${category?.slug ?? problem.category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: problem.title,
        item: `https://fixmydevice.vercel.app/problem/${problem.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-4xl mx-auto">

          <nav className="flex items-center gap-2 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="text-slate-400 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <Link
              href={`/category/${category?.slug}`}
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              {category?.name}
            </Link>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {problem.title}
            </h1>
            <div className="flex items-center gap-2 shrink-0">
              <Star className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-900 text-sm md:text-base">4.5</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            {problem.shortDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
            <Card className="border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {problem.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Possible Causes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {problem.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              Step-by-Step Fix
            </h2>
            <div className="space-y-6">
              {problem.steps.map((step, idx) => (
                <div key={step.id} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-blue-100 bg-white text-blue-600 font-bold flex items-center justify-center shrink-0 group-hover:border-blue-600 transition-colors">
                      {idx + 1}
                    </div>
                    {idx < problem.steps.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-100 my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {problem.warning && (
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 mb-12 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Warning</h4>
                <p className="text-amber-800 text-sm">{problem.warning}</p>
              </div>
            </div>
          )}

          <div className="p-8 rounded-3xl bg-blue-600 text-white mb-12 shadow-xl shadow-blue-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6" />
              When to See a Technician
            </h3>
            <p className="text-blue-50 leading-relaxed">{problem.technicianAdvice}</p>
          </div>

          <ProblemInteractive problem={problem} />

          {relatedProblems.length > 0 && (
            <section>
              <Separator className="my-12" />
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Problems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProblems.map((p) => (
                  <ProblemCard key={p.id} problem={p} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </div>
  )
}
