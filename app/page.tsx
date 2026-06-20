'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Plane, Globe, Briefcase, FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { DestinationScroller } from "@/components/ui/DestinationScroller";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tourist-carrying-luggage.jpg"
            alt="World Trip - Professional Tours and Travels"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 mx-auto shadow-2xl mt-12 md:mt-20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-white/90">Available 24/7 for you</span>
            </div>
          </Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight drop-shadow-lg">
            Your Trusted Partner for <span className="text-accent">Global Travel</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            World Trip delivers professional and reliable travel solutions. From visa assistance to flight bookings and corporate travel management, we make every journey smooth and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="shadow-xl">
                Enquire Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:border-white shadow-xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Why Choose World Trip</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trusted Experts", desc: "Years of experience in handling complex travel requirements." },
              { title: "Fast Processing", desc: "Quick turnaround times for visa and flight bookings." },
              { title: "Affordable Pricing", desc: "Best market rates without compromising on quality." },
              { title: "Premium Experience", desc: "Dedicated support for a seamless travel experience." },
            ].map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                  <CheckCircle2 className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold font-heading text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-4 tracking-tight">
                Top Destinations
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg md:text-xl">
                Explore our most popular travel hotspots across the globe.
              </p>
            </Reveal>
          </div>

          <DestinationScroller />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide professional and personalized travel services designed for comfort, efficiency, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8 text-white" />,
                title: "Visa Services",
                desc: "Professional visa support for tourist, business & student visas.",
                link: "/services/visa",
                bg: "bg-blue-600"
              },
              {
                icon: <Plane className="w-8 h-8 text-white" />,
                title: "Flight Tickets",
                desc: "Domestic & international flights at best prices.",
                link: "/services/flights",
                bg: "bg-indigo-600"
              },
              {
                icon: <Globe className="w-8 h-8 text-white" />,
                title: "Holiday Packages",
                desc: "Customized holiday packages tailored to your dreams.",
                link: "/services/holidays",
                bg: "bg-teal-600"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-white" />,
                title: "Corporate Travel",
                desc: "End-to-end business travel management.",
                link: "/services/corporate",
                bg: "bg-slate-800"
              }
            ].map((service, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                <Link href={service.link} className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border-t-4 border-transparent hover:border-accent">
                    <div className={`h-24 ${service.bg} flex items-center justify-center`}>
                      <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                      <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Start Your Journey?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us handle all your travel needs.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="bg-accent hover:bg-yellow-500 text-white border-none shadow-lg scale-100 hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
