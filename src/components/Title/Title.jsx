import React from "react";
import './Title.css'

const Title = ({ nameTitle }) => {

    return (
        <>
            <div className="title">
                <h1>{nameTitle}</h1>

                <a href="">перейти в каталог</a>
            </div>
        </>
    )

}

export default Title