import { Suspense } from "react";

export const metadata = {
    title: "Raev Design | Галерия",
    description: "Разгледайте нашата галерия от ръчно изработени дървени мебели и интериорни решения.",
    openGraph: {
        title: "Raev Design | Галерия",
        description: "Открийте вдъхновение в нашата галерия с качествени дървени мебели.",
        url: "https://www.raevdesign.com/galeria",
        type: "website"
    }
};

export default function GalleryLayout({ children }) {
    return <Suspense>{children}</Suspense>;
}
