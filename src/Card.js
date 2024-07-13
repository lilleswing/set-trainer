import React from 'react';

function Card(props) {
    return (
        <div className={"cell"}>
            <div className="image-container">
                <img alt="" src={props.img}
                     onClick={props.onClick}
                    style={{
                        cursor: "pointer",
                        height: "70%",
                        objectFit: "fill"
                    }}
                />
            </div>
        </div>
    )
}

export default Card;