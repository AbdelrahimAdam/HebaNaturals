// src/pages/Blog.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaClock, FaUser, FaLeaf } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "لماذا تستحق منتجات هبه ناتشورالز ثقتكِ الكامله؟",
    excerpt: "في زمن كثرت فيه المنتجات والوعود… نحن نقدم لكِ حلولًا حقيقيه مبنيه على العلم والطبيعه معًا.",
    date: "2025-11-20",
    author: "د. مواهب مهاجر",
    image: "/img/products/hebaBrand.jpeg",
    category: "رساله من المؤسسه",
  },
  {
    id: 2,
    title: "المعالج الأيورفيدي: لماذا نُطلق عليه لقب «الملك»؟",
    excerpt: "زيت علاجي ثوري يعيد الحياه للشعر من الجذور إلى الأطراف، يوقف التساقط، يُنبت الشعر الجديد، ويُصلح آثار الكيماويات.",
    date: "2025-11-18",
    author: "د. مواهب مهاجر",
    image: "/img/products/oil.jpeg",
    category: "نجم المنتجات",
  },
  {
    id: 3,
    title: "حلول واقعية في عالم مليء بالوعود الكاذبة",
    excerpt: "لا نُبيع أحلامًا… نُقدم نتائج. تعرفي على فلسفه هبه ناتشورالز في تقديم منتجات طبيعيه تُعالج السبب وليس العرض فقط.",
    date: "2025-11-15",
    author: "د. مواهب مهاجر",
    image: "/img/products/karkar.jpeg",
    category: "رؤيه وفلسفه",
  },

  // ⭐ المقال الجديد المخصص للفهرسة SEO
  {
    id: 4,
    title: "أفضل روتين علاجي طبيعي للشعر الأفريقي والمجعد – دليل هبة ناتشورالز العلمي",
    excerpt:
      "روتين علاجي فعّال مبني على منهج الأيورفيدا والطب الطبيعي لإعادة إنبات الشعر، علاج التقصف، ترطيب عميق، وإصلاح التلف.",
    date: "2025-11-26",
    author: "د. مواهب مهاجر",
    image: "/img/products/hebaRoutine.jpeg",
    category: "نصائح علمية",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>مدونة هبه ناتشورالز | مدونات د/ مواهب مهاجر</title>
        <meta
          name="description"
          content="مقالات علميه وتجارب حقيقيه من الدكتوره مواهب مهاجر عن العنايه الطبيعيه بالشعر الأفريقي والمجعد، التركيبات الأيورفيديه، وأسرار النتائج الحقيقيه."
        />
      </Helmet>

      <main className="min-h-screen py-20 px-5 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900">
        <div className="container mx-auto max-w-7xl">

          {/* العنوان الرئيسي */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-emerald-800 dark:text-emerald-300 mb-6 leading-tight">
              كتابات الدكتوره مواهب مهاجر
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
              خبره علميه، شغف بالطبيعه، ونتائج تتحدث عن نفسها
            </p>
          </motion.div>

          {/* شبكه المقالات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl bg-white dark:bg-gray-900 border border-emerald-200 dark:border-emerald-800 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-700/30"
              >
                {/* الصورة */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* الفئة */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                    {post.category}
                  </div>
                </div>

                {/* المحتوى */}
                <div className="p-8">
                  <div className="flex items-center gap-6 text-sm text-emerald-600 dark:text-emerald-400 mb-5 font-medium">
                    <span className="flex items-center gap-2">
                      <FaUser /> {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock />{" "}
                      {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-gray-800 dark:text-gray-100 mb-4 leading-tight line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-lg hover:gap-5 transition-all duration-300"
                  >
                    اقرئي المقال كاملاً
                    <FaLeaf className="text-xl group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              تابعينا للمزيد من النصائح العلميه والتجارب الحقيقيه
            </h2>
            <p className="text-xl opacity-90">كل أسبوع مقال جديد</p>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Blog;
