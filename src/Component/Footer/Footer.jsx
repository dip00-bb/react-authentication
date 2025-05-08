import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


export default function Footer() {


  return (
    <div className="w-full ">

      <div className="h-1 w-full bg-gradient-to-r from-pink-500/70 via-yellow-500/80 via-green-500/90 via-blue-500/80 to-purple-500/80 animate-border" />

      <footer className="flex flex-col md:flex-row justify-between text-white py-10 px-6 bg-gray-800/70 md:px-10">
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex flex-wrap gap-4 text-sm">
              <p className="hover:underline hover:text-red-500">Home</p>
              <p className="hover:underline hover:text-red-500">Blog</p>
              <p className="hover:underline hover:text-red-500">Contact</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Connect with <span className='hover:text-red-500'>LavaROX</span></h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100090006800919" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/dipchondo/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Instagram />
              </a>
              <a href="https://x.com/MovieLover23667" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                <Twitter />
              </a>
            </div>
          </div>

          <div className="text-xs text-gray-400 flex space-x-4">
            <Link to="/termscondition" className="hover:underline hover:text-red-500">Terms & Conditions</Link>
            <Link to="/privacypolicy" className="hover:underline hover:text-red-500">Privacy Policy</Link>
          </div>

          <p className="text-xs text-gray-500 hover:text-red-500">© 2025 LavaROX</p>
          <p className="text-xs text-gray-600 hover:text-red-500">Watch for free with your participating library card or on a 30-day trial or rent with a personal LavaROX account.</p>
        </div>

        <div className="flex flex-col items-center mt-10 md:mt-0 ">
          <h4 className="text-lg font-semibold">Get the free LavaROX apps</h4>
          <p className="text-sm text-gray-600 text-center mb-4 hover:text-red-500">Stream award-winning films to your favorite devices</p>

          <img src="/responsive.svg" alt="Devices" className="w-48 mb-6" />

          <div className="flex items-center gap-4">
            <a href="#">
              <img src="/google1.png" alt="Get it on Google Play" className="w-32" />
            </a>
            <a href="#">
              <img src="/apple.png" alt="Download on the App Store" className="w-32" />
            </a>
          </div>
        </div>
      </footer>
    </div>

  );
}
