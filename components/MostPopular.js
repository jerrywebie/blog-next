import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import Author from './Author'

export default function MostPopular() {
    SwiperCore.use([Autoplay])
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
        <Swiper
                slidesPerView={2}
                // loop={true}
                // autoplay={{delay: '2000'}}
            >
                <SwiperSlide> {Post()}</SwiperSlide>
                <SwiperSlide> {Post()}</SwiperSlide>
                <SwiperSlide> {Post()}</SwiperSlide>
                <SwiperSlide> {Post()}</SwiperSlide>
                <SwiperSlide> {Post()}</SwiperSlide>
            </Swiper>
    </section>
  )
}

function Post(){
    return (
        <div className="item p-4">
            <div className="images">
            <Link href={"/"}><a><Image src={"/images/articles/posts/img1.jpg"} className="rounded" width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-12">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
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