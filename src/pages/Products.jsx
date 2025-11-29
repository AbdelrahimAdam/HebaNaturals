// src/pages/Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

const Products = () => {
  const whatsappNumber = "+966566452949";

  const products = [
    {
      id: 1,
      name: "ماسك الحنة الطبيعي",
      description: "يغذّي الشعر، يقلّل التقصف، ويزيد من كثافته.\nومعه يعمل على التطويل بشكل فعّال.\nلمسه طبيعيه لصحه وجمال شعرك.",
      image: "/img/products/henna.jpg",
      price: 70
    },
    {
      id: 2,
      name: "ماسك السدر الطبيعي",
      description: "ينظّف فروة الرأس بعمق، يقلّل التساقط.\nويقوي الشعر من الجذور ويعمل على إنبات فروة الرأس.\nالسدر القديم للشعر صحي ونافع.",
      image: "/img/products/henna2.jpg",
      price: 85
    },
    {
      id: 3,
      name: "زبدة الكركار الطبيعية",
      description: "تركيبة سودانية أصلية تُرطّب الشعر بعمق،\nتقوّي الأطراف، وتضمن نعومة وانسيابية\nيُلاحظ من أول استعمال.",
      image: "/img/products/karkar.jpeg"
    },
    {
      id: 4,
      name: "سيروم الإنبات",
      description: "تركيبة فعالة تحفز نمو الشعر من الجذور، وتقوي البصيلات وتعالج الفراغات.\nعلاج فعال للثعلبة والصلع الغير وراثي.\nآمن للأطفال والنساء والرجال.",
      image: "/img/products/ceroom.jpeg"
    },
    {
      id: 5,
      name: "بخاخ Super Grow",
      description: "منقوع أعشاب فعال لتحفيز إنبات الشعر.\nيقوّي البصيلات ويقلّل التساقط.\nيحتوي على مواد ممتازة لترطيب\nبشكل ملحوظ مع الاستخدام المنتظم.",
      image: "/img/products/bakhakh.jpeg",
      price: 55
    },
    {
      id: 6,
      name: "المعالج الملكي",
      description: "تركيبة مغذية بعمق تعالج التلف، تقوي الشعرة من الجذور حتى الأطراف،\nتعالج الشيب المبكر، وتمنح شعرك نعومة ولمعة ملكية.",
      image: "/img/products/king.jpeg",
      price: 70
    },
    {
      id: 7,
      name: "المعالج الاورفيدي \"الكينج\"",
      description: "خلاصة الأعشاب الهندية الطبيعية، يعالج آثار الفرد والتلف الحراري ويمنحك شعر صحي ولامع من أول استعمال.",
      image: "/img/products/oil.jpeg",
      price: 80
    },
    {
      id: 8,
      name: "مجموعة هبة ناتشورالز الكاملة",
      description: "كل المنتجات الطبيعيه في باقه واحده بإشراف د/ مواهب مهاجر.\nنتائج حقيقيه، مكونات طبيعيه 100%، وثقة أكثر من 12,000 عميلة.",
      image: "/img/products/hebaBrand.jpeg"
    },
    // المنتج الجديد تمت إضافته هنا
    {
      id: 9,
      name: "شامبو الأعشاب الطبيعية الخالي من السلفات الضار",
      description: "شامبو مستخلص من افضل الخلاصات الطبيعيه, مصمم لحماية شعرك من الضرر و الجفاف. غني بالقهوه و المكونات المرطبه,مهدئ للفروه يمنح شعرك تنظيفا عميقا و رغويا مع الحفاظ على رطوبته الطبيعيه. مناسب للاطفال من عمر سنتين  و للنساء و الرجال و للشعر المصبوغ و الشعر التالف و المعالج بالبروتين, ليتركه صحيا,ناعما ولامعا.",
      image: "/img/products/gulabfrish.jpeg",
      price: 75
    },
  ];

  const handleWhatsAppClick = (productName) => {
    const message = `مرحبًا هبه ناتشورالز\nأريد الاستفسار عن:\n*${productName}*\nمن فضلك أرسلي السعر، طريقة الاستخدام، وكيفية الطلب.\nشكرًا جزيلًا`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>منتجات هبه ناتشورالز | علاجات طبيعيه للشعر الأفريقي والعربي</title>
        <meta name="description" content="منتجات طبيعيه علاجيه للثعلبه، القشره، الفراغات، التساقط – بإشراف د/ مواهب مهاجر – نتائج فوريه ومضمونه" />
        <meta property="og:image" content="/img/products/hebaBrand.jpeg" />
        {/* JSON-LD لكل المنتجات مع السعر */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((p, i) => ({
              "@type": "Product",
              "position": i + 1,
              "name": p.name,
              "image": `https://heba-naturals.vercel.app${p.image}`,
              "description": p.description,
              "brand": {
                "@type": "Brand",
                "name": "هبه ناتشورالز"
              },
              ...(p.price ? {
                "offers": {
                  "@type": "Offer",
                  "price": p.price,
                  "priceCurrency": "SAR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://heba-naturals.vercel.app/products"
                }
              } : {})
            }))
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50/90 via-white to-teal-50/80 dark:from-emerald-950 dark:via-gray-900 dark:to-teal-950 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* العنوان الرئيسي */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
              منتجات هبه ناتشورالز العلاجيه
            </h1>
          </motion.div>

          {/* شبكة المنتجات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -16, scale: 1.05 }}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-emerald-200/60 dark:border-emerald-800/70 hover:shadow-2xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-700/50 transition-all duration-500"
              >
                <div className="relative h-80 sm:h-96 overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-emerald-800 dark:text-emerald-400 mb-5 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8 whitespace-pre-line">
                    {product.description}
                  </p>
                  <button
                    onClick={() => handleWhatsAppClick(product.name)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg sm:text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp size={30} />
                    اطلبي عبر واتساب
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;