import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            text: "Our electricity bills dropped significantly after installation. The entire process was smooth and professional.",
            name: "Sarah Livingston",
            role: "Prof. contractor",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 2,
            text: "Excellent service from consultation to commissioning. Highly recommended.",
            name: "David Chen",
            role: "Business Owner",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 3,
            text: "The team delivered exactly what they promised. Great support and quality work.",
            name: "Marcus Johnson",
            role: "Homeowner",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
        },
        {
            id: 4,
            text: "We recovered our investment faster than expected. Very satisfied with the results.",
            name: "Emily Carter",
            role: "Operations Manager",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
        }
    ];

    const textKeyMap = {
        "Our electricity bills dropped significantly after installation. The entire process was smooth and professional.": "testimonial1Text",
        "Excellent service from consultation to commissioning. Highly recommended.": "testimonial2Text",
        "The team delivered exactly what they promised. Great support and quality work.": "testimonial3Text",
        "We recovered our investment faster than expected. Very satisfied with the results.": "testimonial4Text"
    };

    const roleKeyMap = {
        "Prof. contractor": "testimonial1Role",
        "Business Owner": "testimonial2Role",
        "Homeowner": "testimonial3Role",
        "Operations Manager": "testimonial4Role"
    };

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
                    "{t(textKeyMap[testimonial.text] || testimonial.text)}"
                </p>
            </div>

            {/* Footer / User Info */}
            <div>
                <div className="h-px bg-slate-200/60 w-full mb-5" />
                <div className="flex items-center gap-4">
                    <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                        <h4 className="text-slate-900 font-bold text-sm tracking-tight">{testimonial.name}</h4>
                        <p className="text-slate-400 text-xs font-medium">{t(roleKeyMap[testimonial.role] || testimonial.role)}</p>
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