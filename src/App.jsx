import React from 'react'
import Nav from './components/nav/Nav'
import Top from './components/top/Top'
import Advert from './components/advert/Advert'
import AdvertII from './components/advertII/AdvertII'
import Mainnews from './components/main-news/Mainnews'
import Headline from './components/headline/Headline'
import AdvertIII from './components/advertIII/AdvertIII'
import Sports from './components/sports/Sports'
import Footer from './components/footer/Footer'


const App = () => {
    return (
        <>
            <Top />
            <Advert />
            <Nav />
            <AdvertII />
            <Mainnews />
            <Headline />
            <AdvertIII />
            <Sports />
            <Footer />
        </>
    )
}

export default App