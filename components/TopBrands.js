import React from 'react'
import './TopBrands.css'
import NextArrow from './NextArrow';
import PrevArrow from '../PrevArrow';
import Slider from 'react-slick';


const TopBrandsList = [
    {
        id: 1,
        time: "35 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png",
    },
    {
        id: 2,
        time: "4 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
    },
    {
        id: 3,
        time: "15 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png",
    },
    {
        id: 4,
        time: "75 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
    },
    {
        id: 5,
        time: "30 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
    },
    {
        id: 6,
        time: "3 Mins",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png",
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
                        <img src={brand.cover} className="top-brands-image" alt={brand.name}/>
                    </div>
                </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands