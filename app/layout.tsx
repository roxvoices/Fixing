import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FixMyDevice — Fix Your Device Like a Professional',
    template: '%s | FixMyDevice',
  },
  description:
    'Step-by-step troubleshooting guides for phones, laptops, internet, and app problems. Clear, professional repair guides — no expensive tools required.',
  keywords: ['device repair', 'troubleshooting', 'phone fix', 'laptop fix', 'tech support'],
  openGraph: {
    siteName: 'FixMyDevice',
    type: 'website',
    url: 'https://fixmydevice.com',
  },
  verification: {
    google: '9kGcR3N1rWZivdqcsjIG95G4RzRtRo_ReJuSwqY3Tg8',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
