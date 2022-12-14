import React from 'react'
import "./delivery.css"
import DeliveryCollections from './DeliveryCollections'
import ExploreSection from './ExploreSection'
import Filters from './filters'
import { Restraunts } from './Restraunts'
import TopBrands from './TopBrands'


const deliveryFilters = [
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
]                                                     // creating a array for filters that are need to be shown

const RestrauntsList = Restraunts;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
        </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={RestrauntsList} collectionName="Deliery Restraunts in Delhi"/>
      </div>
  )
}

export default Delivery