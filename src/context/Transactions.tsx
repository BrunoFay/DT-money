import { createContext, ReactNode, useEffect, useState } from "react"
import { Transaction } from "../@types/transactionPage"

interface TransactionContext {
  transactions: Transaction[]
}
export const transactionContext = createContext({} as TransactionContext)

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function getAllTransactions() {
    const response = await fetch('http://localhost:3001/transactions')
    const data: Transaction[] = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  const valueToProvide = { transactions }
  return (
    <transactionContext.Provider value={valueToProvide}>
      {children}
    </transactionContext.Provider>

  )
}