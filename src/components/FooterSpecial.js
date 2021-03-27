import React from 'react'
import './FooterSpecial.css';
export default function FooterSpecial({ icon, text }) {
    return (
        <div className="footer__special">
            <i className={icon}></i>
            <span>{text}</span>
        </div>
    )
}
