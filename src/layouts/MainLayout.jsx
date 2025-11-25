// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // تفعيل التمرير السلس الناعم جدًا عند تحميل الصفحة أو تغيير اللغة
  useEffect(() => {
    // تفعيل smooth scroll على مستوى HTML
    document.documentElement.style.scrollBehavior = "smooth";

    // إضافة تمرير سلس مخصص أكثر نعومة وفخامة باستخدام CSS easing مخصص
    const style = document.createElement("style");
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* منحنى حركة فاخر جدًا (أنعم من الـ ease-in-out العادي) */
      @keyframes smoothScroll {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(0);
        }
      }

      /* تطبيق easing مخصص على كل التمرير */
      *, *::before, *::after {
        scroll-behavior: smooth !important;
      }

      /* منحنى نعومة فائق (custom cubic-bezier) – أجمل وأكثر سلاسة من ease-in-out */
      html {
        scroll-padding-top: 90px; /* لتجنب تداخل المحتوى مع الـ Navbar الثابت */
      }

      /* للأجهزة التي لا تدعم scroll-behavior (مثل بعض الموبايلات القديمة) */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
      }
    `;
    document.head.appendChild(style);

    // تنظيف عند إلغاء تحميل المكوّن
    return () => {
      document.documentElement.style.scrollBehavior = "";
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // تمرير سلس عند التنقل بين الصفحات (مهم جدًا عند استخدام React Router)
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // نستمع لتغيير المسار (اختياري إذا كنتِ تستخدمين useLocation)
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      lang={isArabic ? "ar" : "en"}
      className={`min-h-screen flex flex-col font-sans antialiased bg-gradient-to-b from-emerald-50/30 to-white dark:from-gray-900 dark:to-black transition-all duration-1000`}
    >
      {/* Navbar ثابت في الأعلى */}
      <Navbar />

      {/* المحتوى الرئيسي مع حشوة لتجنب التداخل مع الـ Navbar */}
      <main className="flex-grow pt-20 pb-10">
        <Outlet />
      </main>

      {/* Footer + أيقونة واتساب عائمة */}
      <Footer />
    </div>
  );
};

export default MainLayout;