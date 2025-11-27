// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaLeaf,
  FaShoppingBag,
  FaBlog,
  FaWhatsapp,
} from "react-icons/fa";
import { ThemeToggle, useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    setIsOpen(false);
  };

  const navItems = [
    { path: "/", label: "nav.home", icon: <FaHome /> },
    { path: "/about", label: "nav.about", icon: <FaInfoCircle /> },
    { path: "/products", label: "nav.products", icon: <FaLeaf /> },
    { path: "/order", label: "nav.order_now", icon: <FaShoppingBag /> },
    { path: "/blog", label: "nav.blog", icon: <FaBlog /> },
    { path: "/contact", label: "nav.contact", icon: <FaWhatsapp /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-emerald-100 dark:border-emerald-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4">
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-shrink-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-300 dark:ring-emerald-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
              <img
                src="/img/logo.jpg"
                alt="Heba Naturals Logo"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent shadow-inner pointer-events-none" />
          </motion.div>
          <div className="hidden sm:block">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {isArabic ? "هبه\u200C" : "Heba"}
              </span>
              <span className="bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent ml-1">
                {isArabic ? "ناتشورالز" : "Naturals"}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-medium mt-1 opacity-90">
              {isArabic ? "منتجات طبيعيه أصليه 100%" : "100% Original Natural Care"}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-lg transition-all duration-300"
            >
              <span className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="relative">
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          ))}
        </div>

        {/* Controls: Theme + Language + Mobile Menu – الأزرار الآن متساوية وصغيرة وأنيقة */}
        <div className="flex items-center gap-3">
          {/* زر الثيم (القمر والشمس) */}
          <div className="flex justify-center items-center">
            <ThemeToggle />
          </div>

          {/* زر اللغة – صغير، دائري، متسق تمامًا */}
          <button
            onClick={toggleLanguage}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            aria-label="تبديل اللغة"
          >
            {isArabic ? "EN" : "ع"}
          </button>

          {/* زر القائمة في الموبايل */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="فتح القائمة"
          >
            {isOpen ? (
              <AiOutlineClose size={22} className="text-emerald-700 dark:text-emerald-400" />
            ) : (
              <AiOutlineMenu size={22} className="text-emerald-700 dark:text-emerald-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="lg:hidden bg-white dark:bg-gray-900 border-t-4 border-emerald-500 dark:border-emerald-700 shadow-2xl"
        >
          <div className="py-6 px-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-5 px-6 py-4 bg-emerald-50/70 dark:bg-gray-800/70 hover:bg-emerald-100 dark:hover:bg-gray-700 rounded-2xl transition-all duration-300 text-lg font-bold border border-emerald-200 dark:border-emerald-800"
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-2xl">
                  {item.icon}
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  {t(item.label)}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;