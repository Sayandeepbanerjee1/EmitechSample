// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';

// const HeroSection = () => {
//     const slides = [
//         { image: '/img-1.jpg', text: 'Welcome to Emitech Infosystems.We leverage cutting-edge data engineering tools to process and analyze massive datasets in real time.' },
//         { image: '/EarthAndSattelite.jpg', text: 'Connecting the World with Technology We specialize in.' },
//     ];

//     return (
//         <Swiper
//             modules={[Navigation, Autoplay]}
//             autoplay={{ delay: 3000 }}
//             loop={true}
//             className="h-screen w-full"
//         >
//             {slides.map((slide, index) => (
//                 <SwiperSlide key={index}>
//                     {/* Image */}
//                     <div
//                         className="h-full w-full bg-cover bg-center relative"
//                         style={{ backgroundImage: `url(${slide.image})` }}
//                     >
//                         {/* Text */}
//                         <div className="absolute inset-10 flex items-center justify-center">
//                             <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-5">
//                                 {slide.text}
//                             </h1>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default HeroSection;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const HeroSection = () => {
    const slides = [
        { 
            image: '/img-1.jpg', 
            text: 'Welcome to Emitech Infosystems',
            subtext: 'We leverage cutting-edge data engineering tools to process and analyze massive datasets in real time.',
            cta: 'Explore Solutions'
        },
        { 
            image: '/EarthAndSattelite.jpg', 
            text: 'Connecting the World with Technology',
            subtext: 'We specialize in innovative solutions that bridge global communication gaps.',
            cta: 'Learn More'
        },
    ];

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            className="h-screen w-full relative"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                        {/* Dark overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2B3A67]/90 to-transparent z-10"></div>
                        
                        {/* Background image */}
                        <div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>

                        {/* Content container */}
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-4 lg:px-8">
                                <div className="max-w-2xl">
                                    {/* Main heading */}
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                                        {slide.text}
                                    </h1>
                                    
                                    {/* Subtext */}
                                    <p className="text-lg md:text-xl text-white/90 mb-8 animate-fadeInUp delay-100">
                                        {slide.subtext}
                                    </p>
                                    
                                    {/* CTA Button */}
                                    <button className="bg-[#4A90E2] hover:bg-[#2B3A67] text-white px-8 py-3 rounded-lg 
                                      transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-200">
                                        {slide.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev !text-[#4A90E2] !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-sm"></div>
            <div className="swiper-button-next !text-[#4A90E2] !w-12 !h-12 !rounded-full !bg-white/10 !backdrop-blur-sm"></div>

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-8 [&>.swiper-pagination-bullet-active]:!bg-[#4A90E2] 
              [&>.swiper-pagination-bullet]:!bg-white/50 [&>.swiper-pagination-bullet]:!opacity-100"></div>
        </Swiper>
    );
};

export default HeroSection;