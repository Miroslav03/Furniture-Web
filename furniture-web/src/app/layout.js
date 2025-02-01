import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Raev Design | Елегантни дървени мебели",
    description: "Открийте уникални дървени мебели от Raev Design – ръчно изработени с внимание към детайла. Качество, стил и издръжливост за вашето жилище.",
    keywords: "Raev Design, дървени мебели, мебели за дома, ръчно изработени мебели, качествени мебели",
    author: "Raev Design",
    openGraph: {
        title: "Raev Design | Елегантни дървени мебели",
        description: "Най-добрите ръчно изработени мебели от естествено дърво за вашия дом и офис.",
        type: "website",
        url: "https://www.raevdesign.com",
        image: "https://www.raevdesign.com/favicon.ico"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="bg">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
