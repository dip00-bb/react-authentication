import React, { use } from 'react';
import SingleCard from './SingleCard';

const cardDataPromise=fetch('/card-data.json').then(res=>res.json());

const CardsBody = () => {

    const cardData=use(cardDataPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-6'>
            {
                cardData.map((singleData) => <SingleCard key={singleData.id} singleData={singleData}></SingleCard> )
            }
        </div>
    );
};

export default CardsBody;
