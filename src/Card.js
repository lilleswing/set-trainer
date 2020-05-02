import React from 'react';

function Card(props) {
    return (
        <div className={"card"}>
            <img className={"card"} alt="" src={props.img} onClick={props.onClick}/>
        </div>
    )
}

export default Card;