import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

import Author from "./Author";

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     speed: 200,
//     spaceBetween: 10,
//     slidesPerView: 1,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   })

export default function section1() {
    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
  
  return (
   
//      <div className="swiper">
  
//   <div className="swiper-wrapper">
    
//     <div className="swiper-slide"><span>slide 1</span></div>
//     <div className="swiper-slide"><span>slide 2</span></div>
//     <div className="swiper-slide"><span>slide 3</span></div>
//   </div>
 
//   <div className="swiper-pagination"></div>

 
//   <div className="swiper-button-prev"></div>
//   <div className="swiper-button-next"></div>

  
//   <div className="swiper-scrollbar"></div>
// </div>
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{delay: '2000'}}
            >
                <SwiperSlide> {Slide()}</SwiperSlide>
                <SwiperSlide> {Slide()}</SwiperSlide>
                <SwiperSlide> {Slide()}</SwiperSlide>
                <SwiperSlide> {Slide()}</SwiperSlide>
                <SwiperSlide> {Slide()}</SwiperSlide>
            </Swiper>
           
           
        </div>
    </section>
    
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-3 md:gap-4">
            <div className="image md:col-span-1 sm:col-span-3 sm:flex justify-center">
                <Link href={"/"}><a><Image src={"/images/img1.jpg"} width={600} height={600} /></a></Link>
            </div>
            <div className="info sm:flex justify-center flex-col md:col-span-2 sm:col-span-3 p-6"> 
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-4xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author/>
            </div>
        </div>
    )
}