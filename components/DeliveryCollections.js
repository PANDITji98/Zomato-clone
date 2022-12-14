import React from 'react'
import Slider from 'react-slick';
import PrevArrow from '../PrevArrow';
import DelItems from './DelItems';
import './DeliveryCollections.css'
import NextArrow from './NextArrow';


const delItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "",
    },
    {
        id: 2,
        title: "Burger",
        cover: "",
    },
    {
        id: 3,
        title: "Momos",
        cover: "",
    },
    {
        id: 4,
        title: "Chaomin",
        cover: "",
    },
    {
        id: 5,
        title: "Pasta",
        cover: "",
    },
    {
        id: 6,
        title: "Chili Potatos",
        cover: "",
    },
];

const settings = {
    infinite: false,           //It means if the loop is over, it will start the slide again
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const DeliveryCollections = () => {
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
            <div className='collection-title'>                           {/*giving a common-css named as common-title*/}
                Eat what makes you happy!
                </div>      
                <Slider {...settings}>
                    {delItems.map((item)=> {
                        return <DelItems item={item}/>
                    })}
                </Slider>     
        </div>
    </div>
  )
}

export default DeliveryCollections