import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../_components/Header/Header'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext/Provider'
import { PeriodProvider } from '@/contexts/PeriodContext/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fixed Income',
  description: 'Calculate the fixed income result',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <FinancialIndicatorsProvider>
          <PeriodProvider>
            <Header />
            {children}
          </PeriodProvider>
        </FinancialIndicatorsProvider>

      </body>
    </html>
  )
}
