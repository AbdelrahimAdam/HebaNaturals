// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // تفعيل التمرير السلس + ضبط الخط العربي الحديث بدقة عالية
  useEffect(() => {
    // تفعيل smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // إضافة CSS مخصص للخط + التم10رير + تحسين الـ rendering
    const style = document.createElement("style");
    style.textContent = `
      /* أجمل خط عربي عصري في 2025 – Cairo */
      body, html {
        font-family: 'Cairo', 'Geeza Pro', 'Noto Sans Arabic', system-ui, -apple-system, sans-serif !important;
        font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: -0.02em;
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
      }

      /* تحسين وضوح النصوص العربية */
      h1, h2, h3, h4, h5, h6, .font-bold, .font-black {
        font-weight: 800;
        letter-spacing: -0.04em;
      }

      p, span, div, li, a {
        line-height: 1.85;
        letter-spacing: -0.01em;
      }

      /* تحسين الخط على الشاشات عالية الكثافة (مثل آيفون ريتنا) */
      @supports (-webkit-touch-callout: none) {
        body {
          -webkit-text-stroke: 0.5px transparent;
        }
      }

      /* تمرير سلس فائق النعومة */
      *, *::before, *::after {
        scroll-behavior: smooth !important;
      }

      /* دعم prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  // تمرير سلس للأعلى عند تغيير الصفحة
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
      className={`
        min-h-screen flex flex-col
        bg-gradient-to-b from-emerald-50/40 via-white to-teal-50/30
        dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950
        text-gray-800 dark:text-gray-100
        antialiased
        transition-all duration-1000
      `}
      style={{
        fontFamily: "'Cairo', 'Geeza Pro', 'Noto Sans Arabic', system-ui, sans-serif",
      }}
    >
      <Navbar />

      <main className="flex-grow pt-20 pb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;