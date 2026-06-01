import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhySolar = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 md:py-28 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="text-orange-400 font-medium tracking-wide text-sm md:text-base mb-4">
                        {t('moreEnergySavings')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] tracking-tight">
                        {t('experienceFutureSolar')}
                    </h2>
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

                    {/* Card 1: Featured Image Card */}
                    <div className="group relative rounded-[2rem] overflow-hidden min-h-[400px] flex flex-col justify-between p-8 md:p-10 shadow-lg cursor-default">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop")' }}
                        />
                        {/* Gradient Overlays for Readability */}
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-blue-900/80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent" />

                        {/* Top Content */}
                        <div className="relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight max-w-[220px]">
                                {t('makingEverythingNiro')}
                            </h3>
                        </div>

                        {/* Bottom Content & Gauge Graphic */}
                        <div className="relative z-10 flex items-end justify-between w-full mt-12">
                            <div>
                                <p className="text-white/80 text-sm mb-1 font-medium tracking-wide">{t('save')}</p>
                                <p className="text-white text-2xl font-bold">$10 B</p>
                            </div>

                            {/* Decorative Speed/Power Gauge SVG */}
                            <div className="w-24 h-24 text-white/60 relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                                    {/* Outer Dashed Track */}
                                    <path d="M 15 80 A 45 45 0 1 1 85 80" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
                                    {/* Inner Solid Track */}
                                    <path d="M 25 75 A 35 35 0 1 1 75 75" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                                    {/* Active Value Arc */}
                                    <path d="M 25 75 A 35 35 0 0 1 75 25" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                    {/* Needle Pointer */}
                                    <circle cx="50" cy="50" r="4" fill="white" />
                                    <line x1="50" y1="50" x2="70" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Sustainable Energy */}
                    <div className="bg-white rounded-[2rem] border border-gray-200/80 p-8 md:p-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300 cursor-default">
                        {/* Orange Icon (Sun/Leaf Theme) */}
                        <div className="mb-8">
                            <svg className="w-10 h-10 text-orange-400 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" className="text-orange-200" />
                            </svg>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                            {t('solarBestProduction')}
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                            {t('solarBestProductionDesc')}
                        </p>
                    </div>

                    {/* Card 3: High Return On Investment */}
                    <div className="bg-white rounded-[2rem] border border-gray-200/80 p-8 md:p-10 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300 cursor-default">
                        {/* Orange Icon (Building/House Theme) */}
                        <div className="mb-8">
                            <svg className="w-10 h-10 text-orange-400 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12" className="text-orange-200" />
                            </svg>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                            {t('buildingBetterFuture')}
                        </h3>

                        <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
                            {t('buildingBetterFutureDesc')}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhySolar;