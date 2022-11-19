import React from 'react';
import DentalCare from '../../../DentalCare/DentalCare';
import Services from '../../../Service/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contacts/Contact';
import Infocards from '../InfoCards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;