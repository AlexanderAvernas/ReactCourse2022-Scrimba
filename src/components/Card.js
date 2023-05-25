import React from 'react'
import water from '../images/water-3354062_1920.jpg'
import star from '../images/star_FILL0_wght400_GRAD0_opsz48.png'

function Card(props) {
  return (
    <div className='card'>
        <img src={`../images/${props.img}`} alt=""  className='card--img'/>
        <div className='card--status'>
            <img src={star} alt="" className='star--img'/>
            <span className='grey'> {props.rating}</span>
            <span className='grey'> ({props.reviewCount}) - </span>
            <span> {props.country} </span>
        </div>
        <p> {props.title} </p>
        <p> <span className='bold'>From ${props.price} </span> / person</p>
    </div>
  )
}

export default Card
