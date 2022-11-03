import React from 'react'
import './advertII.css'
import Cafe from '../../assets/CafeSignUnsplash.jpg'
import Organic from '../../assets/Pros-and-Cons-of-Eating-Organic-Food (1).jpg'
import Trek from '../../assets/image_processing20191001-19-ql6svi.jpg'

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
                </div>
                <div className="advertisement-container-II">
                    <div className="container-section-II">
                        <div className="advert__4">
                            <div className="vertical__advert">
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam iste vel modi, ipsum dolor aliquam facilis reprehenderit ea, in totam aliquid nulla explicabo placeat et nihil! Ut, cum quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab aliquid iusto natus molestiae unde blanditiis necessitatibus, porro harum sint neque, ipsum asperiores sapiente culpa praesentium excepturi perspiciatis odit. Assumenda. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quis accusamus at ex modi quos odit, exercitationem commodi fugit? Commodi molestias accusantium explicabo assumenda voluptatibus dicta ex? Natus, accusantium veniam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quibusdam eius? Consequatur corrupti ad impedit eligendi libero rerum qui velit! Minima quam explicabo a quia, magnam provident aut velit! Alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quidem dolor corrupti. Suscipit repudiandae, odit quis dolor est ratione fuga assumenda aut omnis ipsum ducimus. Quibusdam laudantium rem facere eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque, quas temporibus et optio similique expedita at laborum mollitia tempore iusto recusandae minus dolore aliquid autem quibusdam explicabo eos molestias!</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvertII