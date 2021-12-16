import React from 'react'

const Products = (props) => {
    let { id, name, price, author, description, type, img, incart, category } = props.ProductsAttr;
    return (
        <main>
                    <img src={img} alt="name" />
                    <h1>{id}</h1>
                    <h1>{name}</h1>
                    <p>{author}</p>
                    <p>{description.slice(0,40)}</p>
                    <p>{type}</p>
                    <p>{incart}</p>
                    <p>{category}</p>
                    <button className={incart ===true ? "addToCart" : "OutOfStock"}>
                        {incart === true ? (
                    <strong>Add to cart</strong>
                    ) : (
                    <strong>Out of Stock</strong>
                    )}
                    </button>
        </main>
    )
}

export default Products
