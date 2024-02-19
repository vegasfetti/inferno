import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'

const Root = () => {


    useEffect(() => {
        document.title = "inferno"
    })

    return (
        <>
            <Header />

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Root