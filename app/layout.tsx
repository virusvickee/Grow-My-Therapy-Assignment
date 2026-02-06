import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/QueryProvider";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Anxiety & Trauma Therapy in Santa Monica, CA",
  description: "Compassionate, trauma-informed therapy for adults navigating anxiety, PTSD, and burnout. Licensed clinical psychologist in Santa Monica offering in-person and telehealth sessions.",
  keywords: "anxiety therapy Santa Monica, trauma therapy Santa Monica, PTSD treatment, burnout therapy, licensed psychologist Santa Monica, trauma-informed therapy, adult therapy California",
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
  },
  openGraph: {
    title: "Dr. Maya Reynolds | Anxiety & Trauma Therapy in Santa Monica, CA",
    description: "Compassionate, trauma-informed therapy for adults navigating anxiety, PTSD, and burnout.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds Therapy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
