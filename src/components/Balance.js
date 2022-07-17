import React from 'react'

const Balance = ({newBalance}) => {
  return (
    <>
        <h4>YOUR BALANCE</h4>
        <h1 id="balance">{newBalance[0].amount}</h1>
    </>
  )
}

export default Balance