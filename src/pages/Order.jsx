// src/pages/Order.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaTruck, FaShieldAlt, FaCheckCircle, FaLeaf, FaStar } from "react-icons/fa";

const Order = () => {
  const [selectedCountry, setSelectedCountry] = useState("مصر");

  // أرقام واتساب خدمة العملاء حسب الدولة (غيّري الأرقام بالأرقام الحقيقية)
  const whatsappNumbers = {
    مصر: "201276206796",        // رقم مصر
    السودان: "249116359518",    // رقم السودان
    السعودية: "966566452949",    // رقم السعودية
  };

  const currentNumber = whatsappNumbers[selectedCountry];

  const whatsappLink = `https://wa.me/${currentNumber}?text=مرحبًا%20هبة%20ناتشورالز%20%F0%9F%8C%BF%0Aأنا%20من%20${selectedCountry}%0Aأريد%20الاستفسار%20عن%20المنتجات%20العلاجية%20الطبيعية%20والأسعار...`;

  return (
    <>
      <Helmet>
        <title>اطلبي الآن | هبة ناتشورالز - مصر • السودان • السعودية</title>
        <meta
          name="description"
          content="تواصلي مع خدمة العملاء عبر واتساب لمعرفة الأسعار وطلب المنتجات الأصلية - شحن لمصر والسودان والسعودية"
        />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900 py-16 px-5">

        <div className="container mx-auto max-w-4xl text-center">

          {/* العنوان */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-800 dark:text-emerald-300 mb-4">
              اطلبي منتجاتك الآن
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
              اختاري دولتك وسيتم توجيهك مباشرة إلى خدمة العملاء عبر واتساب
            </p>
          </motion.div>

          {/* اختيار الدولة */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16 max-w-md mx-auto"
          >
            <label className="block text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
              اختاري دولتك
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-6 py-4 text-lg font-medium bg-white dark:bg-gray-800 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl focus:border-emerald-500 focus:outline-none transition"
            >
              <option value="مصر">مصر</option>
              <option value="السودان">السودان</option>
              <option value="السعودية">السعودية</option>
            </select>
          </motion.div>

          {/* زر واتساب رئيسي – حجم مثالي وأنيق */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="mb-16"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="text-3xl sm:text-4xl" />
              تواصلي مع خدمة العملاء في {selectedCountry} الآن
            </a>
          </motion.div>

          {/* المزايا */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <FaTruck />, title: "شحن سريع", desc: "خلال 24-72 ساعة" },
              { icon: <FaShieldAlt />, title: "دفع عند الاستلام", desc: "مصر والسودان" },
              { icon: <FaCheckCircle />, title: "ضمان النتائج", desc: "إرجاع كامل إذا لم تعجبك" },
              { icon: <FaLeaf />, title: "منتجات طبيعية 100%", desc: "تركيبات أيورفيدية أصلية" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-800"
              >
                <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* الثقة */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-3xl p-10 shadow-xl"
          >
            <FaStar className="text-6xl text-yellow-500 mx-auto mb-4" />
            <p className="text-2xl sm:text-3xl font-bold text-emerald-800 dark:text-emerald-300">
              أكثر من 15,000 عميلة سعيدة
            </p>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mt-2">
              من مصر • السودان • السعودية والخليج
            </p>
          </motion.div>

          {/* تذكير سفلي */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              الأسعار والعروض ستُعرض لكِ فور التواصل مع خدمة العملاء
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-lg hover:underline"
            >
              <FaWhatsapp className="text-2xl" />
              ابدئي الآن بالضغط هنا
            </a>
          </motion.div>

        </div>
      </main>
    </>
  );
};

export default Order;