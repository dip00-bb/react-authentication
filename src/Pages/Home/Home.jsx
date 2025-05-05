import React, { Suspense } from 'react';
import Slider from '../../Component/Slider/Slider';
import CardsBody from '../../SubscriptionCard/CardsBody';
import Loader from '../../Component/Loader/Loader';
import Marque from '../../Component/Marquee/Marque';
import Ourpromise from '../../Component/OurPromise/Ourpromise';
const Home = () => {
    return (
        <div>
            <h1 className="font-medium text-red-500 text-2xl md:text-4xl lg:text-6xl text-center my-5 mb-10">
                Stream the Best in Entertainment at a Price That Makes Sense
            </h1>


            <div className='py-5'>
                <Slider />
            </div>



            <div className='py-5'>
                <h1 className='text-red-500 text-3xl font-bold text-center mb-10'>Services</h1>
                <Suspense fallback={<Loader />}>
                    <CardsBody />
                </Suspense>
            </div>

            <div className='py-5'>
                <h1 className='text-red-500 text-3xl font-bold text-center mb-10'>Our client </h1>
                <Marque/>
            </div>

            <div className='py-5'>
                <Ourpromise/>
            </div>

        </div>
    );
};

export default Home;