// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";        
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLeaf, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/heba_naturals1",
      color: "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500",
      hover: "hover:shadow-pink-500/60",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/share/16p8mXJWWK/?mibextid=wwXIfr",
      color: "bg-blue-600",
      hover: "hover:shadow-blue-500/60",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/+966566452949",
      color: "bg-green-500",
      hover: "hover:shadow-green-500/60",
    },
  ];

  const quickLinks = [
    { to: "/", label: t("nav.home"), color: "from-emerald-500 to-teal-600" },
    { to: "/about", label: t("nav.about"), color: "from-teal-500 to-cyan-600" },
    { to: "/products", label: t("nav.products"), color: "from-cyan-500 to-blue-600" },
    { to: "/order", label: t("nav.order_now"), color: "from-blue-500 to-indigo-600" },
    { to: "/blog", label: t("nav.blog"), color: "from-purple-500 to-pink-600" },
    { to: "/contact", label: t("nav.contact"), color: "from-pink-500 to-rose-600" },
  ];

  return (
    <footer className="bg-gradient-to-t from-emerald-950 via-emerald-900 to-emerald-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* النص الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 max-w-6xl mx-auto"
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <FaLeaf className="text-5xl sm:text-6xl text-emerald-400 animate-pulse" />
            <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              هبه ناتشورالز
            </h2>
          </div>
          <div className="space-y-4 text-emerald-100 px-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Dancing Script', 'Great Vibes', cursive" }}>
              مُنتـجات طبيـعيه عـلاجيه بنتـائج فـوريه
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
              صُـنعت خصـيصاً لـتُنـاسب الشـعر الإفريـقي و العـربي
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontFamily: "'Dancing Script', cursive" }}>
              أُثبتت فعـاليتها في الإصـلاح من أثار الثـعلبه و الأكـزيما<br />
              و كـذلك القـضاء على القشـره و ملئ الفـراغات
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-300" style={{ fontFamily: "'Dancing Script', cursive" }}>
              سـِرهـا يكـمُن في الأعشـاب الأورفيـديه المُـختـاره
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>
              من أيـادي دكتوره مُختصه للـعنايه بـجمال شعرك
            </p>
          </div>
        </motion.div>

        {/* الأزرار السريعة */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16">
          {quickLinks.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={link.to}
                className={`block text-center py-5 px-4 rounded-2xl bg-gradient-to-r ${link.color} text-white font-bold text-sm sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-400`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 mb-16">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              className={`
                ${social.color} ${social.hover}
                text-white p-4 sm:p-5 md:p-6
                rounded-full shadow-xl
                flex items-center justify-center
                transition-all duration-300
                w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
              `}
            >
              {React.cloneElement(social.icon, {
                size: typeof window !== "undefined" && window.innerWidth < 640 ? 28 : window.innerWidth < 768 ? 32 : 36,
              })}
            </motion.a>
          ))}
        </div>

        {/* حقوق النشر */}
        <div className="text-center border-t-2 border-emerald-700/60 pt-10">
          <p className="text-2xl font-bold text-emerald-200 flex items-center justify-center gap-4 mb-4">
            <FaHeart className="text-rose-400 animate-ping" />
            نصنع الجمال من القلب لأجل شعرك
            <FaHeart className="text-rose-400 animate-ping" />
          </p>

          <p className="text-emerald-300 text-sm sm:text-base mb-2">
            © {year} <span className="font-black text-emerald-100 text-lg">Heba Naturals</span> • كل الحقوق محفوظه
            <br className="sm:hidden" /> • بإشراف د/ مواهب مهاجر
          </p>

          {/* ✅ رابط سياسة الخصوصية – إضافة فقط */}
          <Link
            to="/privacy-policy"
            className="text-emerald-300 underline hover:text-emerald-100 text-sm"
          >
            سياسة الخصوصية
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
