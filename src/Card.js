import React from 'react';

function Card(props) {
    const imgSrc = props.img.startsWith('http') ? props.img : `${process.env.PUBLIC_URL}/${props.img}`;
    return (
        <div className={"cell"}>
            <div className="image-container">
                <img alt="" src={imgSrc}
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