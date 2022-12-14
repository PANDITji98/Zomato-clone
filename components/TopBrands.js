import React from 'react'
import './TopBrands.css'
import NextArrow from './NextArrow';
import PrevArrow from '../PrevArrow';
import Slider from 'react-slick';


const TopBrandsList = [
    {
        id: 1,
        time: "35 Mins",
        cover: "",
    },
    {
        id: 2,
        time: "4 Mins",
        cover: "",
    },
    {
        id: 3,
        time: "15 Mins",
        cover: "",
    },
    {
        id: 4,
        time: "75 Mins",
        cover: "",
    },
    {
        id: 5,
        time: "30 Mins",
        cover: "",
    },
    {
        id: 6,
        time: "3 Mins",
        cover: "",
    },
]

const settings = {
    infinite: false,           //It means if the loop is over, it will start the slide again
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>
            Top Brands for you!
        </div>
        <Slider {...settings}>
            {TopBrandsList.map((brand)=>{
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className="top-brands-image" alt={brand.id}/>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands