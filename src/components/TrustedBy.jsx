import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TrustedBy = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 md:py-32 bg-white font-sans">
            {/* Dark themed container for high contrast and modern appeal */}
            <div className="w-full  bg-zinc-950 p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden relative">

                {/* Subtle background glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">

                    {/* Left Column: Typography & Content */}
                    <div className="lg:w-5/12 flex flex-col items-start text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8 shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mr-3 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                            <span className="text-zinc-300 font-semibold tracking-wider uppercase text-xs md:text-sm">
                                {t('trustedAcrossRegion')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
                            {t('helpingHomesBusinesses')} <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                                {t('switchToSolar')}
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-md">
                            {t('trustedDesc')}
                        </p>
                    </div>

                    {/* Right Column: Asymmetrical Bento Grid */}
                    <div className="lg:w-7/12 w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[140px]">

                        {/* Box 1: Residential (Large, accented) */}
                        <div className="col-span-2 row-span-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 flex flex-col justify-end hover:scale-[1.02] transition-transform duration-300 cursor-default shadow-lg shadow-orange-500/20">
                            <span className="text-white font-bold text-xl md:text-2xl tracking-wide">
                                {t('residentialCustomers')}
                            </span>
                        </div>

                        {/* Box 2: Commercial (Tall, dark) */}
                        <div className="col-span-1 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:bg-zinc-800 transition-colors duration-300 cursor-default group">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="text-zinc-300 font-semibold text-lg">
                                {t('commercialProperties')}
                            </span>
                        </div>

                        {/* Box 3: Factories (Small, light accent) */}
                        <div className="col-span-1 row-span-1 bg-zinc-100 rounded-3xl p-6 flex items-end hover:bg-white transition-colors duration-300 cursor-default">
                            <span className="text-zinc-900 font-bold text-lg">
                                {t('factories')}
                            </span>
                        </div>

                        {/* Box 4: Schools (Small, outline) */}
                        <div className="col-span-1 row-span-1 border border-zinc-800 rounded-3xl p-6 flex items-end hover:border-orange-500/50 transition-colors duration-300 cursor-default">
                            <span className="text-zinc-400 font-medium text-lg">
                                {t('schools')}
                            </span>
                        </div>

                        {/* Box 5: Hospitals (Wide, dark) */}
                        <div className="col-span-2 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex items-end hover:border-zinc-700 transition-colors duration-300 cursor-default">
                            <span className="text-zinc-300 font-medium text-lg">
                                {t('hospitals')}
                            </span>
                        </div>

                        {/* Box 6: Warehouses (Wide, subtle accent) */}
                        <div className="col-span-2 md:col-span-2 row-span-1 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-3xl p-6 flex items-center justify-between hover:border-orange-500/30 transition-all duration-300 cursor-default">
                            <span className="text-zinc-200 font-semibold text-xl">
                                {t('warehouses')}
                            </span>
                            <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800">
                                <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;