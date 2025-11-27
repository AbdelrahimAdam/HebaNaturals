// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLeaf, FaHeart, FaShoppingBag, FaComments } from "react-icons/fa";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
const Home = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>هبه ناتشورالز | منتجات علاجيه طبيعيه بإشراف د/ مواهب مهاجر</title>
        <meta
          name="description"
          content="منتجات علاجية طبيعيه 100% للشعر الأفريقي والمجعد من أجود الأعشاب الأيورفيديه والسودانيه."
        />
        <meta property="og:image" content="/img/products/hebaBrand.jpeg" />
      </Helmet>
      <main className="bg-gradient-to-br from-emerald-50 via-teal-50/70 to-cyan-100/80 dark:from-emerald-950 dark:via-teal-950/90 dark:to-cyan-900/80 min-h-screen">
        {/* HERO SECTION */}
        <section
          className="relative py-24 md:py-32 lg:py-40 overflow-hidden text-white"
          style={{
            backgroundImage: `url('/img/products/hebaBrand.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-black/85 to-teal-900/95" />
          {/* أوراق الشجر المتساقطة */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-emerald-300"
                initial={{ y: -200 }}
                animate={{ y: 1600 }}
                transition={{
                  duration: 20 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  fontSize: "2.5rem",
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                <FaLeaf />
              </motion.div>
            ))}
          </div>
          <div className="container mx-auto px-5 text-center relative z-10">
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-lime-200 bg-clip-text text-transparent drop-shadow-2xl">
                {isArabic ? "هبه\u200C" : "Heba"}
              </span>
              <span className="bg-gradient-to-r from-lime-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl ml-3">
                {isArabic ? "ناتشورالز" : "Naturals"}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mt-6 text-white/95 drop-shadow-lg max-w-4xl mx-auto px-4"
            >
              منتجات علاجيه طبيعيه 100% بإشراف د/ مواهب مهاجر
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 120 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            >
              <Link
                to="/products"
                className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-5 rounded-full text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 border-4 border-white/40"
              >
                تسوقي الآن
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-xl border-4 border-white/60 hover:bg-white/30 px-10 py-5 rounded-full text-xl sm:text-2xl font-bold hover:scale-105 transition-all duration-300"
              >
                تواصلي معنا
              </Link>
            </motion.div>
          </div>
          {/* موجة زخرفية */}
          <div className="absolute bottom-0 w-full">
            <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-32">
              <path
                fill="currentColor"
                className="text-emerald-100 dark:text-emerald-900"
                d="M0,70 C320,140 1120,20 1440,90 L1440,150 L0,150 Z"
              />
            </svg>
          </div>
        </section>
        {/* QUICK NAVIGATION */}
        <section className="py-20 bg-gradient-to-br from-emerald-100/60 via-teal-50 to-cyan-100/60 dark:from-emerald-950/60 dark:via-teal-950 dark:to-cyan-950/60">
          <div className="container mx-auto px-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-300 dark:to-teal-300 bg-clip-text text-transparent"
            >
              اكتشفي مجموعتنا الفريده
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { path: "/about", label: "من نحن", Icon: FaLeaf, gradient: "from-emerald-500 to-teal-600" },
                { path: "/products", label: "المنتجات", Icon: FaHeart, gradient: "from-rose-500 to-pink-600" },
                { path: "/order", label: "اطلبي الآن", Icon: FaShoppingBag, gradient: "from-amber-500 to-orange-600" },
                { path: "/contact", label: "تواصلي", Icon: FaComments, gradient: "from-cyan-500 to-blue-600" },
              ].map((item, i) => {
                const Icon = item.Icon;
                return (
                  <Link key={i} to={item.path}>
                    <motion.div
                      whileHover={{ y: -12, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden bg-gradient-to-br ${item.gradient} p-10 rounded-3xl shadow-2xl hover:shadow-3xl text-white text-center transition-all duration-500 border-2 border-white/20`}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="text-6xl mx-auto mb-5 drop-shadow-2xl" />
                      <p className="font-black text-xl sm:text-2xl relative z-10">
                        {item.label}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <TestimonialsCarousel />
        {/* تم حذف زر الواتساب العائم نهائيًا */}
      </main>
    </>
  );
};
export default Home;