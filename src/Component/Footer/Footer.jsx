import React from 'react';

const Footer = () => {
    return (
        <div className='rounded-2xl'>
            <footer className="footer sm:footer-horizontal bg-gray-900 text-gray-200 p-10 rounded-t-2xl">
                <nav>
                    <h6 className="footer-title text-white">Genres</h6>
                    <a href='https://www.imdb.com/search/title/?genres=action&explore=genres&title_type=feature' target='_blank' className="link link-hover">Action</a>
                    <a href='https://www.imdb.com/search/title/?genres=drama&groups=top_250&sort=user_rating,desc' target='_blank' className="link link-hover">Drama</a>
                    <a className="link link-hover">Thriller</a>
                    <a className="link link-hover">Sci-Fi</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Explore</h6>
                    <a className="link link-hover">Top Rated</a>
                    <a className="link link-hover">Upcoming Movies</a>
                    <a className="link link-hover">Movie Reviews</a>
                    <a className="link link-hover">Trailers</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Support</h6>
                    <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Use</a>
                </nav>
            </footer>

            <footer className="footer bg-gray-900 text-gray-200 border-t border-gray-700 px-10 py-4 rounded-b-2xl">
                <aside className="grid-flow-col items-center gap-4">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600">
                        <path d="M10 2L2 7h20L14 2z" />
                        <path d="M2 7v13h20V7" />
                        <path d="M16 13a4 4 0 01-8 0" />
                    </svg>
                    <p>
                        CineVibe © 2025<br />
                        Your ultimate movie experience
                    </p>
                </aside>

            </footer>

        </div>
    );
};

export default Footer;