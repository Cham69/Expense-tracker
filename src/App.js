import Header from "./components/Header"
import Balance from "./components/Balance"
import IncExpe from "./components/IncExpe"
import TransactionsList from "./components/TransactionsList"
import InputTransaction from "./components/InputTransaction"

import './App.css'

function App() {
  return (
    <div className="root">
      <Header />
      <Balance />
      <IncExpe />
      <TransactionsList />
      <InputTransaction />
    </div>
  );
}

export default App;
