import React, { useState, useEffect } from 'react'

function AirPodsBanner() {

    const airpods = [
        { src: "/airpods.webp" },
        { src: "/airpods2.webp" },
        { src: "/airpods3.webp" },
        { src: "/airpods4.webp" },
    ];

    const [airIndex, setAirIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAirIndex((prevIndex) => (prevIndex + 1) % airpods.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [airpods.length]);

    return (
        <div className="bg-slate-200 sm:relative h-[24rem] sm:h-[28rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
            <img
                className="h-[16rem] py-4 m-auto sm:hidden drop-shadow-2xl"
                src={airpods[airIndex].src}
                alt="not-found"
            />
            <div className="pt-1 sm:hidden text-center">
                <span className='block title-airpods text-4xl font-bold drop-shadow-2xl'>AirPods Pro</span>
                <span className='block title-2-airpods font-semibold drop-shadow-2xl'>2nd Generation</span>
                <button className='block m-auto mt-2 py-1 px-3 rounded-xl text-base bg-slate-900 hover:bg-slate-800 transition-all hover:ease-in text-slate-50'>Buy $249</button>
            </div>
            <div className="hidden sm:block ml-36 pt-36">
                <span className="title-airpods text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[7rem] block font-bold drop-shadow-2xl">AirPods Pro</span>
                <span className="title-2-airpods text-[0.8rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] xl:text-[2rem] block font-semibold mb-4 drop-shadow-2xl">2nd Generation</span>
                <button className="block rounded-xl bg-slate-900 hover:bg-slate-800 transition-all hover:ease-in text-slate-50 px-5 py-3 text-xl font-bold drop-shadow-2xl">
                    Buy $249
                </button>
            </div>
            <img
                className="absolute hidden h-[16rem] sm:block sm:h-[22rem] md:h-[20rem] lg:h-[28rem] xl:h-[33rem] right-10 sm:top-16 md:top-20 lg:top-14 xl:top-12 drop-shadow-2xl"
                src={airpods[airIndex].src}
                alt="not-found"
            />
        </div>
    )
}

export default AirPodsBanner
