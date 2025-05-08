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

            <div className='flex flex-col gap-3 px-5 md:px-1 md:border-1 md:border-blue-700 rounded-2xl'>
                {
                    myProduct.map(product => {
                        return (
                            <div key={product.id} className='flex p-4 flex-col border-1 border-red-50 gap-2 rounded-xl md:border-0 items-center md:grid grid-cols-1 md:grid-cols-6 justify-center md:gap-5 '>
                                <div className='md:flex justify-center items-center p-4'>
                                    <div className='md:w-[5rem] md:h-[3rem] bg-amber-500 flex justify-center mb-3'><img className='h-full w-full' src={product.thumbnail}></img></div>
                                </div>
                                <div className='md:text-center'>{product.name}</div>
                                <div className='md:text-center'><span className='text-red-400'>{product.price}</span></div>
                                <div className='md:text-center'>{product.frequency}</div>
                                <div className='md:text-center'> <span className='text-red-400'>{product.left}</span>&nbsp; day left </div>
                                <div className="md:text-center font-medium">Watching Time: &nbsp;<span className='text-red-400'>{product.watchTime}</span> minute</div>
                            </div>
                        )
                    })
                }
            </div>
                
                <h1 className='text-red-500 text-2xl text-center my-5'>Watch Time Report</h1>

            <div className='mt-10'>
                <Linebar data={myProduct}/>
            </div>
        </div>
    );
};

export default Dashboard;