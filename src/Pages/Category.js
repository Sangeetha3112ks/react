import React from 'react';
import dataProduct from '../AccessoriesProduct';
import clothdata from '../ClothProducts';
import './Category.css';
import { Link } from 'react-router-dom';
import HeartIcon from '../Components/HeartIcon/HeartIcon';

const Category = ({ category }) => {
    const categoryMap = {
        men: { data: clothdata.mens, title: "Men's Collection", type: "mens" },
        women: { data: clothdata.womens, title: "Women's Collection", type: "womens" },
        kids: { data: clothdata.kids, title: "Kids' Collection", type: "kids" },
        bags: { data: dataProduct.bag, title: "Bags Collection", type: "bag" },
        jewellery: { data: dataProduct.jewellery, title: "Jewellery Collection", type: "jewellery" },
        fragrance: { data: dataProduct.fragrance, title: "Fragrance Collection", type: "fragrance" },
    };

    const { data: categoryData, title, type: categoryType } = categoryMap[category] || categoryMap.men;

    return ( 
        <div className="category-container">
            <h1>{title}</h1>
            <div className="category">
                {categoryData.map((item) => (
                    <div className="category-item" key={item.id}>
                        <Link to={`/product/${item.id}/${categoryType}`}>
                            <img src={item.image} alt={item.name} />
                        </Link>
                        <HeartIcon 
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                        <p>{item.name}</p>
                        <p>New Price: ${item.new_price}</p>
                        <p>Old Price: ${item.old_price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;