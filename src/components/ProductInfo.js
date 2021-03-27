import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SpecialInfo from './SpecialInfo';
import './ProductInfo.css';
const specials_info = [
    {
        text: "70 mm, dome type (CCAW Voice Col)",
        title: "Driver unit",
    },
    {
        text: "4 Hz + 100.000 Hz",
        title: "Frequency Response",
    },
];
export default function ProductInfo() {
    return (
        <div className="product__info">
            <div className="info__container">

                <h1 className="info__name">hyper x on-ear</h1>
                <h6 className="info__subname">Wireless over-ear headphones</h6>
                <div>
                    {Array(5).fill(0).map((i, index) => {
                        return (
                            <FontAwesomeIcon key={index} className="star__icon" icon={faStar} color={index < 4 ? "#ca3b3a" : "#707070"} data-testid="menu-shoppingcart" />
                        );
                    })}
                    <span className="info__avaliable">4.2 (355)</span>
                </div>
                {specials_info.map((item,index)=>(
                    <SpecialInfo key={index} text={item.text} title={item.title} />
                ))}
                <div className="info__footer">
                    <span className="info__price">$89.99</span>
                    <button value="buy">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}
