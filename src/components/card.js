import '../styles.css';
import React from 'react';
import star from '../images/star.png';

function Main(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            {/* if the first statement is truthy, then the second element will render */}
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + `/images/${props.item.coverImg}`} className="lance" alt='Persons profile shot' /> 
            <div className='card-stats'>
                <img src={star} className="star" alt='a star'/>
                <span>{props.item.stats.rating}</span>
                <span className='grey'> ({props.item.stats.reviewCount}) -</span>
                <span className='grey'>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price} / person</span></p>
        </div>
    )
}

export {Main}

/**/