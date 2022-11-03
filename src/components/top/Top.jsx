import React from 'react'
import '../../App.css'
import './top.css'
import { FaFacebookF } from 'react-icons/fa'
// import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const Top = () => {
    return (
        <div className="advert__container">
            <div className="advert-section">
                <span className='date'>
                    <p className='nepali-date'>
                        बुधबार १६ कात्तिक, २०७९
                    </p>
                    <p className='english-date'>
                        Wednesday,02 Nov, 2022
                    </p>
                </span>
                <span className='icons'>
                    <p className='media'>
                        <FaFacebookF className='facebook' />
                        <BsYoutube className='youtube' />
                    </p>
                    <p className='btn'>
                        <a href="#">Nepali</a>
                        <a href="#">Global</a>
                        <a href="#">Local Election</a>
                        <a href="#">Movies</a>
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Top