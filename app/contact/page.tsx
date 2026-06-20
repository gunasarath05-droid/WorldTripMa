'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { PhoneInput, defaultCountries, parseCountry } from 'react-international-phone';
import 'react-international-phone/style.css';

import { CONTACT_INFO } from "@/lib/constants";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        country: '',
        passengers: '',
        destination: '',
        travelDate: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage(''); // Clear previous errors

        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setStatus('success');
                setErrorMessage('');
                setFormData({
                    name: '', email: '', phone: '', subject: '', message: '',
                    country: '', passengers: '', destination: '', travelDate: ''
                });
                // Reset status after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('An unexpected error occurred. Please try again or call us.');
        }
    };

    const allCountries = [
        ...defaultCountries.map(c => {
            const country = parseCountry(c);
            return {
                name: country.name,
                iso2: country.iso2,
                flag: `https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`
            };
        }).sort((a, b) => a.name.localeCompare(b.name)),
        { name: 'Other', iso2: 'other', flag: '' }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filteredCountries = allCountries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="relative py-24 text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tourist-carrying-luggage.jpg"
                        alt="Contact World Trip"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 drop-shadow-lg">Contact Us</h1>
                    <p className="text-lg text-blue-50 max-w-2xl mx-auto drop-shadow-md">
                        We are here to help you. Reach out to us for any travel related queries and let us plan your next journey together.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-600 mb-2">Mon-Sat from 9am to 8pm</p>
                                    <div className="flex flex-col gap-1 font-medium text-lg">
                                        <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phone1}</a>
                                        <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-primary transition-colors">{CONTACT_INFO.phone2}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600 mb-2">Our team will respond within 24 hours</p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-lg hover:text-primary transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="bg-white p-3 rounded-full text-primary shadow-sm">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-heading text-gray-900 mb-1">Visit Us</h3>
                                    <p className="font-medium text-lg min-h-[50px]">
                                        {CONTACT_INFO.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">Send Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                <PhoneInput
                                    defaultCountry="in"
                                    value={formData.phone}
                                    onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                                    className="w-full"
                                    inputClassName="!w-full !h-[50px] !px-4 !py-3 !rounded-r-lg !border-gray-300 !focus:ring-2 !focus:ring-primary !focus:border-transparent !outline-none !transition-all !text-base !font-sans"
                                    countrySelectorStyleProps={{
                                        buttonClassName: "!h-[50px] !px-3 !rounded-l-lg !border-gray-300 !border-r-0 !bg-slate-50",
                                        buttonContentWrapperClassName: "!h-full",
                                        flagClassName: "!w-6"
                                    }}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange} // Corrected: select uses the same handler
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select a topic</option>
                                    <option value="Visa">Visa Enquiry</option>
                                    <option value="Flights">Flight Tickets</option>
                                    <option value="Holidays">Holiday Packages</option>
                                    <option value="Corporate">Corporate Travel</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Dynamic Fields */}
                            {(formData.subject === 'Visa' || formData.subject === 'Flights') && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="country" className="text-sm font-medium text-gray-700">Country</label>
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    className="w-full px-4 py-3 pl-12 pr-10 text-left rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white flex items-center gap-3 h-[50px]"
                                                >
                                                    {formData.country && formData.country !== 'Other' && (
                                                        <img
                                                            src={allCountries.find(c => c.name === formData.country)?.flag}
                                                            alt=""
                                                            className="w-6 h-auto rounded-sm absolute left-3 top-1/2 -translate-y-1/2"
                                                        />
                                                    )}
                                                    <span className={`${!formData.country ? 'text-gray-400' : 'text-gray-900'}`}>
                                                        {formData.country || 'Select Country'}
                                                    </span>
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l pl-2 border-gray-200">
                                                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {isOpen && (
                                                    <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                        <div className="p-2 border-b border-gray-100 sticky top-0 bg-white">
                                                            <input
                                                                type="text"
                                                                placeholder="Search country..."
                                                                value={search}
                                                                onChange={(e) => setSearch(e.target.value)}
                                                                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border-none focus:ring-1 focus:ring-primary outline-none"
                                                                autoFocus
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </div>
                                                        <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                                                            {filteredCountries.map(c => (
                                                                <button
                                                                    key={c.iso2}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setFormData(prev => ({ ...prev, country: c.name }));
                                                                        setIsOpen(false);
                                                                        setSearch('');
                                                                    }}
                                                                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors border-b border-gray-50 last:border-none"
                                                                >
                                                                    {c.flag ? (
                                                                        <img src={c.flag} alt="" className="w-5 h-auto rounded-sm flex-shrink-0" />
                                                                    ) : (
                                                                        <div className="w-5" />
                                                                    )}
                                                                    <span className="font-medium text-gray-700">{c.name}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="passengers" className="text-sm font-medium text-gray-700">No. of Passengers</label>
                                            <input
                                                type="number"
                                                id="passengers"
                                                name="passengers"
                                                min="1"
                                                required
                                                value={formData.passengers}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="1"
                                            />
                                        </div>
                                    </div>

                                    {formData.country === 'Other' && (
                                        <div className="space-y-2 animate-in slide-in-from-top-1">
                                            <label htmlFor="customCountry" className="text-sm font-medium text-gray-700">Enter Your Country</label>
                                            <input
                                                type="text"
                                                id="customCountry"
                                                name="country" // Sync back to formData.country
                                                required
                                                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="Type your country name..."
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {formData.subject === 'Holidays' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-top-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="destination" className="text-sm font-medium text-gray-700">Destination</label>
                                            <input
                                                type="text"
                                                id="destination"
                                                name="destination"
                                                required
                                                value={formData.destination}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="e.g. Switzerland, Dubai"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="travelDate" className="text-sm font-medium text-gray-700">Travel Date</label>
                                            <input
                                                type="date"
                                                id="travelDate"
                                                name="travelDate"
                                                required
                                                value={formData.travelDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="passengers" className="text-sm font-medium text-gray-700">No. of Passengers</label>
                                        <input
                                            type="number"
                                            id="passengers"
                                            name="passengers"
                                            min="1"
                                            required
                                            value={formData.passengers}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="2"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full" size="lg" isLoading={status === 'loading'}>
                                Send Message
                            </Button>

                            {status === 'success' && (
                                <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                                    <CheckCircle className="w-5 h-5" />
                                    <p>Thank you for contacting World Trip. Our team will connect with you shortly.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
