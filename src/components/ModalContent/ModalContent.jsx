import { render } from 'react-dom'
import './ModalContent.css'


// img
import promo from '../../../public/ico/promo.png'

const ModalContent = ({ closeModal }) => {
    return (
        <>
            <div className="ModalContent">
                <h1>Корзина</h1>

                <div className="ModalContent__items">
                    <div className="ModalContent__item ModalContent__item--first">
                        <div className="ModalContent__item-img"></div>
                        <div className="ModalContent__item-info">
                            <div className="ModalContent__item-title">Хлопковый свитер</div>
                            <div className="ModalContent__item-cat"><span>Размер: </span> <p>L</p> </div>
                            <div className="ModalContent__item-color"><span>Цвет: </span> <p>Белая</p> </div>
                            <div className="ModalContent__item-prcie">5400.00 ₽</div>
                        </div>
                        <div className="ModalContent__item-delete">Удалить</div>
                    </div>
                    <div className="ModalContent__item ModalContent__item--second">
                        <h2>Сумма заказа</h2>

                        <div className="double">
                            <p>Цена товара </p> <span>5400.00 ₽</span>
                        </div>

                        <div className="double">
                            <p>Доставка </p> <span>0 ₽</span>
                        </div>

                        <div className="hr"></div>

                        <div className="double">
                            <p>Итог </p> <span>5400.00 ₽</span>
                        </div>

                        <div className="double">
                            <div className="input"><img src={promo} alt="" /> Промокод</div>
                            <button>Ввод</button>
                        </div>

                        <div className="double">
                            <font>Перейти к покупке </font>
                        </div>

                    </div>
                </div>

                <button className='ModalContent__close' onClick={closeModal}>⨉</button>
            </div >
        </>
    )
}

export default ModalContent