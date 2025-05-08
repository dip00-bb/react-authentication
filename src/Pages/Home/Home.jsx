import React, { Suspense } from 'react';
import Slider from '../../Component/Slider/Slider';
import CardsBody from '../../SubscriptionCard/CardsBody';
import Loader from '../../Component/Loader/Loader';
import Marque from '../../Component/Marquee/Marque';
import Ourpromise from '../../Component/OurPromise/Ourpromise';
import useTitle from '../../Component/Title/useTitle';
const Home = () => {
    useTitle("Home")
    return (
        <div>
            <h1 className="font-extrabold text-red-500 text-2xl md:text-4xl lg:text-6xl text-center my-5 mb-10">
                Your Gateway to <p className='mt-3'> World-Class Cinema</p>
            </h1>


            <div className='py-5'>
                <Slider />
            </div>

            <div className='py-5'>
                <h1 className='text-red-500 text-3xl font-bold text-center mb-10'>Services</h1>
                <div className='px-5'>
                    <Suspense fallback={<Loader />}>
                        <CardsBody />
                    </Suspense>
                </div>
            </div>

            <div className='py-5'>
                <h1 className='text-red-500 text-3xl font-bold text-center mb-10'>Our client </h1>
                <Marque />
            </div>

            <div className='py-5'>
                <Ourpromise />
            </div>

        </div>
    );
};

export default Home;