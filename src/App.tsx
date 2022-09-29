import { TransactionProvider } from './context/TransactionsContext'
import Transactions from './pages/Transactions'

function App() {
  return (
    <TransactionProvider>
      <Transactions />
    </TransactionProvider>
  )
}

export default App
