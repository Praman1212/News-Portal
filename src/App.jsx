import React from 'react'
import Nav from './components/nav/Nav'
import Top from './components/top/Top'
import Advert from './components/advert/Advert'
import AdvertII from './components/advertII/AdvertII'
import Mainnews from './components/main-news/Mainnews'


const App = () => {
    return (
        <>
            <Top />
            <Advert />
            <Nav />
            <AdvertII />
            <Mainnews />
        </>
    )
}

export default App