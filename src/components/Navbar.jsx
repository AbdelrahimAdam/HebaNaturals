// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaLeaf,
  FaShoppingBag,
  FaBlog,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa";
import { ThemeToggle } from "../contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "الرئيسية", icon: <FaHome /> },
    { path: "/about", label: "من نحن", icon: <FaInfoCircle /> },
    { path: "/products", label: "المنتجات", icon: <FaLeaf /> },
    { path: "/order", label: "اطلبي الآن", icon: <FaShoppingBag /> },
    { path: "/reviews", label: "آراء العملاء", icon: <FaStar /> },
    { path: "/blog", label: "المدونة", icon: <FaBlog /> },
    { path: "/contact", label: "تواصلي معنا", icon: <FaWhatsapp /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-emerald-100 dark:border-emerald-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo + Brand Name – الحل النهائي بدون أي التصاق ولا \u200C ظاهرة */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex-shrink-0"
          >
            <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-300 dark:ring-emerald-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
              <img
                src="/img/logo.jpg"
                alt="هبه ناتشورالز"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </motion.div>

          <div className="block">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-none whitespace-nowrap">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                هبه{/* هنا الحرف السحري اللي بيفصل الكلمتين */}‌ناتشورالز
              </span>
            </h1>
            <p className="text-[10px] xs:text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 font-medium mt-0.5 opacity-90 leading-none">
              منتجات طبيعية أصلية 100%
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
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
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          ))}
        </div>

        {/* أزرار التحكم */}
        <div className="flex items-center gap-3">
          <div className="scale-75 sm:scale-85 lg:scale-100 origin-right">
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  {item.label}
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