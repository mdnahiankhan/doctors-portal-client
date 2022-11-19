import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, reviews } = review
    return (
        <section className="py-6 dark:text-gray-900">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="  leading-none text-center sm:text-sm">{reviews}</p>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={img} />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">{name}</p>
                            <p>{location}</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Review;