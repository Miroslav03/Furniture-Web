import { Suspense } from "react";

export const metadata = {
    title: "Raev Design | За нас",
    description: "Научете повече за Raev Design – нашата история, философия и ангажимент към качеството в изработката на дървени мебели.",
    openGraph: {
        title: "Raev Design | За нас",
        description: "Открийте мисията и ценностите на Raev Design, водещ бранд за ръчно изработени дървени мебели.",
        url: "https://www.raevdesign.com/za-nas",
        type: "website"
    }
};

export default function AboutLayout({ children }) {
    return <Suspense>{children}</Suspense>;
}
