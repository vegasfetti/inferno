import { NavLink } from "react-router-dom";
import { products } from "../data";
import Card from "../components/Card/Card";

import Search from '../components/Search/Search'
import Filter from '../components/Filter/Filter'

import "./CatalogPage.css";

// imgs
import filter from "../../public/ico/filter.png";
import arrow from "../../public/ico/arrow.png";
import round from "../../public/ico/round.png";
import { useState } from "react";

const CatalogPage = () => {

  const [query, setQuery] = useState("")
  const [sorting, setSorting] = useState('default')

  const onSortingChange = (event) => {
    setSorting(event.target.value)
  }

  const onChangeQuery = (event) => {
    setQuery(event.target.value)
  }

  const filteredProducts = products.filter((item) =>

    item.name.toLowerCase().includes(query.toLocaleLowerCase())

  )

  const sortProducts = (sorting, products) => {

    switch (sorting) {
      case 'priceAscending':
        return [...products].sort((a, b) => a.price.localeCompare(b.price))
      case 'priceDescending':
        return [...products].sort((a, b) => b.price.localeCompare(a.price))
      case 'nameA':
        return [...products].sort((a, b) => a.name.localeCompare(b.name))
      case 'nameZ':
        return [...products].sort((a, b) => b.name.localeCompare(a.name))
      default:
        return products
    }

  }

  const fullSorting = sortProducts(sorting, filteredProducts)




  return (
    <>
      <div className="container">
        <NavLink to="/">
          {" "}
          <div className="seeds">
            <p>Главная</p> <img src={arrow} alt="" />
          </div>{" "}
        </NavLink>

        <div className="catalog">
          <div className="catalog__filter">
            <div className="stroke">
              <div className="filter--title">Фильтр</div>
              <img src={filter} alt="" />
            </div>

            <div className="filter--hr"></div>

            <div className="stroke mb20">
              <p>Мужчины</p>
              <img src={arrow} alt="" />
            </div>
            <div className="stroke mb20">
              <p>Женщины</p>
              <img src={arrow} alt="" />
            </div>
            <div className="stroke">
              <p>Аксессуары</p>
              <img src={arrow} alt="" />
            </div>

            <div className="filter--hr"></div>

            <div className="stroke">
              <div className="filter--title">Цена</div>
              <img src={arrow} alt="" />
            </div>

            <img className="round" src={round} alt="" />

            <div className="filter--hr"></div>

            <div className="stroke">
              <div className="filter--title">Размер</div>
              <img src={arrow} alt="" />
            </div>

            <div className="larges">
              <div className="large">XS</div>
              <div className="large">S</div>
              <div className="large">M</div>
              <div className="large">l</div>
              <div className="large">Xl</div>
            </div>
          </div>
          <div className="cat_main">
            <Search query={query} onChangeQuery={onChangeQuery} />

            <div className="catalog__content">
              
            <Filter sorting={sorting} onSortingChange={onSortingChange} />


              <div className="catalog__content--items">



                {
                  fullSorting.length ? (
                    fullSorting.map((product, index) => (
                      <Card
                        key={index}
                        {...product}
                        firstPhoto={product.photo[0]}
                      />
                    ))
                  ) : (
                    <h2>По вашему запросу `{query}` ничего не найдено!</h2>
                  )}



              </div>
            </div>
            <div className="pagination">
              <div className="next">
                <img src={arrow} alt="" />
              </div>

              <div className="number number--active">1</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">...</div>
              <div className="number">27</div>

              <div className="prev">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
