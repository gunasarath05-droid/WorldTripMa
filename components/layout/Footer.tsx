import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
    const getSocialIcon = (label: string) => {
        switch (label) {
            case 'Instagram': return <Instagram className="w-5 h-5" />;
            case 'Facebook': return <Facebook className="w-5 h-5" />;
            case 'LinkedIn': return <Linkedin className="w-5 h-5" />;
            case 'Twitter': return <Twitter className="w-5 h-5" />;
            case 'WhatsApp': return <MessageCircle className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="inline-block mb-0">
                            <Image
                                src="/images/WT_Logo_without_BG.png"
                                alt="World Trip"
                                width={300}
                                height={100}
                                className="h-28 w-auto object-contain"
                                priority
                            />
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Your trusted partner for global travel. We make every journey smooth and stress-free with our premium services.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label === 'WhatsApp' ? "_blank" : undefined}
                                    rel={link.label === 'WhatsApp' ? "noopener noreferrer" : undefined}
                                    className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-colors ${link.label === 'WhatsApp' ? 'hover:bg-[#25D366]' : 'hover:bg-primary'}`}
                                    title={link.label}
                                >
                                    {getSocialIcon(link.label)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Our Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services/visa" className="text-slate-400 hover:text-accent transition-colors">Visa Services</Link></li>
                            <li><Link href="/services/flights" className="text-slate-400 hover:text-accent transition-colors">Flight Tickets</Link></li>
                            <li><Link href="/services/holidays" className="text-slate-400 hover:text-accent transition-colors">Holiday Packages</Link></li>
                            <li><Link href="/services/corporate" className="text-slate-400 hover:text-accent transition-colors">Corporate Travel</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-accent transition-colors">Travel Insurance</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <div className="flex flex-col">
                                    <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
                                    <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone2}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                                <span>{CONTACT_INFO.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-2 text-center text-slate-500 text-sm flex flex-col md:flex-row md:justify-between items-center gap-2">
                    <p>World Trip &copy; 2026. All rights reserved.</p>
                    <p className="mt-2 text-slate-600">Official Website: <a href="https://worldtripmaa.com" className="hover:text-accent transition-colors">WorldTripMaa.com</a></p>
                </div>
            </div>
        </footer>
    );
}
