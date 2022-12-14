import React from 'react'
import './DelItems.css'

const DelItems = ({item}) => {                                   //destructured the DelItems into ITEM as it was mapped
  return (
    <div>
    <div className='delivery-item-cover'>
        <img src={item.cover} className='delivery-item-image' alt={item.title}/>
    </div>
    <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DelItems