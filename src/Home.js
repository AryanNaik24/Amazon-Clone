import React from 'react';
import "./Home.css";
import Product from './Piraduct';


function Home() {
  return (
    <div className='home'>

        <div className='home_container'>

            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon prime bg"/>
           
            <div className='home_row'>
               <Product id="533443" title="Master your Emotions: A Practical Guide to Overcome Negativity And Better Manage Your Feelings Paperback Notebook," price={599} image='https://m.media-amazon.com/images/I/81BgEsl0SJL._AC_UY327_FMwebp_QL65_.jpg' rating={5} />
               <Product id="654854" title="Think Straight: Change your thoughts, Change your life" price={509} image="https://m.media-amazon.com/images/I/41JoC4r8JDL._SX322_BO1,204,203,200_.jpg" rating={5}/>
            </div>

            <div className='home_row'>
               <Product id="172664" title="Boat EarBuds | Wireless Gaming in Ear Earbuds with Beast Mode(40ms Low Latency), 40H Playtime, Blazing LEDs, Quad Mics ENx Signature Sound, ASAP Charge(10 Mins= 180 Mins)(Black Sabre)" price={6999} image='https://m.media-amazon.com/images/I/41w2pkIRKxL._AC_SR400,600_.jpg' rating={3} />
               <Product id="645986" title="Foncy Watch | 1.78 AMOLED Display, Bluetooth Calling Smart Watch, Functional Crown, Metallic Build, Intelligent Gesture Control, Instacharge (Deep Wine)" price={2234} image="https://m.media-amazon.com/images/I/4138dV0hYTL._AC_SR400,600_.jpg" rating={3} />
               <Product id="213556" title="Ipad China Edition WiFi+4G Tablet | 4GB RAM 64GB ROM (Expandable), 22.1cm (8.7 inch) Cinematic Display | 6400 mAh Battery | Dual Speakers | Blue Colour" price={267} image="https://m.media-amazon.com/images/I/51DgLLc+LFL._AC_SR400,600_.jpg" rating={2}/>
            </div>

            <div className='home_row'>
               <Product id="871544" title="Big Tv One+ | 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV UA43AUE65AKXXL (Black)" price={70999} image="https://m.media-amazon.com/images/I/71d5fMDvq9L._AC_UY327_FMwebp_QL65_.jpg" rating={4} />

                
            </div>

        </div> 

    </div>
  )
}

export default Home