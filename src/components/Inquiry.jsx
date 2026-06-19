import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const GUJARAT_CITIES = [
    'Ahmedabad', 'Amreli', 'Anand', 'Modasa', 'Palanpur', 'Bharuch',
    'Bhavnagar', 'Botad', 'Chhota Udaipur', 'Dahod', 'Ahwa', 'Khambhalia',
    'Gandhinagar', 'Veraval', 'Jamnagar', 'Junagadh', 'Bhuj', 'Nadiad',
    'Lunavada', 'Mehsana', 'Morbi', 'Rajpipla', 'Navsari', 'Godhra',
    'Patan', 'Porbandar', 'Rajkot', 'Himmatnagar', 'Surat', 'Surendranagar',
    'Vyara', 'Vadodara'
];

const Inquiry = () => {
    const { t } = useLanguage();

    return (
        <section id="contact-us" className="relative py-24 md:py-32 bg-slate-50 font-sans overflow-hidden mb-8">

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 rounded-l-[4rem] hidden lg:block" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">

                    {/* Left Column: Content & Image */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 w-max">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mr-2.5 animate-pulse"></span>
                            <span className="text-slate-700 font-bold tracking-wider uppercase text-xs md:text-sm">
                                {t('freeConsultation')}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                            {t('readyToSwitch')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                                {t('toSolar')}
                            </span>
                        </h2>

                        <p className="text-slate-500 text-lg md:text-xl font-light max-w-md mb-8 leading-relaxed">
                            {t('inquiryDesc')}
                        </p>

                        {/* Phone Numbers */}
                        <div className="flex flex-col gap-3 mb-8">
                            <a href="tel:+917041455045" className="inline-flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                                    <svg className="w-4.5 h-4.5 text-orange-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-base">+91 70414 55045</span>
                            </a>
                            <a href="tel:+916358304071" className="inline-flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                                    <svg className="w-4.5 h-4.5 text-orange-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-base">+91 63583 04071</span>
                            </a>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="relative w-full max-w-md rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-200 hidden md:block">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3692.218355548208!2d70.70625807506836!3d22.269716979708612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE2JzExLjAiTiA3MMKwNDInMzEuOCJF!5e0!3m2!1sen!2sin!4v1781889926743!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CTONE Solar Location"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">

                            {/* Subtle top gradient accent */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-300" />

                            <form className="space-y-6">

                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">{t('fullName')}</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">{t('phoneNumber')}</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                    />
                                </div>

                                {/* City Dropdown */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">{t('city')}</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer">
                                            <option value="" disabled selected>{t('selectCity')}</option>
                                            {GUJARAT_CITIES.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                        {/* Custom dropdown arrow */}
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 mt-4 flex items-center justify-center gap-2 group cursor-pointer"
                                >
                                    {t('requestFreeQuote')}
                                    <svg className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                <p className="text-center text-slate-400 text-xs mt-4">
                                    {t('privacyAgreement')}
                                </p>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Inquiry;