import React, { useContext } from 'react'
import { DataContext } from '../../../GlobalState'
import ProductCard from '../../utils/productCard/ProductCard'

const Product = () => {
    const state = useContext(DataContext)
    const [products] = state.products
    console.log(products)
    return (
        <div className="product-page">
            {
                products.map(product => (<ProductCard key={product._id} product={product}/>))
                
            }
           
        </div>
    )
}

export default Product
