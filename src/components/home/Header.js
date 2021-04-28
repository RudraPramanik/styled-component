import React from 'react'
import Hero from '../globals/Hero'
import HomeImg from '../../images/homeBcg.jpeg'
import Banner from '../globals/Banner'

const Header = () => {
    return (
        <>
        <Hero img={HomeImg}>
            <Banner
                greeting="welcome to"
                title="hotel California"
                text="Lorem ipsum dolor sit amet c
            onsectetur adipisicing elit. Harum culpa maxime eum cupiditate dicta quo?"
            />
        </Hero>
         </>
    )
}

export default Header
