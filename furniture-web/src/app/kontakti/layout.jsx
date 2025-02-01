import { Suspense } from "react";

export const metadata = {
    title: "Raev Design | Контакти",
    description: "Свържете се с Raev Design за запитвания, поръчки и информация относно нашите дървени мебели.",
    openGraph: {
        title: "Raev Design | Контакти",
        description: "Официалните контакти на Raev Design за вашите запитвания и поръчки.",
        url: "https://www.raevdesign.com/kontakti",
        type: "website"
    }
};

export default function ContactLayout({ children }) {
    return <Suspense>{children}</Suspense>;
}