// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaClock, FaHeart } from "react-icons/fa";

const Contact = () => {
  // أرقام الواتساب الرسمية
  const whatsappNumbers = {
    egypt: "+201276206796",
    sudan: "+249116359518",
    ksa:   "+966566452949",
  };

  const openWhatsApp = (country) => {
    const number = whatsappNumbers[country];
    const countryName = country === "egypt" ? "مصر" : country === "sudan" ? "السودان" : "السعودية";
    const message = `مرحبًا دكتورة هبة ناتشورالز ❤️\nأريد الاستفسار عن المنتجات والشحن إلى *${countryName}*\nمن فضلك ساعديني في اختيار الأنسب لحالتي.\nشكرًا من القلب!`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>تواصلي معنا | هبة ناتشورالز - مصر · السودان · السعودية</title>
        <meta name="description" content="تواصلي معانا عبر واتساب في مصر والسودان والسعودية - رد فوري - استشارة مجانية - شحن سريع لكل الدول" />
        <meta property="og:image" content="/img/products/hebaBrand.jpeg" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950 py-20 px-6">
        <div className="container mx-auto max-w-7xl">

          {/* العنوان الرئيسي */}
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              تواصلي معنا الآن
            </h1>
            <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-emerald-800 dark:text-emerald-300 font-medium max-w-5xl mx-auto leading-relaxed">
              فريقنا يرد عليكِ فورًا
            </p>
          </motion.div>

          {/* بطاقات الدول مع الصور الحقيقية للأعلام */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

            {/* مصر */}
            <motion.div
              whileHover={{ y: -20, scale: 1.06 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-200/50 dark:border-emerald-800/70"
            >
              <div className="p-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-8 ring-emerald-100 dark:ring-emerald-900">
                  <img
                    src="/img/egyptflage.png"
                    alt="علم مصر"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-black text-emerald-700 dark:text-emerald-400 mb-4">مصر</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">القاهرة · الجيزة · الإسكندرية · كل المحافظات</p>
                <button
                  onClick={() => openWhatsApp("egypt")}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xl py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp size={36} />
                  واتساب مصر
                </button>
              </div>
            </motion.div>

            {/* السودان */}
            <motion.div
              whileHover={{ y: -20, scale: 1.06 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-200/50 dark:border-emerald-800/70"
            >
              <div className="p-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-8 ring-emerald-100 dark:ring-emerald-900">
                  <img
                    src="/img/sudanflag.png"
                    alt="علم السودان"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-black text-emerald-700 dark:text-emerald-400 mb-4">السودان</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">الخرطوم · أم درمان · بحري · كل الولايات</p>
                <button
                  onClick={() => openWhatsApp("sudan")}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xl py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp size={36} />
                  واتساب السودان
                </button>
              </div>
            </motion.div>

            {/* السعودية */}
            <motion.div
              whileHover={{ y: -20, scale: 1.06 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-200/50 dark:border-emerald-800/70"
            >
              <div className="p-10 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-8 ring-emerald-100 dark:ring-emerald-900">
                  <img
                    src="/img/ksaflag.jpg"
                    alt="علم السعودية"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-black text-emerald-700 dark:text-emerald-400 mb-4">السعودية</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">الرياض · جدة · الدمام · مكة · كل المناطق</p>
                <button
                  onClick={() => openWhatsApp("ksa")}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xl py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaWhatsapp size={36} />
                  واتساب السعودية
                </button>
              </div>
            </motion.div>
          </div>

          {/* الدعوة الكبرى للتواصل */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl shadow-2xl border-8 border-white/30"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-10 drop-shadow-2xl">
              <FaHeart className="inline-block text-rose-300 mx-6" size={70} />
              احنا هنا عشانكِ في أي وقت
            </h2>
            <p className="text-2xl sm:text-3xl text-white/95 mb-12 max-w-5xl mx-auto font-medium px-6 leading-relaxed">
               تواصلي الآن و دعينا نختار لكِ البرنامج العلاجي المثالي لنوع شعرك
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button onClick={() => openWhatsApp("egypt")} className="bg-white text-emerald-700 hover:bg-emerald-50 font-black text-2xl sm:text-3xl px-14 py-8 rounded-full shadow-2xl hover:shadow-emerald-500/70 transform hover:scale-110 transition-all flex items-center gap-5">
                <img src="/img/egyptflage.png" alt="مصر" className="w-12 h-12 rounded-full" />
                مصر
              </button>
              <button onClick={() => openWhatsApp("sudan")} className="bg-white text-emerald-700 hover:bg-emerald-50 font-black text-2xl sm:text-3xl px-14 py-8 rounded-full shadow-2xl hover:shadow-emerald-500/70 transform hover:scale-110 transition-all flex items-center gap-5">
                <img src="/img/sudanflag.png" alt="السودان" className="w-12 h-12 rounded-full" />
                السودان
              </button>
              <button onClick={() => openWhatsApp("ksa")} className="bg-white text-emerald-700 hover:bg-emerald-50 font-black text-2xl sm:text-3xl px-14 py-8 rounded-full shadow-2xl hover:shadow-emerald-500/70 transform hover:scale-110 transition-all flex items-center gap-5">
                <img src="/img/ksaflag.jpg" alt="السعوديه" className="w-12 h-12 rounded-full" />
                السعوديه
              </button>
            </div>
          </motion.div>

          {/* ساعات العمل */}
          <div className="mt-24 text-center">
            <p className="text-3xl sm:text-4xl font-black text-emerald-800 dark:text-emerald-400 flex items-center justify-center gap-5">
              <FaClock size={40} className="text-emerald-600" />
              متاحين لكِ 24 ساعة يوميًا · 7 أيام في الأسبوع
            </p>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mt-6">
              الرد خلال دقايق 
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;