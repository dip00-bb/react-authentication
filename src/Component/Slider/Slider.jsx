import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (

        <div className='px-5 lg:px-10 rounded-3xl h-fit' >
            <Swiper navigation={false} modules={[Navigation]} className="mySwiper rounded-3xl lg:h-[60rem]" >
                <SwiperSlide><img src="/superman.jpg "
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