import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SolarLanding = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div id="home" className="min-h-screen bg-white p-4 font-sans animate-fade-in">

            {/* --- NAVIGATION COMPONENT --- */}
            <nav className="flex items-center justify-between py-2 max-w-7xl mx-auto mb-4 relative">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-orange-500 cursor-pointer hover:scale-105 transition-transform duration-300">
                    {t('brand')}
                </a>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-gray-600 font-semibold text-sm">
                    <li><a href="#home" className="hover:text-orange-500 transition-colors duration-300">{t('home')}</a></li>
                    <li><a href="#about-us" className="hover:text-orange-500 transition-colors duration-300">{t('aboutUs')}</a></li>
                    <li><a href="#services" className="hover:text-orange-500 transition-colors duration-300">{t('projects')}</a></li>
                    <li><a href="#gallery" className="hover:text-orange-500 transition-colors duration-300">{t('gallery')}</a></li>
                    <li><a href="#testimonials" className="hover:text-orange-500 transition-colors duration-300">{t('happyCustomers')}</a></li>
                    <li><a href="#testimonials" className="hover:text-orange-500 transition-colors duration-300">{t('reviews')}</a></li>
                    <li><a href="#contact-us" className="hover:text-orange-500 transition-colors duration-300">{t('contactUs')}</a></li>
                </ul>

                {/* Language Toggle, CTA Button & Hamburger */}
                <div className="flex items-center gap-3">
                    {/* Premium Sliding Toggle Switch */}
                    <div 
                        onClick={toggleLanguage}
                        className="relative w-20 h-9 bg-gray-100 border border-gray-200/80 rounded-full p-1 flex items-center justify-between cursor-pointer select-none transition-all duration-300 shadow-inner"
                        title={language === 'en' ? 'Switch to Gujarati / ગુજરાતીમાં બદલો' : 'Switch to English / અંગ્રેજીમાં બદલો'}
                    >
                        {/* Smooth sliding backdrop */}
                        <div 
                            className={`absolute top-1 bottom-1 w-[46%] rounded-full bg-orange-500 shadow-md shadow-orange-500/30 transition-all duration-300 ease-out ${
                                language === 'en' ? 'left-1' : 'left-[50%]'
                            }`}
                        />
                        
                        {/* Labels */}
                        <span className={`z-10 text-[10px] font-bold tracking-wider pl-2.5 transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                            EN
                        </span>
                        <span className={`z-10 text-[10px] font-bold tracking-wider pr-2.5 transition-colors duration-300 ${language === 'gu' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                            ગુ
                        </span>
                    </div>

                    {/* Desktop CTA Button */}
                    <a href="#contact-us" className="hidden lg:block bg-gray-900 text-white px-7 py-2.5 rounded-full hover:bg-gray-800 transition-all hover:scale-105 duration-300 font-semibold text-sm shadow-md">
                        {t('getQuote')}
                    </a>

                    {/* Mobile Hamburger Icon */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-gray-700 hover:text-orange-500 focus:outline-none p-1.5 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div 
                className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden z-50 relative ${
                    isMobileMenuOpen ? 'max-h-[440px] opacity-100 mb-4' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
            >
                <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-6 shadow-2xl flex flex-col gap-5">
                    <ul className="flex flex-col gap-4 text-gray-600 font-semibold text-sm">
                        <li>
                            <a 
                                href="#home" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('home')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about-us" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('aboutUs')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#services" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('projects')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#gallery" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('gallery')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#testimonials" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('happyCustomers')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#testimonials" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('reviews')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact-us" 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block hover:text-orange-500 py-1 transition-colors duration-200"
                            >
                                {t('contactUs')}
                            </a>
                        </li>
                    </ul>
                    
                    {/* Mobile CTA inside Drawer */}
                    <a 
                        href="#contact-us"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-2xl transition-all duration-350 font-bold text-sm shadow-lg shadow-orange-500/25 block"
                    >
                        {t('getQuote')}
                    </a>
                </div>
            </div>

            {/* --- HERO SECTION COMPONENT --- */}
            <main className="relative w-full max-w-7xl mx-auto rounded-[2rem] overflow-hidden min-h-[80vh] flex items-center justify-center p-6 md:p-12 lg:p-24 shadow-2xl">

                {/* Background Layer with Dark Overlay for Text Readability */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop")' }}
                />
                <div className="absolute inset-0 z-0 bg-blue-900/30 mix-blend-multiply" />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/40" />

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full mt-8">
                    <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-6 drop-shadow-md">
                        {t('cleanEnergySolutions')}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-6">
                        {t('powerYourHome')} <br className="hidden md:block" /> {t('smartSolarEnergy')}
                    </h1>

                    <p className="text-base md:text-lg text-gray-100 max-w-2xl mb-10 leading-relaxed font-light drop-shadow-sm">
                        {t('heroDesc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a href="#contact-us" className="bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold text-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/40 hover:-translate-y-0.5 cursor-pointer">
                            {t('getFreeQuote')}
                        </a>
                        <a href="#gallery" className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3.5 rounded-full font-bold text-center hover:bg-white/20 transition-all hover:-translate-y-0.5 cursor-pointer">
                            {t('exploreProjects')}
                        </a>
                    </div>
                </div>

                {/* Floating Card 1: Bottom Left */}
                <div className="hidden lg:flex absolute bottom-12 left-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl items-center gap-4 max-w-[340px]">
                    <img
                        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
                        alt="Solar Installation"
                        className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1.5">
                            {t('saveMoreEveryMonth')}
                        </h4>
                        <p className="text-[11px] text-gray-500 leading-relaxed pr-2">
                            {t('efficientSolarSystems')}
                        </p>
                    </div>
                </div>

                {/* Floating Card 2: Right Side Stats */}
                <div className="hidden lg:block absolute top-2/3 right-10 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-3xl p-7 shadow-2xl min-w-[260px]">
                    <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">{t('solarUnitsInstalled')}</p>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">10,000+</h3>

                    {/* Decorative Sparkline SVG Chart */}
                    <div className="relative h-14 w-full mb-4">
                        <svg viewBox="0 0 100 40" className="w-full h-full stroke-orange-400 fill-none overflow-visible" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 30 Q 15 25, 30 32 T 60 15 T 100 5" />
                            <circle cx="100" cy="5" r="4" className="fill-orange-500 stroke-white stroke-2" />
                        </svg>
                    </div>

                    <div className="flex items-center gap-2 text-sm pt-2 border-t border-gray-100">
                        <span className="text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded-md">+35%</span>
                        <span className="text-gray-500 font-medium">{t('thisYear')}</span>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default SolarLanding;