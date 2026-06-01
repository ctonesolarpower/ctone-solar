import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SolarServices = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-24 md:py-32 bg-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100/50 border border-orange-200 mb-6">
                            <svg className="w-4 h-4 text-orange-500 mr-2 animate-[spin_10s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="text-orange-600 font-bold tracking-wider uppercase text-xs md:text-sm">
                                {t('ourSolutions')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            {t('solarSolutions')} <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">{t('forEveryNeed')}</span>
                        </h2>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px] md:auto-rows-[380px]">

                    {/* Card 1: Residential */}
                    <div className="md:col-span-7 group relative rounded-3xl overflow-hidden cursor-default shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop")' }}
                        />
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('residentialSolarSystemsTitle')}</h3>
                            <p className="text-slate-200 font-light max-w-md">
                                {t('residentialSolarSystemsDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Commercial */}
                    <div className="md:col-span-5 group relative rounded-3xl overflow-hidden cursor-default shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=2070&auto=format&fit=crop")' }}
                        />
                        {/* Orange-tinted Gradient Overlay for variety */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-orange-900/30 to-transparent mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end h-full">
                            <div className="w-12 h-12 rounded-full bg-orange-500/80 backdrop-blur-md flex items-center justify-center mb-6 border border-orange-400/50">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('commercialSolarSolutionsTitle')}</h3>
                            <p className="text-slate-200 font-light">
                                {t('commercialSolarSolutionsDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Maintenance */}
                    <div className="md:col-span-5 bg-slate-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:bg-slate-800 transition-colors duration-300 cursor-default shadow-sm border border-slate-800 relative overflow-hidden">
                        {/* Background glowing orb */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />

                        <div>
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-orange-500/50 transition-colors">
                                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{t('solarMaintenance')}</h3>
                            <p className="text-slate-400 font-light">
                                {t('solarMaintenanceDesc')}
                            </p>
                        </div>

                        {/* Read more link */}
                        <div className="mt-8 flex items-center text-sm font-semibold text-orange-400 group-hover:text-orange-300">
                            {t('learnMore')} <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>

                    {/* Card 4: Monitoring */}
                    <div className="md:col-span-7 bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-default border border-slate-200/60 overflow-hidden relative">

                        <div className="flex-1 z-10 relative">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 group-hover:border-blue-200 transition-colors">
                                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('solarMonitoringSupport')}</h3>
                            <p className="text-slate-500 font-light max-w-sm mb-6">
                                {t('solarMonitoringSupportDesc')}
                            </p>
                        </div>

                        {/* Decorative Tech/App UI Graphic */}
                        <div className="w-full md:w-64 h-32 md:h-full bg-slate-50 rounded-2xl border border-slate-100 flex items-end justify-center p-4 relative z-10 overflow-hidden">
                            {/* Mock Chart SVG */}
                            <svg viewBox="0 0 100 50" className="w-full h-full stroke-orange-400 fill-none overflow-visible translate-y-4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M0 40 Q 15 35, 30 20 T 60 25 T 80 10 T 100 15" />
                                <path d="M0 40 Q 15 35, 30 20 T 60 25 T 80 10 T 100 15 L 100 60 L 0 60 Z" className="fill-orange-500/10 stroke-none" />
                                <circle cx="80" cy="10" r="3" className="fill-white stroke-orange-500 stroke-2" />
                            </svg>

                            {/* Floating UI pill */}
                            <div className="absolute top-4 right-4 bg-white shadow-sm border border-slate-100 rounded-lg px-3 py-1.5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-slate-600">{t('online')}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolarServices;