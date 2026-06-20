import { Button } from "@/components/ui/Button";
import { Globe, Map, Umbrella, Sun, Camera, Compass } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best International & Domestic Holiday Packages Chennai | World Trip",
    description: "Explore world-class international and domestic holiday packages from Chennai. World Trip offers customized tours for Dubai, Bali, Maldives, Europe, and more.",
};

export default function HolidaysPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-teal-600 py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">International & Domestic Holiday Packages</h1>
                    <p className="text-lg text-teal-100 max-w-2xl mx-auto">
                        Customized domestic and international holiday packages tailored to your dreams.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                            <Image
                                src="/images/maldives-3220702.jpg"
                                alt="Holiday Packages"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Dream Holidays Made Easy</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                From the beaches of Bali to the mountains of Switzerland, we design holiday packages that match your budget and preferences. Our packages include accommodation, transfers, sightseeing, and meals.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {["Honeymoon Specials", "Family Vacations", "Adventure Tours", "Cultural Trips"].map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button className="bg-teal-600 hover:bg-teal-700 w-fit" href="/contact">
                                Plan My Trip
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
