import React from 'react'
import FooterSpecial from './FooterSpecial';
import './ProductFooter.css';
const specials = [
    {
        icon: "fas fa-wave-square",
        text: "High-Resolution Audio compatible",
    },
    {
        icon: "fab fa-bluetooth-b",
        text: "Wireless connectivity using bluetooth",
    },
    {
        icon: "fas fa-battery-empty",
        text: "A powerful battery that lasts up to 4 hours of use",
    },
];
export default function ProductFooter() {
    return (
        <div className="product__footer">
            {specials.map((item,index)=>(
                <FooterSpecial key={index} text={item.text} icon={item.icon} />
            ))}
        </div>
    )
}
