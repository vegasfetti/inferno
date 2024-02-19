import React from "react";
import './Card.css'
import like from '../../../public/ico/like.png'
import { NavLink } from "react-router-dom";

const Card = ({id, name, price, firstPhoto }) => {
    return (
        <>
            <div className="card">
                <div style={{ backgroundImage: `url(${firstPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="card_img">
                    <div className="card_btns">
                         <NavLink to={`/catalog/${id}`}> <div className="add_basket"> <p> В КОРЗИНУ</p></div></NavLink>
                        <div className="add_like"><img src={like} alt="like" className="like" /></div>
                    </div>
                </div>
                <div className="card_content">
                    <span>{name}</span>
                    <p>{price}.00 ₽</p>
                </div>

            </div>
        </>
    )
}

export default Card