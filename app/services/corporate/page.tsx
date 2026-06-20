import { Button } from "@/components/ui/Button";
import { Briefcase, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Corporate Travel Management Services Chennai | World Trip",
    description: "World Trip provides end-to-end corporate travel management for businesses in Chennai. Expert solutions for flights, hotels, and travel expense management.",
};

export default function CorporatePage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-slate-800 py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Corporate Travel Management Solutions</h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        End-to-end business travel management solutions for seamless corporate journeys.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/hero-premium.png"
                                alt="Corporate Travel Solutions"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Why Partner With Us?</h2>
                            <div className="space-y-6">
                                <div className="p-6 border border-slate-200 rounded-xl hover:border-primary transition-colors bg-slate-50">
                                    <div className="flex items-center gap-4 mb-2">
                                        <Building2 className="w-6 h-6 text-primary" />
                                        <h3 className="text-xl font-bold">Cost Optimization</h3>
                                    </div>
                                    <p className="text-gray-600">Analysing your travel spend to provide the most cost-effective routes and rates.</p>
                                </div>
                                <div className="p-6 border border-slate-200 rounded-xl hover:border-primary transition-colors bg-slate-50">
                                    <div className="flex items-center gap-4 mb-2">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                        <h3 className="text-xl font-bold">Policy Compliance</h3>
                                    </div>
                                    <p className="text-gray-600">Ensuring all bookings adhere to your company's travel policies and approvals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold font-heading mb-4">Ready to upgrade your corporate travel?</h3>
                        <p className="text-gray-600 mb-8">Contact us to discuss a tailored corporate travel agreement.</p>
                        <Button size="lg" href="/contact">Contact Our Corporate Desk</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
