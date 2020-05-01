import React from 'react';

function Card(props) {
    return (
        <div>
            <img src={props.img} onClick={props.onClick}/>
        </div>
    )
}

export default Card;