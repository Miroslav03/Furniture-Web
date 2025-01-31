import { Suspense } from 'react';

export default function GalleryLayout(){
  return (
    <Suspense >
      {children}
    </Suspense>
  );
}