import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <section className='navigation-container'>
            <div className="line__1">

            </div>
            <div className="top-head">
                <div className="logo-head">
                    <a href="#">
                        <h2 className='heading'>Mero Khabar</h2>
                    </a>
                </div>
                <div className="navigation-bar">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Politics</a></li>
                            <li><a href="#">Economics</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Health</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Share News</a></li>
                            <li><a href="#">Others</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="line__2">

            </div>
        </section>
    )
}

export default Nav