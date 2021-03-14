import React from 'react'

function Menu({ items }) {
    return (
        <div className="product-container">
            {items.map((menuItem) => {
                const { id, title, category, img, alt_tag } = menuItem;
                return (
                    <div key={id} className="menu-item">
                        <img src={img} className="img-fluid" alt={alt_tag} />
                        <div className="portfolio-info">
                            <h4>{title}</h4>
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
