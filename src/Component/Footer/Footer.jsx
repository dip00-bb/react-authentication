// import React from 'react';

// const Footer = () => {
//     return (
//         <div className='rounded-2xl'>
//             <footer className="footer sm:footer-horizontal bg-gray-900 text-gray-200 p-10 rounded-t-2xl">
//                 <nav>
//                     <h6 className="footer-title text-white">Genres</h6>
//                     <a href='https://www.imdb.com/search/title/?genres=action&explore=genres&title_type=feature' target='_blank' className="link link-hover">Action</a>
//                     <a href='https://www.imdb.com/search/title/?genres=drama&groups=top_250&sort=user_rating,desc' target='_blank' className="link link-hover">Drama</a>
//                     <a className="link link-hover">Thriller</a>
//                     <a className="link link-hover">Sci-Fi</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title text-white">Explore</h6>
//                     <a className="link link-hover">Top Rated</a>
//                     <a className="link link-hover">Upcoming Movies</a>
//                     <a className="link link-hover">Movie Reviews</a>
//                     <a className="link link-hover">Trailers</a>
//                 </nav>
//                 <nav>
//                     <h6 className="footer-title text-white">Support</h6>
//                     <a className="link link-hover">FAQs</a>
//                     <a className="link link-hover">Help Center</a>
//                     <a className="link link-hover">Privacy Policy</a>
//                     <a className="link link-hover">Terms of Use</a>
//                 </nav>
//             </footer>

//             <footer className="footer bg-gray-900 text-gray-200 border-t border-gray-700 px-10 py-4 rounded-b-2xl">
//                 <aside className="grid-flow-col items-center gap-4">
//                     <svg
//                         width="28"
//                         height="28"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-red-600">
//                         <path d="M10 2L2 7h20L14 2z" />
//                         <path d="M2 7v13h20V7" />
//                         <path d="M16 13a4 4 0 01-8 0" />
//                     </svg>
//                     <p>
//                         CineVibe © 2025<br />
//                         Your ultimate movie experience
//                     </p>
//                 </aside>

//             </footer>

//         </div>
//     );
// };

// export default Footer;


import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router';


export default function Footer() {


  return (
    <footer className="bg-black/50 text-white py-8">
      <div className="max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center" >
        {/* Left Column */}
        <div className='flex flex-col justify-center'>
          <div className="flex space-x-6 flex-wrap items-center">
            {['Home', 'Blog', 'Press', 'Librarians', 'Gift Cards', 'About', 'Contact', 'Help'].map((item) => (
              <Link
                key={item}
                to={item==='Home' && '/'}
                className="text-sm hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>

          <h4 className="mt-8 mb-4 text-lg font-semibold">Connect with LavaROX</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Facebook/>
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Instagram/>
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Twitter/>
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <Linkedin/>
            </a>
          </div>

          <div className="mt-6 flex space-x-4 text-xs text-gray-400">
            <Link to='/termscondition' className="hover:underline">Terms & Conditions</Link>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

          <p className="mt-6 text-xs text-gray-500">© 2025 LavaROX</p>
          <p className="mt-1 text-xs text-gray-400">Watch for free with your participating library card or on a 30 day trial or rent with a personal LavaROX account.</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center ">
          <h4 className="mb-4 text-lg font-semibold text-center">Get the free LavaROX apps</h4>
          <p className="text-sm mb-6 text-gray-400 text-center">Stream award-winning films to your favourite devices</p>

          <div className="w-full max-w-xs">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img src="/responsive.svg" alt="" />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="flex-1">
                <img src="/google-play-badge.png" alt="Get it on Google Play" />
              </a> 
              <a href="#" className="flex-1">
                <img src="/app-store-badge.png" alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
