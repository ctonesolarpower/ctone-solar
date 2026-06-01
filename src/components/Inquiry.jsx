import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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

                        <p className="text-slate-500 text-lg md:text-xl font-light max-w-md mb-12 leading-relaxed">
                            {t('inquiryDesc')}
                        </p>

                        {/* Aesthetic Floating Image Card */}
                        <div className="relative w-full max-w-sm rounded-[2rem] p-4 bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]  hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                                alt="Solar Panel Installation"
                                className="w-full h-48 object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">

                            {/* Subtle top gradient accent */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-amber-300" />

                            <form className="space-y-6">

                                {/* 2-Column Grid for shorter inputs */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">{t('emailAddress')}</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">{t('city')}</label>
                                        <input
                                            type="text"
                                            placeholder="Your City"
                                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Dropdowns */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Property Type */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">{t('propertyType')}</label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer">
                                                <option value="" disabled selected>{t('selectPropertyType')}</option>
                                                <option value="residential">{t('optResidential')}</option>
                                                <option value="commercial">{t('optCommercial')}</option>
                                                <option value="industrial">{t('optIndustrial')}</option>
                                            </select>
                                            {/* Custom dropdown arrow */}
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Monthly Bill */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">{t('monthlyElectricityBill')}</label>
                                        <div className="relative">
                                            <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none cursor-pointer">
                                                <option value="" disabled selected>{t('selectAverageBill')}</option>
                                                <option value="under100">{t('optUnder100')}</option>
                                                <option value="100to200">{t('opt100to200')}</option>
                                                <option value="200to300">{t('opt200to300')}</option>
                                                <option value="over300">{t('optOver300')}</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 ml-1">{t('message')}</label>
                                    <textarea
                                        rows="4"
                                        placeholder={t('tellUsNeeds')}
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all placeholder:text-slate-400 resize-none"
                                    ></textarea>
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