import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Infocards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            desciption: 'Open at 9.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primary',
        },
        {
            id: 2,
            name: 'Our Location',
            desciption: 'Open at 9.00am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us',
            desciption: 'Open at 9.00am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-primary',
        },
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default Infocards;