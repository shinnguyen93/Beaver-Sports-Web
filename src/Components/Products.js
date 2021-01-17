import React, { useState } from 'react'
import Category from './Category.js'
import Menu from './Menu.js'
import items from './data.js'

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

function Products() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === "All") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };


    return (
        <section id="portfolio" className="portfolio wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Our Products</h2>
                </div>
                <Category categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </div>
        </section>
    )
}

export default Products
