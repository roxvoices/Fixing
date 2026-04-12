'use client'

import { useState } from 'react'
import { Star, Send, Share2, User, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Problem, Comment, Rating } from '@/lib/types'
import { cn } from '@/lib/utils'

export default function ProblemInteractive({ problem }: { problem: Problem }) {
  const [ratings, setRatings] = useState<Rating[]>([])
  const [comments, setComments] = useState<Comment[]>([])
  const [hovered, setHovered] = useState(0)

  const handleRate = (value: number) => {
    const newRating: Rating = {
      id: Math.random().toString(36).substr(2, 9),
      problemId: problem.id,
      value,
      createdAt: new Date().toISOString(),
    }
    setRatings((prev) => [...prev, newRating])
  }

  const handleAddComment = (name: string, text: string) => {
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      problemId: problem.id,
      userName: name,
      text,
      createdAt: new Date().toISOString(),
    }
    setComments((prev) => [...prev, newComment])
  }

  const average =
    ratings.length > 0
      ? (ratings.reduce((acc, r) => acc + r.value, 0) / ratings.length).toFixed(1)
      : 0

  return (
    <>
      {/* Rating */}
      <div className="mb-20">
        <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">Rate this Fix</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      'w-5 h-5 cursor-pointer transition-colors',
                      hovered >= star || Number(average) >= star
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    )}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => handleRate(star)}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-600">
                {average} / 5
              </span>
              <span className="text-xs text-slate-400">
                ({ratings.length} ratings)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Share button */}
      <div className="mb-8 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-slate-200"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
          }}
        >
          <Share2 className="w-4 h-4 mr-2" /> Share
        </Button>
      </div>

      <Separator className="my-12" />

      {/* Comments */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Comments ({comments.length})
          </h2>
        </div>

        <CommentForm onSubmit={handleAddComment} />

        <div className="space-y-4 mt-8">
          {[...comments]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((comment) => (
              <div
                key={comment.id}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900">
                      {comment.userName}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          {comments.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              No comments yet. Be the first to share!
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function CommentForm({
  onSubmit,
}: {
  onSubmit: (name: string, text: string) => void
}) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && text.trim()) {
      onSubmit(name, text)
      setName('')
      setText('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">
            Your Name
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-white"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">
          Your Comment
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your experience with this fix..."
          className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
      </div>
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        <Send className="w-4 h-4 mr-2" /> Post Comment
      </Button>
    </form>
  )
}
