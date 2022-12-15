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
        cover: "https://b.zmtcdn.com/data/pictures/chains/4/301124/8de1f57fa0ae7adfc7ced2a2bec48169_o2_featured_v2.jpg",
    },
    {
        id: 2,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 3,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 4,
        title: "Chaomin",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
    {
        id: 5,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id: 6,
        title: "Chaat",
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
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