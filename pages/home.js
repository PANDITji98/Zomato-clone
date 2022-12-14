import React, { useState } from 'react'
import Header from '../components/header'
import Options from '../components/options'
import Footer from '../components/footer'
import Delivery from '../components/delivery'
import DinningOut from '../components/dinning_out'
import NightLife from '../components/night_life'


const Home = () => {

const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
        <Header/>
        <Options activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}

const getCorrectScreen = (tab) => {
if(tab === "Delivery"){
    return <Delivery/>
}else if(tab === "DinningOut"){
    return <DinningOut/>
}else if(tab === "NightLife"){
    return <NightLife/>
}else{
    return <Delivery/>                       //use switch instead
}
}

export default Home