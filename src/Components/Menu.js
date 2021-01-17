import React from 'react'

function Menu({ items }) {
    return (
        <div className="product-container">
            {items.map((menuItem) => {
                const { id, title, category, img } = menuItem;
                return (
                    <div key={id} className="menu-item">
                        <img src={img} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>{title}
                                <a href="/products/golf_equipment"
                                    className="details-link"
                                    title="More Details">
                                    <i className="bx bx-link"></i>
                                </a>
                            </h4>
                            <p>{category}</p>
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}

export default Menu;
