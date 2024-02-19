import React from 'react'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Title from '../components/Title/Title'
import Sales from '../components/Sales/Sales'

function MainPage() {
    return (
        <>

            <Banner />

            <div className="container">
                <Categories />

                <Title nameTitle={'Акции'} />

                <Sales />
            </div>


        </>
    )
}

export default MainPage
