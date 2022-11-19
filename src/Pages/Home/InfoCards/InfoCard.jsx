import React from 'react';

const InfoCard = ({ card }) => {
    const { name, desciption, icon, bgClass } = card;
    return (
        <div className={`card md:card-side px-6 p-6 text-white bg-base-100 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desciption}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;