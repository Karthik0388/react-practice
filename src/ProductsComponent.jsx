import React, { useState } from 'react'
import JSON from '../src/Products.json'
import Product from './Product'
import './Products.css'

const ProductsComponent = () => {
    let [products, setProducts] = useState(JSON);

    return (
            <div id="productsBlock">
                {products.map((data) => {
                    return <Product key={data.id} ProductsAttr={data} />
                })
                }
            </div>
    )
}

export default ProductsComponent
