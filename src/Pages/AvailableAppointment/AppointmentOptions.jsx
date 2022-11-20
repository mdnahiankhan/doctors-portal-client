import React from 'react';

const AppointmentOptions = ({ option, setTreatment }) => {
    const { name, price, slots } = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body text-center mt-10">
                    <h2 className="text-2xl font-bold text-accent text-center">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'space' : 'space'} Available</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn btn-accent text-white"
                            onClick={() => setTreatment(option)}
                        >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;