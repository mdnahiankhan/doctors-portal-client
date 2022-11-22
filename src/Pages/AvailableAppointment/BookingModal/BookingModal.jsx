import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/Authprovider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatMentName, slots, price } = treatment; //  treatment is appointmentoption just different name 
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value
        const name = form.name.value;
        const email = form.email.value
        const slot = form.slot.value
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatMentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }

        fetch('https://doctors-portal-server-five-omega.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Bookings Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatMentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" name='date' disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered ">

                            {
                                slots.map((slot, i) => <option value={slot} key={i} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input w-full input-bordered" disabled defaultValue={user?.displayName} />
                        <input type="email" name='email' placeholder="Your Email" className="input w-full input-bordered" disabled defaultValue={user?.email} />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='w-full btn btn-accent py-4 text-white font-bold' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;