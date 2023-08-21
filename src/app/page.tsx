"use client"

import { CalculatorArea } from '@/app/calculator/_components/CalculatorArea'
import { FinancialIndicatorsProvider } from '@/contexts/FinancialIndicatorsContext'
import Card from './calculator/_components/Stateless/Card/Card'
import { useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState(30)

  const handleOnCLick = () => {
    setCounter((state) => state += 10)
  }
  const handleOnCLick02 = () => {
    setCounter((state) => state -= 10)
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      HOME
      <button onClick={handleOnCLick}>Click</button>
      <button onClick={handleOnCLick02}>Click</button>
      <Card title='SELIC' percentage={counter} /> {/* Adjust this value */}

    </main>
  )
}
