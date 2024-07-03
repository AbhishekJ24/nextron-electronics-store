import React, { useState, useEffect } from 'react';

function AirPodsBanner() {
    const airpods = [
        { src: '/airpods.webp' },
        { src: '/airpods2.webp' },
        { src: '/airpods3.webp' },
        { src: '/airpods4.webp' },
    ];

    const [airIndex, setAirIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAirIndex((prevIndex) => (prevIndex + 1) % airpods.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [airpods.length]);

    return (
        <div className="bg-slate-200 relative h-[26rem] sm:h-[28rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
            <img
                className="h-[16rem] py-4 m-auto sm:hidden drop-shadow-2xl hover:scale-105 transition-transform ease-out hover:opacity-75"
                src={airpods[airIndex].src}
                alt="AirPods"
            />
            <div className="pt-1 sm:hidden text-center">
                <h1 className="text-5xl font-bold drop-shadow-2xl">AirPods Pro</h1>
                <h2 className="text-xl font-semibold drop-shadow-2xl">2nd Generation</h2>
                <button className="mt-2 py-2 px-8 rounded-xl text-sm bg-slate-800 hover:bg-slate-700 transition-colors ease-in text-slate-50 font-semibold">
                    Buy $249
                </button>
            </div>
            <div className="hidden sm:block ml-44 pt-36">
                <h1 className="text-[1.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold drop-shadow-2xl">
                    AirPods Pro
                </h1>
                <h2 className="text-[0.5rem] sm:text-[0.95rem] lg:text-[1.5rem] font-semibold mb-4 drop-shadow-2xl">
                    2nd Generation
                </h2>
                <button className="rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors ease-in text-slate-50 px-6 py-2 text-base font-semibold drop-shadow-2xl">
                    Buy $249
                </button>
            </div>
            <img
                className="absolute hidden h-[13rem] sm:block sm:h-[19rem] md:h-[17rem] lg:h-[25rem] xl:h-[30rem] right-20 sm:top-16 md:top-20 lg:top-14 xl:top-12 drop-shadow-2xl hover:scale-105 transition-transform ease-out hover:opacity-75"
                src={airpods[airIndex].src}
                alt="AirPods"
            />
        </div>
    );
}

export default AirPodsBanner;