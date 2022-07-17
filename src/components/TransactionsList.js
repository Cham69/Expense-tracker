import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({list}) => {
  return (
    <div className='transactionList'>
        <h4 className='history'>HISTORY</h4>
        <ul className='transaction'>
            {list.map(listItem => (
                <Transaction listItem={listItem} key={listItem.id}/>
            ))}            
        </ul>
    </div>
  )
}

export default TransactionsList