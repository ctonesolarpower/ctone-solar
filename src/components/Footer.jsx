import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 text-slate-400 font-sans overflow-hidden">

            {/* ── Solar Grid Lines Background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated solar grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="solar-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#solar-grid)" />
                </svg>

                {/* Large glowing sun orb - top right */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

                {/* Small glowing orb - bottom left */}
                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-400/8 rounded-full blur-[80px]" />

                {/* Solar panel diamond shapes scattered */}
                <svg className="absolute top-12 left-[10%] w-6 h-6 opacity-10 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="4" y="4" width="16" height="16" rx="1" transform="rotate(45 12 12)" />
                    <line x1="12" y1="0" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="24" y2="12" />
                </svg>
                <svg className="absolute top-24 right-[15%] w-4 h-4 opacity-[0.07]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <rect x="4" y="4" width="16" height="16" rx="1" transform="rotate(45 12 12)" />
                </svg>
                <svg className="absolute bottom-32 left-[30%] w-5 h-5 opacity-[0.06]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <rect x="4" y="4" width="16" height="16" rx="1" transform="rotate(45 12 12)" />
                    <line x1="12" y1="0" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="24" y2="12" />
                </svg>
            </div>

            {/* ── Top Accent Line (Solar ray gradient) ── */}
            <div className="relative h-1 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60 blur-sm" />
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-8">

                {/* Top Section: Brand & Solar Icon */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-5">
                            <img src="/ctone-logo.png" alt="CTONE Solar" className="h-20 w-auto object-contain bg-white p-2 rounded-xl border border-slate-200/20 shadow-md" />
                        </div>
                        <p className="text-sm font-light max-w-sm leading-relaxed mb-8">
                            {t('footerBrandDesc')}
                        </p>

                        {/* Solar energy stats mini-bar */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-slate-500 font-medium">Systems Online</span>
                            </div>
                            <div className="h-4 w-px bg-slate-700" />
                            <div className="flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                                <span className="text-xs text-slate-500 font-medium">10,000+ Installations</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 md:col-start-7">
                        <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                            <span className="w-6 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                            {t('quickLinks')}
                        </h4>
                        <ul className="space-y-3.5 text-sm font-light">
                            <li>
                                <a href="#home" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('home')}
                                </a>
                            </li>
                            <li>
                                <a href="#about-us" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('aboutUs')}
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('projects')}
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('gallery')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                            <span className="w-6 h-px bg-gradient-to-r from-orange-500 to-transparent" />
                            {t('support')}
                        </h4>
                        <ul className="space-y-3.5 text-sm font-light">
                            <li>
                                <a href="#contact-us" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('contactUs')}
                                </a>
                            </li>
                            <li>
                                <a href="#contact-us" className="group flex items-center gap-2 hover:text-orange-400 transition-colors duration-300">
                                    <span className="w-0 group-hover:w-3 h-px bg-orange-500 transition-all duration-300" />
                                    {t('getQuote')}
                                </a>
                            </li>
                        </ul>

                        {/* Phone Numbers */}
                        <div className="mt-6 space-y-3">
                            <a href="tel:+917041455045" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors duration-300 group">
                                <svg className="w-4 h-4 text-orange-500/70 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm font-medium">+91 70414 55045</span>
                            </a>
                            <a href="tel:+916358304071" className="flex items-center gap-2.5 hover:text-orange-400 transition-colors duration-300 group">
                                <svg className="w-4 h-4 text-orange-500/70 group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm font-medium">+91 63583 04071</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* ── Decorative Solar Panel Row ── */}
                <div className="relative mb-12">
                    <div className="flex items-center gap-4">
                        {/* Repeating solar panel cells */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 h-8 rounded-md border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500"
                            >
                                {/* Grid lines inside each panel cell */}
                                <div className="absolute inset-0 flex">
                                    <div className="flex-1 border-r border-slate-700/30" />
                                    <div className="flex-1" />
                                </div>
                                <div className="absolute inset-0 flex flex-col">
                                    <div className="flex-1 border-b border-slate-700/30" />
                                    <div className="flex-1" />
                                </div>
                                {/* Subtle shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" 
                                     style={{ transition: 'opacity 0.7s, transform 1.2s' }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Connecting wire line */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-500/30" />
                        <div className="w-2 h-2 rounded-full border border-orange-500/40 bg-orange-500/10" />
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-500/30" />
                    </div>
                </div>

                {/* ── Bottom Bar: Copyright & Developer Credit ── */}
                <div className="border-t border-slate-800/60 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
                        <p className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-orange-500/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                            </svg>
                            &copy; {currentYear} {t('brand')}. {t('footerAllRightsReserved')}
                        </p>

                        <p className="flex items-center gap-1.5">
                            {t('developedBy')}
                            <a
                                href="https://www.visiontechx.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 font-bold hover:text-orange-400 transition-colors tracking-wide relative group"
                            >
                                Vision TechX
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-orange-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        </p>
                    </div>
                </div>

            </div>

            {/* ── Bottom Glow Line ── */}
            <div className="relative h-px w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            </div>

        </footer>
    );
};

export default Footer;