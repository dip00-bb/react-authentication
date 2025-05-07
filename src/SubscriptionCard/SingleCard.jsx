import React from 'react';
import { Link } from 'react-router';

const SingleCard = ({ singleData }) => {
    const { thumbnail, name, TechCategory, price, frequency,id,features } = singleData
  return (
    <div className="bg-[#1c1c1e] text-white rounded-2xl shadow-xl p-4 w-full max-w-sm mx-auto flex flex-col md:flex-row md:max-w-4xl md:justify-between border border-gray-800 hover:border-purple-600 transition-all duration-300">
    <div className="flex flex-col items-center md:flex-row md:items-start gap-4 w-full">
      <div className="w-full md:w-48 overflow-hidden rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-500">
        <img
          src={thumbnail}
          alt={name}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow space-y-2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <p className="text-sm text-gray-400">{TechCategory}</p>
        <p className="text-lg font-semibold text-green-400">
          {price} / {frequency}
        </p>

        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <Link
          to={`/platform/${id}`}
          className="inline-block text-center mt-3 px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  </div>
  );
};

export default SingleCard;