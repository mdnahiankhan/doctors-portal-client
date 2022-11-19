import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/chair.png';
const Banner = () => {
    return (
        <div>
            <section className=" dark:text-gray-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Your New Smile
                            <span className="dark:text-violet-400"> Start </span> Here
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Think before you leap.Your one steps is to be great if your thinks is good and wealthy.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"><Link>Started Here</Link></button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;