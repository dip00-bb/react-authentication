import React from 'react';
import { useLoaderData } from 'react-router';
import Linebar from './Charts/Linebar';
import useTitle from '../Title/useTitle';

const Dashboard = () => {

    const myProduct = useLoaderData();
    useTitle("Dashboard")

    return (
        <div>
            <h1 className='text-center text-4xl text-bold text-red-600 mb-5'>Monitor your activity</h1>

            <div className='flex flex-col gap-3 px-5 md:px-1'>
                {
                    myProduct.map(product => {
                        return (
                            <div className='flex p-4 flex-col border-1 border-red-50 gap-2 rounded-xl md:border-0 items-center md:grid grid-cols-1 md:grid-cols-6 justify-center md:gap-5 '>
                                <div className='md:flex justify-center items-center p-4'>
                                    <div className='md:w-[5rem] md:h-[3rem] bg-amber-500 flex justify-center mb-3'><img className='h-full w-full' src={product.thumbnail}></img></div>
                                </div>
                                <div className='md:text-center'>{product.name}</div>
                                <div className='md:text-center'>{product.price}</div>
                                <div className='md:text-center'>{product.frequency}</div>
                                <div className='md:text-center'>{`${product.left} day left`} </div>
                                <div className="md:text-center">Watching&nbsp;{product.watchTime} minute</div>
                            </div>
                        )
                    })
                }
            </div>


            <div className='mt-10'>
                <Linebar data={myProduct}/>
            </div>
        </div>
    );
};

export default Dashboard;