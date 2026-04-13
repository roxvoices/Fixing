import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  <meta name="google-site-verification" content="9kGcR3N1rWZivdqcsjIG95G4RzRtRo_ReJuSwqY3Tg8" />
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
