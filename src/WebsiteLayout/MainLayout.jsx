import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-11/12 py-5 mx-auto'>
            <header className='py-5'>
                <Navbar />
            </header>

            <main className='py-5' >
                <Outlet />
            </main>

            <footer className='py-5'>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;