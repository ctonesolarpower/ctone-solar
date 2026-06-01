import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
    const { t } = useLanguage();

    return (
        <section id="about-us" className="py-20 md:py-28 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Top Row: Heading and Main Description */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-20 lg:mb-28">
                    <div className="md:w-[20%] lg:w-[15%]">
                        <span className="text-orange-400 font-semibold text-lg md:text-xl">
                            {t('aboutUsTitle')}
                        </span>
                    </div>
                    <div className="md:w-[80%] lg:w-[85%]">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-medium leading-relaxed lg:leading-normal max-w-4xl">
                            {t('aboutUsMainDesc')}
                        </h2>
                    </div>
                </div>

                {/* Bottom Row: Stats, Bottom Text, CTA, and Images */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">

                    {/* Left Column: Stats & Information */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-between">

                        {/* Stats Row */}
                        <div className="flex flex-wrap md:flex-nowrap items-start gap-y-8 mb-16 lg:mb-0">
                            {/* Stat 1 */}
                            <div className="w-1/2 md:w-auto md:flex-1 md:pr-8 md:border-r border-gray-200">
                                <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
                                    500+
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {t('statHappyCustomers')}<br />{t('statCountries')}
                                </p>
                            </div>

                            {/* Stat 2 */}
                            <div className="w-1/2 md:w-auto md:flex-1 px-4 md:px-8 md:border-r border-gray-200">
                                <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
                                    5MW+
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {t('statMegawatts')}
                                </p>
                            </div>

                            {/* Stat 3 */}
                            <div className="w-full md:w-auto md:flex-1 md:pl-8 pt-4 md:pt-0">
                                <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
                                    12Y+
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {t('statWorkingSuccessfully')}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Info & Button */}
                        <div className="mt-8 lg:mt-auto max-w-[420px]">
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                                {t('aboutUsBottomDesc')}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Overlapping Images */}
                    <div className="w-full lg:w-[45%] relative min-h-[450px] lg:min-h-[550px] mt-12 lg:mt-0">
                        {/* Main Background Image */}
                        <div
                            className="absolute right-0 top-0 w-[85%] h-[85%] rounded-[2rem] bg-cover bg-center shadow-lg"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop")' }}
                        >
                            <div className="absolute inset-0 bg-blue-900/10 rounded-[2rem]" />
                        </div>

                        {/* Foreground Overlapping Image */}
                        <div
                            className="absolute left-0 bottom-0 w-[55%] h-[55%] rounded-[2rem] bg-cover bg-center border-[10px] border-white shadow-2xl z-10"
                            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop")' }}
                        >
                            <div className="absolute inset-0 bg-black/10 rounded-xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;