import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = [
        "All",
        "Residential Projects",
        "Commercial Projects",
        "Industrial Projects",
        "Installation Process",
        "Maintenance Services"
    ];

    const categoryKeyMap = {
        "All": "filterAll",
        "Residential Projects": "filterResidential",
        "Commercial Projects": "filterCommercial",
        "Industrial Projects": "filterIndustrial",
        "Installation Process": "filterInstallation",
        "Maintenance Services": "filterMaintenance"
    };

    const titleKeyMap = {
        "Corporate Campus Array": "projectCorporateCampus",
        "Modern Rooftop Integration": "projectModernRooftop",
        "Panel Mounting & Wiring": "projectPanelMounting",
        "Utility-Scale Solar Farm": "projectUtilityScale",
        "Routine System Inspection": "projectRoutineInspection",
        "Suburban Home Setup": "projectSuburbanSetup"
    };

    // Data powered by high quality local assets uploaded in the public folder
    const galleryItems = [
        {
            id: 1,
            category: "Commercial Projects",
            title: "Corporate Campus Array",
            image: "/commercial-solar.png",
            span: "md:col-span-2 md:row-span-2", // Large feature image
        },
        {
            id: 2,
            category: "Residential Projects",
            title: "Modern Rooftop Integration",
            image: "/solar-array.png",
            span: "md:col-span-1 md:row-span-1", // Standard square
        },
        {
            id: 3,
            category: "Installation Process",
            title: "Panel Mounting & Wiring",
            image: "/maintenance.png",
            span: "md:col-span-1 md:row-span-1", // Standard square
        },
        {
            id: 4,
            category: "Industrial Projects",
            title: "Utility-Scale Solar Farm",
            image: "/solar-array.png",
            span: "md:col-span-1 md:row-span-2", // Tall portrait image
        },
        {
            id: 5,
            category: "Maintenance Services",
            title: "Routine System Inspection",
            image: "/maintenance.png",
            span: "md:col-span-1 md:row-span-1", // Standard square
        },
        {
            id: 6,
            category: "Residential Projects",
            title: "Suburban Home Setup",
            image: "/commercial-solar.png",
            span: "md:col-span-2 md:row-span-1", // Wide landscape image
        }
    ];

    const filteredItems = activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <section id="gallery" className="py-24 md:py-32 bg-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4">
                        {t('ourWorkGallery')}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 max-w-3xl leading-tight mb-6">
                        {t('exploreCollection')}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl font-light">
                        {t('galleryDesc')}
                    </p>
                </div>

                {/* Filter Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFilter(category)}
                            className={`
                px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
                ${activeFilter === category
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 translate-y-0'
                                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-800 hover:-translate-y-0.5'
                                }
              `}
                        >
                            {t(categoryKeyMap[category] || category)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={`
                group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm
                ${activeFilter === 'All' ? item.span : 'md:col-span-1 md:row-span-1'} 
                transition-all duration-500 ease-in-out hover:shadow-xl
              `}
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />

                            {/* Glassmorphic Hover Overlay */}
                            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content Reveal on Hover */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-max mb-3">
                                    {t(categoryKeyMap[item.category] || item.category)}
                                </span>
                                <h3 className="text-white text-xl md:text-2xl font-bold flex items-center justify-between">
                                    {t(titleKeyMap[item.title] || item.title)}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;