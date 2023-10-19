import Image from 'next/image';
import React from 'react';
import HeroImage from '../../../../assets/HeroImage.jpg';

const HeroSection = () => {
    return (
        <div className="relative flex justify-center h-screen    bottom-32 bg-gradient-to-b from-transparent to-black">
            <div className=" -z-10">
                <Image
                    src={HeroImage}
                    alt="movie_wallpaper"
                    className="absolute z-0 inset-0 w-full h-full object-cover opacity-30 mix-blend-darken"
                />
            </div>
            <div className="absolute top-80 z-50 flex-col inset-0 align-middle flex items-center justify-center gap-4">
                <h1 className="text-4xl text-white font-[58px]">The Best Streaming Experience</h1>
                <p className="max-w-[1096px]">
                    StreamVibe is the best streaming experience for watching your favorite movies
                    and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide
                    variety of content, including the latest blockbusters, classic movies, popular
                    TV shows, and more. You can also create your own watchlists, so you can easily
                    find the content you want to watch.
                </p>
                <button className="  mt-10 bg-red-600 hover:bg-red-700 hover:text-white p-3 rounded-md">
                    Start Watching Now
                </button>
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50"></div>
        </div>
    );
};

export default HeroSection;
