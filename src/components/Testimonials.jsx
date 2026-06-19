import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            textKey: "testimonial1Text",
            nameKey: "testimonial1Name"
        },
        {
            id: 2,
            textKey: "testimonial2Text",
            nameKey: "testimonial2Name"
        },
        {
            id: 3,
            textKey: "testimonial3Text",
            nameKey: "testimonial3Name"
        },
        {
            id: 4,
            textKey: "testimonial4Text",
            nameKey: "testimonial4Name"
        }
    ];

    // Extracted Card component for clean code
    const TestimonialCard = ({ testimonial }) => (
        <div className="bg-slate-50/80 rounded-[1.5rem] p-8 flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div>
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>
                {/* Review Text */}
                <p className="text-slate-600 text-[15px] leading-relaxed italic mb-6 font-medium">
                    "{t(testimonial.textKey)}"
                </p>
            </div>

            {/* Footer / User Info */}
            <div>
                <div className="h-px bg-slate-200/60 w-full mb-5" />
                <div className="flex items-center gap-4">
                    {/* User Vector Icon Silhouette Skeleton */}
                    <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 shadow-inner text-orange-500 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold text-sm tracking-tight">{t(testimonial.nameKey)}</h4>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="testimonials" className="relative py-24 bg-white font-sans overflow-hidden">

            {/* Subtle Background Watermark (bottom right) */}
            <div className="absolute bottom-0 right-0 w-[600px] opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M10 90 L40 50 M40 50 L90 50 M40 50 L20 10 M60 50 L80 10 M30 30 L70 30 M20 70 L65 70" />
                    <path d="M10 90 L90 90 L90 50 M10 90 L10 50 L40 50" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

                    {/* Column 1: Header + Card 1 */}
                    <div className="flex flex-col gap-6 lg:gap-8">
                        {/* Header Block */}
                        <div className="mb-4 lg:mb-8 pr-4">
                            <span className="text-orange-500 font-semibold tracking-wide text-sm mb-4 block">
                                {t('testimonialsTitle')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight mb-8">
                                {t('realResultsFeedback')}
                            </h2>
                        </div>

                        {/* Card 1 */}
                        <TestimonialCard testimonial={testimonials[0]} />
                    </div>

                    {/* Column 2: Cards 2 & 3 */}
                    <div className="flex flex-col gap-6 lg:gap-8 lg:pt-2">
                        <TestimonialCard testimonial={testimonials[1]} />
                        <TestimonialCard testimonial={testimonials[2]} />
                    </div>

                    {/* Column 3: Card 4 */}
                    <div className="flex flex-col gap-6 lg:gap-8 lg:pt-2">
                        <TestimonialCard testimonial={testimonials[3]} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;