import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RequestFixForm from '@/components/RequestFixForm'

export const metadata: Metadata = {
  title: 'Request a Fix',
  description:
    "Can't find a solution for your device problem? Tell us about it and we'll create a guide.",
}

export default function RequestFixPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <RequestFixForm />
      </main>
      <Footer />
    </div>
  )
}
