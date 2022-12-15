import React from 'react'
import './ExploreCard.css'

const ExploreCard = ({restraunt}) => {
    const name = restraunt?.info?.name ?? "";                        //if restraunts exists, go into info. similarly if info exists, go into name and so on! and if it dose not exist, return an empty string(""). This will prevent unwanted errors.
    const coverImage = restraunt?.info?.image?.url;
    const deliveryTime = restraunt?.order?.deliveryTime;
    const rating= restraunt?.info?.rating?.rating_text;
    const approxPrice = restraunt?.info?.cfo?.rating_text;
    const offers = restraunt?.bulkOffers ?? [];
    const cuisines = restraunt?.info?.cuisine?.map((item)=>{
        return item.name  
    }).slice(0,3);
    const bottomContainers= restraunt?.bottomContainers;
    const goldOff = restraunt?.gold?.text;
    const proOff = offers.length > 1 ? offers[0].text : null;        //if there are offers available more than 1 than only show the offers starting from 1 that is [0] otherwise assign it to null
    const discount = offers.length > 1 ? offers[1].text : offers.length===1 ? offers[0].text : null;

  return ( 
    <div className='explore-card cur-po'>
      <div className='explore-card-cover'>
        <img src={coverImage} alt={name} className="explore-card-image"/>
        <div className='delivery-time'>{deliveryTime}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}                         {/*if there is a Pro-Offer than only show. Here && operator is used to check*/}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
        {/* IT IS NOT NECESSARY THAT EVERY RESTRAUNT WILL HAVE pro-offer, gold-offer and discount SO ABOVE 3 CODE LINES ARE IMPORTANT TO UNDERSTAND */}
      </div>
      <div className='res-row'>
        <div className='res-name'>{name}</div>
        {rating && <div className='res-rating absolute-center'>
          {rating} <i className='fi fi-rr-star absolute-center'></i>
          </div>}
      </div>
      <div className='res-row'>
        {cuisines.length && (<div className='res-cuisine'>
          {cuisines.map((item, i)=>{
            return (<span className='res-cuisine-tag'>
              {item}
              {i !== cuisines.length - 1 && ","}{/*this 'i' thing is to put coma between the cuisines*/}
              </span>
            );
          })}
          </div>
          )} 
          {approxPrice && <div className='res-price'>{approxPrice}</div>}
      </div>
      {bottomContainers.length>0 && <div>
        <div className='card-seperator'></div>
        <div className='explore-bottom'>
          <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height: '18px'}}/>
          <div className='res-bottom-text'>{bottomContainers[0]?.text}</div>
        </div> 
        </div>}
    </div> 
  )
}

export default ExploreCard