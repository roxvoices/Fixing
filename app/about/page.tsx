import type { Metadata } from 'next'
import { CheckCircle, Clock, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about FixMyDevice — your professional companion for troubleshooting and repairing everyday technology.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">
            About FixMyDevice
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              FixMyDevice is your ultimate companion for troubleshooting and
              repairing your everyday technology. We believe that everyone
              should have the knowledge and confidence to fix their own devices,
              saving time, money, and reducing electronic waste.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 mb-6">
              Our mission is to provide clear, accessible, and
              professional-grade repair guides for a wide range of devices. From
              smartphones and laptops to smart home appliances and software
              issues, we aim to cover it all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Verified Fixes
                </h3>
                <p className="text-sm text-slate-600">
                  Every guide is reviewed by technicians to ensure accuracy and
                  safety.
                </p>
              </div>
              <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Real-time Updates
                </h3>
                <p className="text-sm text-slate-600">
                  We constantly update our database with the latest device
                  models and software versions.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Community Driven
                </h3>
                <p className="text-sm text-slate-600">
                  Users can request fixes and share their experiences through
                  comments.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-slate-600 mb-6">
              Unlike generic forums, FixMyDevice provides structured,
              easy-to-follow steps that guide you from diagnosis to a successful
              repair. We break down complex technical jargon into simple
              instructions that anyone can follow.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
