// src/components/ContactUsButton.jsx
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // الروابط الرسمية الصحيحة والمحدثة (كل رابط للمنصة الصحيحة)
  const socialLinks = [
    {
      href: "https://wa.me/+966566452949",                    // واتساب
      icon: <FaWhatsapp size={32} />,
      label: "تواصلي معانا على واتساب",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
      shadowColor: "shadow-green-500/50",
    },
    {
      href: "https://www.instagram.com/heba_naturals1?igsh=MTJ5MmU4M2FjbGV5dw%3D%3D&utm_source=qr", // إنستغرام (الرابط الكامل اللي أرسلتيه)
      icon: <FaInstagram size={32} />,
      label: "تابعينا على إنستغرام",
      bgColor: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500",
      hoverColor: "hover:shadow-pink-500/60",
      shadowColor: "shadow-pink-500/50",
    },
    {
      href: "https://www.facebook.com/share/16p8mXJWWK/?mibextid=wwXIfr", // فيسبوك
      icon: <FaFacebookF size={32} />,
      label: "صفحتنا على فيسبوك",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      shadowColor: "shadow-blue-500/50",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* الأيقونات المنبثقة */}
      <AnimatePresence>
        {isOpen &&
          socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}                    // ← الرابط الصحيح لكل أيقونة
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: index * 0.12, type: "spring", stiffness: 300 }}
              className={`mb-4 text-white p-5 rounded-full shadow-2xl ${link.bgColor} ${link.hoverColor} transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 ring-4 ring-white/30`}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
              <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current -z-10"></span>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* الزر الرئيسي */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative overflow-hidden px-6 py-6 rounded-full
          bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600
          hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700
          text-white font-black text-lg shadow-2xl
          flex items-center justify-center gap-3
          transition-all duration-500
          ring-4 ring-white/40 hover:ring-emerald-300/60
          transform hover:shadow-emerald-500/60
        `}
        aria-label={isOpen ? "إغلاق قنوات التواصل" : "فتح قنوات التواصل"}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_2s_infinite]"></span>

        {isOpen ? (
          <FaTimes size={32} className="drop-shadow-lg" />
        ) : (
          <>
            <FaWhatsapp size={34} className="drop-shadow-lg" />
            <span className="hidden sm:inline">تواصلي معانا</span>
          </>
        )}
      </motion.button>

      {/* تلميح صغير */}
      {!isOpen && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-12 right-0 bg-black/80 text-white text-xs px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-sm border border-white/20"
        >
          نحن هنا لأجل شعرك
        </motion.p>
      )}
    </div>
  );
};

export default ContactUsButton;