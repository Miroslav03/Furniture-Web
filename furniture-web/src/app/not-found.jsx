"use client";
import Navigation from "@/components/Layout/Navigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // if using Next.js 13+ with App Router

const NotFoundPage = () => {
  const router = useRouter();

  const goBack = () => {
    // Navigates back to the previous page or to the home page as fallback
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[url('/images/gallery/bg-cover.jpg')] bg-cover bg-center relative">
      {/* Transparent Navigation Bar */}
      <Navigation />

      {/* Background Overlay with fade-in effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0"
      ></motion.div>

      {/* 404 Content */}
      <div className="relative z-[1] container mx-auto px-6 md:px-16 h-screen flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-4xl md:text-7xl font-light text-white mb-4"
        >
          Страницата не е намерена
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
          className="text-md md:text-xl font-light text-white mb-12 text-center max-w-2xl"
        >
          Изглежда, че страницата, която търсите, не съществува или е преместена.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          onClick={goBack}
          className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-md sm:text-lg font-[400] sm:font-medium"
        >
          Върни се назад
        </motion.button>
      </div>
    </div>
  );
};

export default NotFoundPage;
