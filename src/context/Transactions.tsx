import { createContext, ReactNode, useEffect, useState } from "react"
import { Transaction } from "../@types/transactionPage"
import { api } from "../api/axios"

interface TransactionContext {
  transactions: Transaction[]
  getAllTransactions: (s: string) => Promise<void>
}
export const transactionContext = createContext({} as TransactionContext)

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function getAllTransactions(query?: string) {
    let response = await api.get('transactions')
    if (query) {
      response = await api.get('transactions', { params: { q: query } })
    }
    console.log(response);
    
    setTransactions(response.data)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  const valueToProvide = { transactions, getAllTransactions }
  return (
    <transactionContext.Provider value={valueToProvide}>
      {children}
    </transactionContext.Provider>

  )
}