import { Suspense } from "react";

export default function GalleryLayout({ children }) {
    return <Suspense>{children}</Suspense>;
}
