import Header from "./components/Header"
import Balance from "./components/Balance"
import IncExpe from "./components/IncExpe"
import TransactionsList from "./components/TransactionsList"
import InputTransaction from "./components/InputTransaction"
import './App.css'
import { useState } from "react"

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      transaction: 'Groceries',
      amount: 250
    },
    {
      id:2,
      transaction: 'Transport',
      amount: 200
    }
  ])

  const addNew = (item, amount)=>{
    setList([...list, {id:list.length+1, transaction:item, amount}])
  
  }

  return (
    <div className="root">
      <Header />
      <Balance newBalance={list} />
      <IncExpe list={list}/>
      <TransactionsList list={list} />
      <InputTransaction addNew={addNew} />
    </div>
  );
}

export default App;
