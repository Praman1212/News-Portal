import React from 'react'
import './advertII.css'
import Cafe from '../../assets/CafeSignUnsplash.jpg'
import Organic from '../../assets/Pros-and-Cons-of-Eating-Organic-Food (1).jpg'
import Trek from '../../assets/image_processing20191001-19-ql6svi.jpg'
import Radio from '../../assets/Radio_News_Sep_1928_Cover.jpg'

const AdvertII = () => {
    return (
        <section className='advertisement'>
            <div className="advertisement-container">
                <div className="advertisement-container-I">
                    <div className="container-section-I">
                        <div className="advert__1">
                            <img src={Cafe} alt="" />
                        </div>
                        <div className="advert__2">
                            <img src={Organic} alt="" />
                        </div>
                        <div className="advert__3">
                            <img src={Trek} alt="" />
                        </div>
                    </div>
                    <div className="container-sub-section-I">
                        <div className="trending-news">
                            <h2>Trending news </h2>
                        </div>
                        <div className="sub-line">

                        </div>
                        <div className="container-trending-news">
                            <div className="trending-news-border">
                                <div className="trending-news-section">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advertisement-container-II">
                    <div className="container-section-II">
                        <div className="advert__4">
                            <div className="vertical__advert">
                                <div className="vertical__image">
                                    <img className='img' src={Radio} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvertII