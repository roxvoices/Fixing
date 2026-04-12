import type { Metadata } from 'next'
import { Mail, MessageCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with FixMyDevice. We are here to help with your device problems.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="pt-32 pb-12 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Contact Us
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have a question, feedback, or need specific help? Reach out to us
              through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  For general inquiries and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:markwell244@gmail.com"
                  className="text-xl font-bold text-blue-600 hover:underline"
                >
                  markwell244@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>
                  Chat with us directly for quick help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/260765546444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-green-600 hover:underline"
                >
                  +260 765 546 444
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
