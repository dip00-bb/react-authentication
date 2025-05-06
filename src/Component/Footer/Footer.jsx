


import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


export default function Footer() {


  return (
    <div className='flex justify-center w-full'>
      <footer className="flex justify-between bg-black/50 text-white py-8 w-full">
        <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center" >
          <div className='flex flex-col justify-center'>
            <div className="flex space-x-6 flex-wrap items-center">
              {['Home', 'Blog', 'About', 'Contact', 'Help'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' && '/'}
                  className="text-sm hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>

            <h4 className="mt-8 mb-4 text-lg font-semibold">Connect with LavaROX</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090006800919" target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/dipchondo/" target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram />
              </a>
              <a href="https://x.com/MovieLover23667" target='_blank' className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Twitter />
              </a>
            </div>

            <div className="mt-6 flex space-x-4 text-xs text-gray-400">
              <Link to='/termscondition' className="hover:underline">Terms & Conditions</Link>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>

            <p className="mt-6 text-xs text-gray-500">© 2025 LavaROX</p>
            <p className="mt-1 text-xs text-gray-400">Watch for free with your participating library card or on a 30 day trial or rent with a personal LavaROX account.</p>
          </div>

          <div className="flex flex-col items-center ">
            <h4 className="mb-4 text-lg font-semibold text-center">Get the free LavaROX apps</h4>
            <p className="text-sm mb-6 text-gray-400 text-center">Stream award-winning films to your favourite devices</p>

            <div className="w-full max-w-xs">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img src="/responsive.svg" alt="" />
              </div>

              <div className="flex space-x-4 items-center">
                <a className="flex-1">
                  <img src="/google1.png" alt="Get it on Google Play" />
                </a>
                <a className="flex-1">
                  <img src="/apple.png" alt="Download on the App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
