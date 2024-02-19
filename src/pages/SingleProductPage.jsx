import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { products } from "../data";
import "./SingleProductPage.css";

export default function SingleProductPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  // Инициализируем activeThumbnail первой фотографией из массива
  const [activeThumbnail, setActiveThumbnail] = useState(product.photo[0]);

  const handleThumbnailClick = (photo) => {
    setActiveThumbnail(photo);
  };

  return (
    <>
      <div className="container_pr">
        <div className="way">
          <NavLink to="/">
            <p>Главная › </p>
          </NavLink>
          <NavLink to="/catalog">
            <p>Каталог › </p>
          </NavLink>
          <p>{product.name}</p>
        </div>
        <div className="product_conteiner">
          <div className="slider-container">
            <div className="thumbnails">
              {product.photo.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Thumbnail ${index}`}
                  className={
                    photo === activeThumbnail ? "thumbnail active" : "thumbnail"
                  }
                  onClick={() => handleThumbnailClick(photo)}
                />
              ))}
            </div>
            <div className="main-image">
              <img src={activeThumbnail} alt="" />
            </div>
          </div>
          <div className="description">
            <div className="txt">
              <div className="prod_name">
                <p>{product.name}</p>
              </div>
              <div className="prod_mn">
                <span>{product.price}.00 ₽</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="line"></div>
            <div className="color">
                <p>Цвет</p>
                <div className="palitra">
                    <div className="white">✓</div>
                    <div className="brown"></div>
                    <div className="dark"></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="size">
                <p>Размер</p>
                <div className="setka">
                <div className="sr"><p>S</p></div>
                <div className="sr"><p>M</p></div>
                <div className="sr"><p>L</p></div>
                <div className="sr"><p>XL</p></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="prod_but">
                <p>В избранное</p>
                <span>В корзину</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
