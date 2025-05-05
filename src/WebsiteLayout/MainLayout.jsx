import React from 'react';
import Navbar from '../Component/Header/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Component/Footer/Footer';

const MainLayout = () => {

    const { pathname } = useLocation();
    console.log("current location is", pathname)



    let bgStyle = { background: 'black' };

    if (pathname === '/auth/login') {
        bgStyle = {
            backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/login_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };
    } else if (pathname === '/auth/register') {
        bgStyle = {
            backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/register_bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };
    }


    return (
        <div style={bgStyle} className='px-2'>

            <header className='py-5'>
                <Navbar />
            </header>

            <main className='py-5' >
                <Outlet />
            </main>

            <footer className='pt-5'>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;