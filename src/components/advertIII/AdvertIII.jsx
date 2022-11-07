import React from 'react'
import './advertIII.css'
import Virtual from '../../assets/advertIII/VirtualID.jpg'
import Web from '../../assets/advertIII/Web-Banner-Week1.jpg'

const AdvertIII = () => {
    return (
        <div className="advert___III__section">
            <div className="advert__container__section">
                <div className="advert__image__section__1">
                    <img src={Virtual} alt="" />
                </div>
                <div className="advert__image__section__2">
                    <img src={Web} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AdvertIII