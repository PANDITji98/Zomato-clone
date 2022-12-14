import React from 'react'
import ExploreCard from './ExploreCard'
import './ExploreSection.css'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
            {list.map((restraunt)=>{
                return <ExploreCard restraunt={restraunt }/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection