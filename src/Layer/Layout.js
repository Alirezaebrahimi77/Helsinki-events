import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav />
            <Hero />
            <main className='max-w-7xl h-72 m-auto py-7 px-5'>
            {props.children}
            </main>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Layout
