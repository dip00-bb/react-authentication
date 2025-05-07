import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../Component/Title/useTitle';
import { Rate } from 'antd';

const Details = () => {


    const subscriptionData = useLoaderData();
    const { id } = useParams();
    useTitle(`${id}`);

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(null);

    const handleAddReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const rating = e.target.rating.value;
        setReview(review);
        setRating(rating);
    }

    const matchedData = subscriptionData.find(data => data.id == id);
    const { thumbnail, name, TechCategory, price, frequency, description, features } = matchedData
    return (
        <div className="max-w-4xl mx-auto bg-[#1c1c1e] text-white p-6 rounded-2xl shadow-lg mt-10 space-y-6 ">

            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full md:w-1/2 rounded-xl"
                />
                <div className="flex-1 space-y-2 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-red-500">{name}</h1>
                    <p className="text-gray-400">Streaming Service</p>
                    <p><span className="font-semibold">{frequency} Cost: </span> {price}</p>
                    <p><span className="font-semibold">Resolution:</span>{features[0]}</p>
                    <p><span className="font-semibold"></span> {features[1]}</p>
                    <p><span className="font-semibold">Content:</span> {features[2]}</p>

                    <div className='mt-5'>
                        <p className=' text-red-500'>Description:</p>
                        <p>{description}</p>
                    </div>
                </div>


            </div>

            <form onSubmit={handleAddReview} className="bg-[#2a2a2d] p-4 rounded-xl space-y-4">
                <h2 className="text-2xl font-semibold">Leave a Review</h2>
                <textarea
                    className="w-full p-3 rounded-lg bg-[#1f1f21] text-white border border-gray-700 focus:outline-none"
                    rows="4"
                    placeholder="Write your review here..."
                    name='review'
                ></textarea>
                <input
                    type="number"
                    min="1"
                    max="5"
                    className="w-full p-3 rounded-lg bg-[#1f1f21] text-white border border-gray-700 focus:outline-none"
                    placeholder="Rating (1 to 5)"
                    name='rating'
                />
                <button type='submit' className="w-full py-3 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 transition-all">
                    Submit Review
                </button>
            </form>

            {
                console.log(rating)
            }
            {
                
                review && <div className='wrap-break-word border-1 border-amber-400 p-4 rounded-xl flex flex-col gap-4'> {<div>{<Rate defaultValue={rating} disabled />} </div>} <p>{review}</p> </div>
            }
        </div>
    );
};

export default Details;