import React from 'react'
import ActiveDeliveryImg from '../components/Delivery_activeimg.png'
import InActiveDeliveryImg from '../components/Delivery_inactiveimg.png'
import ActiveDinningImg from '../components/Dinning_activeimg.png'
import InActiveDinningImg from '../components/Dinning_inactiveimg.png'
import ActiveNightLifeImg from '../components/nightlife_activeimg.jpg'
import InActiveNightLifeImg from '../components/nightlife_inactiveimg.jfif'
import './options.css'

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: {ActiveDeliveryImg},
    backdrop: '#FCEECO',
    inactive_img: {InActiveDeliveryImg} 
  },
  {
    id: 2,
    name: "DinningOut",
    active_img: {ActiveDinningImg},
    backdrop: '#FCEECO',
    inactive_img: {InActiveDinningImg}
  },
  {
    id: 3,
    name: "NightLife",
    active_img: {ActiveNightLifeImg},
    backdrop: '#FCEECO',
    inactive_img: {InActiveNightLifeImg}
  }
]
const Options = ({activeTab, setActiveTab}) => {                                    //destructured the useState instad of using the PROPS
  return (
    <div className='tab-options'>
       <div className='max-width options-wrapper'>
        {tabs.map((tab)=> {
          return <div onClick={() => setActiveTab(tab.name)} 
          className={`tab-item absolute-center cur-po ${activeTab === tab.name && 'active-tab'}`}>
            <div className='tab-image-container absolute-center'
            style={{backgroundColor: `${
                activeTab=== tab.name ? tab.backdrop : ''                               //if active tab is selected then only apply background color otherwise don't
            }`}}
            >
              <img className='tab-image' alt={tab.name} src={activeTab === tab.name ? tab.active_img : tab.inactive_img}/>
            </div>
            <div className='tab-name'>{tab.name}</div>
          </div>
        })}
       </div>
        </div>
  )
}

export default Options