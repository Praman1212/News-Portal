import React from 'react'
import './advert.css'
import '../../App.css'
import NIC from '../../assets/nic.png'
import Xpulse from '../../assets/xpluse.jpg'

const Advert = () => {
    return (
        <section>
            <div className='line-advert'></div>
            <div className='advert-container'>
                <div className="advert__grid">
                    <div className="advert__1">
                        <div className="image__1">
                            <img src={NIC} alt="" />
                        </div>
                    </div>
                    <div className="advert__2">
                        <div className="image__2">
                            <img src={Xpulse} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Advert