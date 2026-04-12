'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PlusCircle } from 'lucide-react'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FixRequest } from '@/lib/types'

export default function RequestFixForm() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    deviceType: '',
    problemDescription: '',
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      formData.userName &&
      formData.email &&
      formData.deviceType &&
      formData.problemDescription
    ) {
      alert('Your request has been submitted! Our team will review it soon.')
      router.push('/')
    }
  }

  return (
    <div className="pt-32 pb-12 px-4 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200">
          <PlusCircle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Request a Fix
        </h1>
        <p className="text-slate-600">
          Can&apos;t find a solution for your problem? Tell us about it, and
          we&apos;ll try to create a guide for it.
        </p>
      </div>

      <Card className="border-slate-200 shadow-sm">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <Input
                  value={formData.userName}
                  onChange={(e) =>
                    setFormData({ ...formData, userName: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Device Type</label>
              <Input
                value={formData.deviceType}
                onChange={(e) =>
                  setFormData({ ...formData, deviceType: e.target.value })
                }
                placeholder="e.g. iPhone 13, MacBook Pro M1"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Problem Description</label>
              <textarea
                className="w-full p-3 rounded-md border border-slate-200 bg-white text-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                value={formData.problemDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    problemDescription: e.target.value,
                  })
                }
                placeholder="Describe the issue in detail..."
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
            >
              Submit Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
