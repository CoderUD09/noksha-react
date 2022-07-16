import React from 'react'
import { NavBar } from './pages/navBar'
import Footer from './pages/footer'
import { Outlet } from 'react-router-dom'

function Layout(props) {
    return (
        <>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout
