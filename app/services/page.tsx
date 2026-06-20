import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Plane, Globe, Briefcase, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Travel Services in Chennai | Visa, Flights & Holidays | World Trip",
    description: "Explore the comprehensive travel services offered by World Trip in Chennai. From expert visa assistance and flight bookings to customized holiday packages and corporate travel.",
};

export default function ServicesPage() {
    const services = [
        {
            icon: <FileText className="w-12 h-12 text-blue-600" />,
            title: "Visa Services",
            desc: "Comprehensive visa assistance for all countries. Tourist, business, and student visa handling with expert guidance.",
            link: "/services/visa",
        },
        {
            icon: <Plane className="w-12 h-12 text-indigo-600" />,
            title: "Flight Tickets",
            desc: "Best deals on domestic and international flights. We ensure comfortable connections and competitive pricing.",
            link: "/services/flights",
        },
        {
            icon: <Globe className="w-12 h-12 text-teal-600" />,
            title: "Holiday Packages",
            desc: "Curated holiday experiences tailored to your preferences. Honeymoons, family trips, and adventure tours.",
            link: "/services/holidays",
        },
        {
            icon: <Briefcase className="w-12 h-12 text-slate-700" />,
            title: "Corporate Travel",
            desc: "Efficient travel management for businesses. MICE, flight bookings, and corporate hotel rates.",
            link: "/services/corporate",
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-slate-900 py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto px-4">
                    World-class travel solutions designed for your comfort and convenience.
                </p>
            </div>

            <div className="container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="mb-6 bg-white p-4 rounded-full w-fit shadow-sm">{service.icon}</div>
                            <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">{service.title}</h2>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                            <Link href={service.link}>
                                <Button variant="outline" className="w-full justify-center group">
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
