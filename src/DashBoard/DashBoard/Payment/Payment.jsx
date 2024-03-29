import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, slot, appointmentDate } = booking;

    return (
        <div>
            <h3>Payment for {treatment}</h3>
            <p className='text-xl'>Please Pay ${price} for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkout
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;