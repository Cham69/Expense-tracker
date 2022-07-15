import React from 'react'

const TransactionsList = () => {
  return (
    <div className='transactionList'>
        <h4 className='history'>HISTORY</h4>
        <ul className='transaction'>
            <li className='listItem'>
                <span><b>Groceries</b></span><span><b>$250.00</b></span>
            </li>
            <li className='listItem' style={{backgroundColor:'#FFD6D6'}}>
                <span>Gas</span><span>$50.00</span></li>
        </ul>
    </div>
  )
}

export default TransactionsList