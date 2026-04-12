import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Problem } from '@/lib/types'

export default function ProblemCard({ problem }: { problem: Problem }) {
  return (
    <Link href={`/problem/${problem.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow border-slate-200 group flex flex-col">
        <CardHeader className="p-3 md:p-4 pb-1 md:pb-2">
          <div className="flex justify-between items-start mb-1 md:mb-2">
            <Badge
              variant="outline"
              className="text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 px-1.5 py-0"
            >
              {problem.category}
            </Badge>
            <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-50 border-none text-[9px] md:text-[10px] px-1.5 py-0">
              {problem.subcategory}
            </Badge>
          </div>
          <CardTitle className="text-base md:text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
            {problem.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 md:p-4 pt-0 flex-1">
          <p className="text-xs md:text-sm text-slate-600 line-clamp-2">
            {problem.shortDescription}
          </p>
        </CardContent>
        <CardFooter className="p-3 md:p-4 pt-0 flex justify-between items-center">
          <span className="text-[10px] md:text-xs text-slate-400">
            {problem.steps.length} steps
          </span>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
        </CardFooter>
      </Card>
    </Link>
  )
}
