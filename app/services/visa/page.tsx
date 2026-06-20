import { Button } from "@/components/ui/Button";
import { CheckCircle2, FileText } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Visa Assistance & Services in Chennai | World Trip",
    description: "Get professional visa assistance in Chennai for Tourist, Business, and Student visas. World Trip ensures a hassle-free and high-approval documentation process.",
};

export default function VisaPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-blue-600 py-20 text-center text-white">
                <div className="container mx-auto px-4">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Expert Visa Assistance & Services in Chennai</h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Professional visa documentation and submission support for a hassle-free approval process.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Expert Visa Assistance</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Navigating visa requirements can be complex. At World Trip, our experts handle the documentation, submission, and follow-up, ensuring the highest chances of approval for your visa.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Tourist Visas", "Business Visas", "Student Visas", "Work Permits"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button href="/contact">Start Your Application</Button>
                        </div>
                        <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                            <Image
                                src="/images/visa-hd.png"
                                alt="Expert Visa Assistance"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
