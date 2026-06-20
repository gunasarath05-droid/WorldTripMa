import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Best Travel Agency in Chennai | World Trip",
    description: "Reach out to World Trip, the best tours and travel agency in Chennai. Contact us for visa enquiries, flight ticket bookings, and custom holiday packages.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
