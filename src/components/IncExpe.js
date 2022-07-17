import React from 'react'

const IncExpe = ({list}) => {
  
  return (
    <div className='incExpeBox'>
        <div>
            <h4>INCOME</h4>
            <h4  className='incExpe1'>+$0.00</h4>
        </div>
        <div>
            <h4>EXPENSE</h4>
            <h4  className='incExpe2'>-$0.00</h4>
        </div>
    </div>
  )
}

export default IncExpe