import React from 'react';

const InfoCard = ({ img, cardTitel, detail, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5 lg:pt-0'><img src={img} alt="Album" className='' /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitel}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default InfoCard;