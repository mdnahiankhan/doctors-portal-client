import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section className="p-6 dark:text-gray-100"
            style={{
                background: `url(${appointment})`
            }}
        >
            <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid text-white">
                <h2 className="w-full text-3xl font-bold leading-tight text-center text-purple-300">Contact us</h2>
                <h3 className='text-center text-4xl '>Stay Connected With Us</h3>
                <div>
                    <label for="name" className="block mb-1 ml-1 text-white">Email Address</label>
                    <input id="name" type="text" placeholder="Your Email" required="" className="block w-full p-3 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-black" />
                </div>
                <div>
                    <label for="email" className="block mb-1 ml-1 text-white">Subject</label>
                    <input id="email" type="email" placeholder=" Subjects" required="" className="block w-full p-3 rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-black" />
                </div>
                <div>
                    <label for="message" className="block mb-1 ml-1 text-white">Message</label>
                    <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded-xl autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 text-black"></textarea>
                </div>
                <div className='text-center'>
                    <button type="submit" className=" text-center px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 ">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;