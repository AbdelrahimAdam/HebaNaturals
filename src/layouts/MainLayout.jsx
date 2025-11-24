// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsButton from "../components/ContactUsButton";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      lang={i18n.language}
      className={`
        min-h-screen flex flex-col
        bg-gradient-to-b from-emerald-50 via-white to-teal-50
        dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950
        ${isArabic ? "font-arabic" : "font-sans"}
        text-gray-800 dark:text-gray-100
      `}
    >
      {/* خلفية بسيطة وثابتة فقط (لا حركة، لا blur، لا motion) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-900/5 via-transparent to-cyan-900/5 pointer-events-none" />

      {/* Navbar ثابت في الأعلى */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
        <Navbar />
      </div>

      {/* المحتوى الرئيسي */}
      <main className="flex-grow pt-24 pb-16">
        <Outlet />
      </main>

      {/* الفوتر */}
      <Footer />

      {/* زر التواصل العائم (سريع وخفيف) */}
      <ContactUsButton />
    </div>
  );
};

export default MainLayout;