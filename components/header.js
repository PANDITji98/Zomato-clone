import React from 'react'
import "./header.css"
import ProfileImage from '../components/javascript.png'


const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
      alt='Zomato-logo'
      className='header-logo'/>
      <div className='header-right'>
        <div className='header-location-search'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='fi fi-rr-marker absolute-center location-icon'></i>
              <div>Bangalore</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center'></i>
          </div>
          <div className='location-search-seperator'></div>
          <div className='header-searchbar'>
            <i className='fi fi-rr-search absolute-center search-icon'></i>
            <input placeholder='Search for restaurant, cuisine or a dish' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src={ProfileImage} alt='profile' className='header-profile-image'/>
          <span className='header-user-name'>Anshul</span>
          <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i>
        </div>
      </div>
    </div>    
  )
}

export default Header