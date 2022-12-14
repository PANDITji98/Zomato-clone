import React from 'react'
import FIlterItem from './filterItem'
import './filters.css'

const Filters = ({filterList}) => {
  return (
    <div className='filters'>{filterList && filterList.map((filter)=> {
        return <FIlterItem filter={filter} key={filter.id}/>
    })}
    </div>
  )
}

export default Filters