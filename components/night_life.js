import React from 'react'
import Collections from './Collections'
import ExploreSection from './ExploreSection'
import Filters from './filters'
import { nightLifeData } from './nightLifeData'
import "./night_life.css"


const nightLifeFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters"
  },
  {
    id: 2,
    title: "Rating 4.0+"
  },
  {
    id: 3,
    title: "Safe and Hygienic"
  },
  {
    id: 4,
    title: "Pure Veg"
  },
  {
    id: 5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title: "Delivery Time"
  },
  {
    id: 6,
    title: "Great Offers"
  },
]   

const collectionList = [
  {
    id:"1",
    title: "Trending this week",
    cover: "https://b.zmtcdn.com/data/collections/c46add7d3b90a477399c29de0705d3cf_1670661569.jpg",
    places: "10 Places"
  },
  {
    id:"2",
    title: "Rooftop",
    cover: "https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068315.jpg",
    places: "14 Places"
  },
  {
    id:"3",
    title: "ROmantic Dinner",
    cover: "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665640799.jpg",
    places: "11 Places"
  },
  {
    id:"4",
    title: "Newly Opened",
    cover: "https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg",
    places: "10 Places"
  },
  {
    id:"5",
    title: "Microbreweries",
    cover: "https://b.zmtcdn.com/data/collections/06ec1c3471d9d7f7047298eb9ef2de56_1665565737.jpg",
    places: "20 Places"
  },
  {
    id:"6",
    title: "Finnest Buffet",
    cover: "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
    places: "16 Places"
  },
  {
    id:"7",
    title: "Top 10 Picturesque Cafes",
    cover: "https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg",
    places: "10 Places"
  },  

]

const nightList = nightLifeData;

const NightLife = () => {
  return (
    <div>
      <Collections list={collectionList}/>
      <div className='max-width'>
        <Filters filterList={nightLifeFilters}/>
      </div>
      <ExploreSection list={nightList} collectionName="Night-Life restraunts in Bangalore"/>
    </div>
  )
}

export default NightLife