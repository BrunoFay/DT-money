import { createContext, ReactNode, useEffect, useState } from "react"
import { NewTransaction, Transaction } from "../@types/transactionPage"
import { api } from "../api/axios"

interface TransactionContext {
  transactions: Transaction[]
  getAllTransactions: (s: string) => Promise<void>
  createNewTransaction: (s: NewTransaction) => Promise<void>
}
export const transactionContext = createContext({} as TransactionContext)

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function getAllTransactions(query?: string) {
    let response = await api.get('transactions')
    if (query) {
      response = await api.get('transactions', {
        params: { q: query, _sort: 'createdAt', _order: 'desc' }
      })
    }
    console.log(response);

    setTransactions(response.data)
  }
  async function createNewTransaction(data: NewTransaction) {
    const { data: transactionCreated } = await api.post('/transactions', {
      ...data,
      createdAt: new Date()
    })
    setTransactions(state => [...state, transactionCreated])
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  const valueToProvide = { transactions, getAllTransactions, createNewTransaction }
  return (
    <transactionContext.Provider value={valueToProvide}>
      {children}
    </transactionContext.Provider>

  )
}