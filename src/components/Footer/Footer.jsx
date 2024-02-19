import React from "react";
import './Footer.css'


const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footer_container">
                    <div className="footer_item">
                        <div className="footer_logo">INFERNO</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fficia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="footer_item">
                        <h2 className="mb20">МЕНЮ</h2>
                        <span>ГЛАВНАЯ</span>
                        <span>АКЦИИ</span>
                        <span>КАТАЛОГ</span>
                        <span>КОНТАКТЫ</span>
                    </div>
                    <div className="footer_item">
                        <h2>КОНТАКТЫ</h2>
                        <p>Оставлись вопросы? Напришите нам</p>
                        <span>infernoshop@gmail.com</span>
                        <p>Нужная констукция? Позвоните нам</p>
                        <span>+7 987 405 45 45</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer