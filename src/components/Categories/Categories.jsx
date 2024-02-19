import React from "react";
import './Categories.css'

const Categories = () => {
    return (
        <>

            <div className="categories">
                <div className="categories_item categories_item--first">

                    <div className="categories_item_placeholder">
                        <p>    мужчины </p>
                    </div>

                </div>
                <div className="categories_item categories_item--second">
                    <div className="categories_item_placeholder">

                        <p> женщины </p>
                    </div>

                </div>
                <div className="categories_item categories_item--thers">
                    <div className="categories_item_placeholder">

                        <p> аксессуары </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Categories