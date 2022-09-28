import { TransactionProvider } from './context/Transactions'
import Transactions from './pages/Transactions'

function App() {
  return (
    <TransactionProvider>
      <Transactions />
    </TransactionProvider>
  )
}

export default App
