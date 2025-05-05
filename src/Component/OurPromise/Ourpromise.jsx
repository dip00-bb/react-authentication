import React from 'react';

const Ourpromise = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/10 text-white px-6 py-12 rounded-2xl shadow-lg">

            <div className="md:w-1/2 w-full">
                <img
                    src="/promise.jpg"
                    alt="Our Promise"
                    className="rounded-2xl w-full h-auto object-cover shadow-md"
                />
            </div>


            <div className="md:w-1/2 w-full">
                <h2 className="text-3xl font-bold text-red-500 mb-4">Our Promise</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                    Welcome to <span className="text-white font-semibold">LavaROX</span>, the easiest and most affordable way to enjoy your favorite streaming platforms. Whether it's <span className="text-white font-medium">Netflix, Amazon Prime, Disney+</span>, or any other popular movie and TV subscription, we bring them all together in one place—just for you.
                    <br /><br />
                    The best part? You don’t need a debit or credit card! With our smooth <span className="text-white font-medium">mobile banking</span> system, you can purchase subscriptions quickly, securely, and without any hassle. Say goodbye to complicated payments and high prices—start watching what you love, when you want, all at the best deals in town.
                </p>
            </div>
        </div>

    );
};

export default Ourpromise;