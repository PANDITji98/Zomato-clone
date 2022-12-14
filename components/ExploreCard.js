import React from 'react'
import './ExploreCard.css'

const ExploreCard = ({restraunt}) => {
    const name = restraunt?.info?.name ?? "";                        //if restraunts exists, go into info. similarly if info exists, go into name and so on! and if it dose not exist, return an empty string(""). This will prevent unwanted errors.
    const coverImage = restraunt?.info?.image?.url;
    const deliveryTime = restraunt?.order?.deliveryTime;
    const rating= restraunt?.info?.rating?.rating_text;
    const approxPrice = restraunt?.info?.cfo?.rating_text;
    const offer = restraunt?.bulkOffers ?? [];
    const cuisines = restraunt?.info?.cuisine?.map((item)=>{
        return item.name  
    }).slice(0,3);
    const bottomContainers= restraunt?.bottomContainers;


  return ( 
    <div>ExploreCard</div>
  )
}

export default ExploreCard