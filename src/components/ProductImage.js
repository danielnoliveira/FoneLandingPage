import React from 'react'
import Fone from './../assets/fone.png';
import Fone2 from './../assets/fone2.png';
import Fone3 from './../assets/fone-03.png';
import './ProductImage.css';
const images = [
    Fone,
    Fone2,
    Fone3
];
export default function ProductImage({imageIndex}) {
    return (
        <div className="product__image">
            <img src={images[imageIndex]} alt="Fone" />
        </div>
    )
}
