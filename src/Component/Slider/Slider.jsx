import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        // <div className="carousel h-[40rem] rounded-3xl">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img
        //             src="/peakpx.jpg"
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide4" className="">❮</a>
        //             <a href="#slide2" className="">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img
        //             src="/avenger.jpg"
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide1" className="">❮</a>
        //             <a href="#slide3" className="">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img
        //             src="/interstellar.jpg"
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide2" className="btn-circle text-blue-600">❮</a>
        //             <a href="#slide4" className="btn-circle text-blue-600">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img
        //             src="/superman.jpg"
        //             className="w-full" />
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <a href="#slide3" className="btn-circle">❮</a>
        //             <a href="#slide1" className="">❯</a>
        //         </div>
        //     </div>
        // </div>

        <div className='px-10 rounded-3xl h-fit' >
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper rounded-3xl lg:h-[60rem]" >
                <SwiperSlide><img src="/superman.jpg "
                    className="w-full rounded-3xl" /></SwiperSlide>
                <SwiperSlide><img src="/interstellar.jpg"
                    className="w-full rounded-3xl" /></SwiperSlide>
                <SwiperSlide><img src="/avenger.jpg"
                    className="w-full rounded-3xl" /></SwiperSlide>
                <SwiperSlide><img src="/peakpx.jpg"
                    className="w-full rounded-3xl" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;