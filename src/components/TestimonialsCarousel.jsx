// src/components/TestimonialsCarousel.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaHeart } from "react-icons/fa";

const TestimonialsCarousel = () => {
  const [index, setIndex] = useState(0);

  // كل تقييم مرتبط بمنتج حقيقي من صفحة المنتجات + صورة حقيقية
  const testimonials = [
    {
      name: "منى عبدالله",
      country: "السعودية",
      review: "ماسك الحنة ده غيّر شعري 180 درجة! بعد ما كان جاف ومتقصف، بقى كثيف وطويل وله لمعة طبيعية من أول استخدام. أحلى قرار أخدته لشعري!",
      productName: "ماسك الحنة الطبيعي",
      productImage: "/img/products/henna.jpg",
      rating: 5,
    },
    {
      name: "أسماء خالد",
      country: "مصر",
      review: "كنت بعاني من تساقط رهيب، جربت ماسك السدر ومن أول أسبوعين لاحظت فرق كبير! الشعر بدأ ينبت من جديد والفراغات اتقلت بشكل ملحوظ. شكرًا د/ هبة من قلبي!",
      productName: "ماسك السدر الطبيعي",
      productImage: "/img/products/henna2.jpg",
      rating: 5,
    },
    {
      name: "فاطمة آدم",
      country: "السودان",
      review: "زبدة الكركار السودانية دي سحر بجد! شعري المجعد بقى ناعم زي الحرير، مرطب من الأعماق، ومش بيتلبد خالص. من أول استخدام حسيت الفرق!",
      productName: "زبدة الكركار الطبيعية",
      productImage: "/img/products/karkar.jpeg",
      rating: 5,
    },
    {
      name: "ريم الصغير",
      country: "مصر",
      review: "بخاخ Super Grow أنقذ فروتي! كنت بعاني من فراغات كبيرة في مقدمة الرأس، بعد شهرين من الاستخدام المنتظم بدأ الشعر ينبت بقوة وكثافة رهيبة!",
      productName: "بخاخ Super Grow",
      productImage: "/img/products/bakhakh.jpeg",
      rating: 5,
    },
    {
      name: "ليلى حسن",
      country: "السعودية",
      review: "المعالج الملكي فعلاً ملكي! بعد الكيراتين والصبغات المستمرة، رجع شعري زي الأول وأحسن، ناعم، لامع، وقوي من الجذور للأطراف. أعظم منتج جربتُه!",
      productName: "المعالج الملكي",
      productImage: "/img/products/oil.jpeg",
      rating: 5,
    },
    {
      name: "نور علي",
      country: "السودان",
      review: "أخدت المجموعة الكاملة وكانت أجمل هدية أهديها لشعري! كل منتج مكمل للتاني، والنتيجة: شعر صحي، كثيف، طويل، ولامع. أنا عميلة مدى الحياة!",
      productName: "مجموعة هبة ناتشورالز الكاملة",
      productImage: "/img/products/hebaBrand.jpeg",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
            ثقة أكثر من 12,000 عميلة في 3 دول
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-emerald-700 dark:text-emerald-300 font-medium">
            تجارب حقيقية من بنات زيّكِ غيّروا شعرهم مع هبة ناتشورالز
          </p>
        </motion.div>

        {/* الكاروسيل */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-200 dark:border-emerald-800"
            >
              {/* صورة المنتج */}
              <div className="relative h-96 lg:h-full min-h-96">
                <img
                  src={testimonials[index].productImage}
                  alt={testimonials[index].productName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-black drop-shadow-2xl leading-tight">
                    {testimonials[index].productName}
                  </h3>
                  <div className="flex gap-2 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-2xl text-yellow-400 drop-shadow-lg" />
                    ))}
                  </div>
                </div>
              </div>

              {/* النص */}
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-emerald-950 dark:to-teal-950">
                <FaQuoteLeft className="text-8xl text-emerald-400 opacity-20 mb-8" />

                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-800 dark:text-gray-100 font-medium italic mb-10">
                  "{testimonials[index].review}"
                </p>

                <div className="mt-auto">
                  <p className="text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-400">
                    — {testimonials[index].name}
                  </p>
                  <p className="text-xl text-emerald-600 dark:text-emerald-300 mt-3 flex items-center gap-3">
                    <FaHeart className="text-rose-500 animate-pulse" />
                    {testimonials[index].country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots تفاعلية */}
          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index
                    ? "bg-emerald-600 w-20 h-4 shadow-lg shadow-emerald-500/60"
                    : "bg-gray-300 dark:bg-gray-700 w-4 h-4 hover:bg-emerald-500 hover:scale-150"
                }`}
                aria-label={`عرض التقييم ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;