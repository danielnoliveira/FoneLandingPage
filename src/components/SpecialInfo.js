import React from 'react'
import './SpecialInfo.css';
export default function SpecialInfo({title,text}) {
    return (
        <div className="info__specialInfo">
            <h6>
                {title}
            </h6>
            <p>
                {text}
            </p>
        </div>
    )
}
