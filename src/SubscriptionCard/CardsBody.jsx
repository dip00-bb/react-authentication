import React, { use } from 'react';
import SingleCard from './SingleCard';

const cardDataPromise=fetch('/card-data.json').then(res=>res.json());

const CardsBody = () => {

    const cardData=use(cardDataPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                cardData.map((singleData) => <SingleCard singleData={singleData}></SingleCard> )
            }
        </div>
    );
};

export default CardsBody;

{/* <SingleCard data={singleData}></SingleCard> */}