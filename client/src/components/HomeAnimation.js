import React from 'react'
import airplane from '../assest/airplane.png'
import birds from '../assest/birds.png'
import car from '../assest/car1.png'
import cloud from '../assest/cloud (1).png'
import kid1 from '../assest/kid1-removebg-preview.png'
import kid2 from '../assest/kid2-removebg-preview.png'
import kid3 from '../assest/kid3-removebg-preview.png'
import '../styles/homePage.style.css'
const HomeAnimation = () => {
    return (
        <div className='home-page'>
            <div className='back-img' >
                <img className='airplane' src={airplane} alt='img' />
                <img className='birds' src={birds} alt='img' />
                <img className='cloud cloud1' src={cloud} alt='img' />
                <img className='cloud cloud2' src={cloud} alt='img' />
                <img className='cloud cloud4' src={cloud} alt='img' />
                <img className='cloud cloud5' src={cloud} alt='img' />
                <img className='cloud cloud6' src={cloud} alt='img' />
                <img className='cloud cloud8' src={cloud} alt='img' />
                <img className='cloud cloud9' src={cloud} alt='img' />
                <img className='cloud cloud11' src={cloud} alt='img' />
                <img className='cloud cloud12' src={cloud} alt='img' />
                <img className='car' src={car} alt='img' />
                <img className='kid1' src={kid1} alt='img' />
                <img className='kid2' src={kid2} alt='img' />
                <img className='kid3' src={kid3} alt='img' />
            </div>
        </div>
    )
}

export default HomeAnimation