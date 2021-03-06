import { useState } from "react"

const InputTransaction = ({addNew}) => {
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState('')

    const submitTransaction = ()=>{
        addNew(item, amount)
        setItem('')
        setAmount('')
    }

    return (
    <div className='form'>
        <h4>Add new transactions</h4>
        <div>
            <input type="text" value={item} name="item" onChange={(e)=>setItem(e.target.value)} className="formField" placeholder='Income/Expense' />
        </div>
        <div>
            <input type="number" value={amount} name="amount" onChange={(e)=>setAmount(e.target.value)} className="formField" placeholder='Amount' step='.01' />
        </div>
        <button className="btn" onClick={submitTransaction}>
            ADD TRANSACTION
        </button>
    </div>
  )
}

export default InputTransaction