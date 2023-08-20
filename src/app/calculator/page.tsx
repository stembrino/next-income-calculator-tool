"use client"

import { ResultCard } from '@/components/Simulation'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext'

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <FinancialIndicatorsProvider>
                <ResultCard />
            </FinancialIndicatorsProvider>
        </main>
    )
}
