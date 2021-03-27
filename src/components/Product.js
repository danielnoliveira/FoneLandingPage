import React from 'react'
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductFooter from './ProductFooter';
import './Product.css';
export default function Product({imageIndex}) {
    return (
        <div className="product__shower">
            <ProductImage imageIndex={imageIndex}/>
            <ProductInfo />
            <ProductFooter />
        </div>
    )
}
