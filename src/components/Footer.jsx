import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Top Section: Brand & Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 border-b border-slate-800 pb-12">

                     {/* Brand Column */}
                     <div className="md:col-span-2">
                         <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                             {t('brand')}
                         </h3>
                         <p className="text-sm font-light max-w-sm leading-relaxed">
                             {t('footerBrandDesc')}
                         </p>
                     </div>

                     {/* Quick Links */}
                     <div>
                         <h4 className="text-white font-semibold mb-5">{t('quickLinks')}</h4>
                         <ul className="space-y-3 text-sm font-light">
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('home')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('aboutUs')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('projects')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('gallery')}</a></li>
                         </ul>
                     </div>

                     {/* Support / Contact */}
                     <div>
                         <h4 className="text-white font-semibold mb-5">{t('support')}</h4>
                         <ul className="space-y-3 text-sm font-light">
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('contactUs')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('getQuote')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('privacyPolicy')}</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">{t('termsOfService')}</a></li>
                         </ul>
                     </div>

                </div>

                {/* Bottom Bar: Copyright & Developer Credit */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
                    <p>
                        &copy; {currentYear} {t('brand')}. {t('footerAllRightsReserved')}
                    </p>

                    <p className="flex items-center gap-1.5">
                        {t('developedBy')}
                        <a
                            href="https://www.visiontechx.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 font-bold hover:text-orange-400 transition-colors tracking-wide"
                        >
                            Vision TechX
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;