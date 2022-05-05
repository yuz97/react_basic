import React from 'react';

function Card(props) {
    // console.log(props);
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.imageUrl} className="thumbnail w-10 h-10" />
            <div className="card-body">
                <h4>{props.title}</h4>
                <small className="text-muted">{props.published}</small>
            </div>
        </div>
    );
}

export default Card;