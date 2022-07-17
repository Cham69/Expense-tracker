import React from 'react'

const Transaction = ({listItem}) => {
    let myColor;
    if(listItem.amount>0){
        myColor =  '#99FF89';
    }else{
        myColor =  '#FDA1A1';
    }
  return (
    <div>
        <li className='listItem' style={{backgroundColor: myColor}}>
            <span><b>{listItem.transaction}</b></span><span><b>${listItem.amount}</b></span>
        </li>
    </div>
  )
}

export default Transaction