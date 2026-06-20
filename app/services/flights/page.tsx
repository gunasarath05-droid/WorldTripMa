import { Button } from "@/components/ui/Button";
import { Plane, CheckCircle2, Zap, Shield, Globe } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domestic & International Flight Ticket Booking Chennai | World Trip",
    description: "Book cheap domestic and international flight tickets with World Trip. We offer the best fares and 24/7 support for all your flight booking needs in Chennai.",
};

export default function FlightsPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-indigo-600 py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Plane className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Domestic & International Flight Ticket Booking</h1>
                    <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
                        Domestic & international flights at the best competitive prices.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Fly Anywhere, Best Price Guaranteed</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We partner with major airlines to bring you exclusive deals on airfare. Whether it's a last-minute business trip or a planned vacation, we've got you covered.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-accent" />
                                    <span className="font-medium">Instant Booking Confirmation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-accent" />
                                    <span className="font-medium">Secure Payment Options</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[300px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                            <Image
                                src="/images/flights-hd.png"
                                alt="Flight Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Domestic Flights", desc: "Seamless domestic travel with instant booking confirmation." },
                            { title: "International Flights", desc: "Best connections and rates for global destinations." },
                            { title: "Group Bookings", desc: "Special discounts for large groups and families." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold font-heading text-lg mb-2 text-indigo-900">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" href="/contact">
                            Request a Quote
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
