import React from 'react';

const SingleCard = ({ singleData }) => {
    const { thumbnail, name, TechCategory, price, frequency } = singleData
    return (
        <div className="bg-[#1c1c1e] text-white rounded-2xl p-4 w-80 shadow-lg group hover:shadow-xl transition-shadow duration-300 mx-auto h-fit">
            <div className="relative rounded-xl overflow-hidden border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-500">
                <img
                    src={thumbnail}
                    alt="Netflix"
                    className="rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-[3px] group-hover:border-gradient-to-tr group-hover:from-red-500 group-hover:to-purple-600 transition-all duration-700"></div>
            </div>

            <div className="mt-4 space-y-2 text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-400">{TechCategory}</p>
                <p className="text-lg font-semibold text-green-400">{price}/ {frequency}</p>
                <button className="mt-3 px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                    View More
                </button>
            </div>
        </div>
    );
};

export default SingleCard;