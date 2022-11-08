import React from 'react'
import './footer.css'
import { AiFillPhone } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineLogin } from 'react-icons/ai'

const Footer = () => {
    return (

        <section className='footer'>
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="flex__1">
                        <div className="flex__1__logo">
                            <a href="">
                                <span className='mero'>Mero </span>
                                <span className='news'>News</span>
                            </a>
                        </div>
                        <div className="developer__details">
                            <h5 className='chairman'>Chairman: <span>Praman Ghimire</span></h5>
                            <h5 className='editor'>Editor: <span>Praman Ghimire</span></h5>
                            <h5 className='location'>Location: <span>Nagarjun-1, Kathmandu</span></h5>
                            <h5 className='phone'>Contact us: <span>+977-9860809359</span></h5>
                            <h5 className='gmail'>Contact us: <span>ghimirepraman3@gmail.com</span></h5>
                        </div>
                    </div>
                    <div className="vertical__line"></div>
                    <div className="flex__2">
                        <div className="heading">
                            <h3>Social Media</h3>
                        </div>
                        <div className="flex__2__heading__items">
                            <div className="flex__2__heading__items__btn">
                                <a href="#" className='facebook'><h3><FaFacebookF /></h3></a>
                                <a href="#" className='instagram'><h3><AiOutlineInstagram /></h3></a>
                                <a href="#" className='youtube'><h3><BsYoutube /></h3></a>
                                <a href="#" className='office-location'><h3><HiLocationMarker /></h3></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex__3">
                        <div className="heading">
                            <h3>Explore</h3>
                        </div>
                        <div className="flex__3__heading__items">
                            <div className="flex__3__heading__item__btn">
                                <a href="#"><h5>Home</h5></a>
                                <a href="#"><h5>About Us</h5></a>
                                <a href="#"><h5>Team</h5></a>
                                <a href="#"><h5>Career</h5></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex__4">
                        <div className="heading">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="flex__4__heading__items">
                            <div className="flex__4__heading__items__btn">
                                <h5><a href="#"><AiFillPhone className='flex__4__icon' />+977-9860809359</a></h5>
                                <h5><a href="#"><SiGmail className='flex__4__icon' />ghimirepraman@gmail.com</a></h5>
                                <h5><a href=""><AiOutlineLogin className='flex__4__icon' />Login</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="developer-info">
                <div className="copyright-section">
                    <h3>Develop by Praman Ghimire</h3>
                </div>
            </div>
        </section >
    )
}

export default Footer