import React from 'react';

function Card(props) {
    return (
        <div>
            <img alt="" src={props.img} onClick={props.onClick}/>
        </div>
    )
}

export default Card;