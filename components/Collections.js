import React from 'react'
import Slider from 'react-slick'
import PrevArrow from '../PrevArrow';
import './Collections.css'
import NextArrow from './NextArrow';

const settings = {
    infinite: false,           //It means if the loop is over, it will start the slide again
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


const Collections = ({list}) => {
  return (
    <div className='max-width collection-wrapper'>
        <div className='collection'>
            <div className='collection-title'>Collections</div>
            <div className='collection-subtitle-row'>
                <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</div>
                <div className='collection-location'>All collections in Bangalore</div>
                <i className='fi fi-rr-caret-right absolute-center'></i>
            </div>
        </div>
        <Slider {...settings}>                         {/*GETTING SETTING FOR SLIDER FROM VERY ABOVE CODE OF const settings*/}
    {list.map((item)=>{
        return  <div>
          <div className='collection-cover'>
            <img src={item.cover} alt={item.title} className="collection-image"/>
            <div className='gradient-bg'></div>
            <div className='collection-card-title'>{item.title}</div>
            <div className='collection-card-subtitle'>
                <div>{item.places}</div>
                <i className='fi fi-rr-caret-right absolute-center'></i>
            </div>
          </div>
        </div>
    })}
        </Slider>
    </div>
  )
}

export default Collections