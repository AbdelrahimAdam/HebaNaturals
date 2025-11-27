// src/pages/Reviews.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaStar, FaLeaf, FaHeart, FaFacebookF } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", product: "", review: "", rating: 5 });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // جلب التقييمات + تقييمات افتراضية قوية
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("hebaReviews")) || [];
    if (saved.length === 0) {
      const defaultReviews = [
        { name: "فاطمة - الخرطوم", product: "زيت الثعلبة الأيورفيدي", review: "اختفت الثعلبة تمامًا بعد شهرين بس! شعري رجع أقوى من الأول، شكرًا د.هبة من قلبي", rating: 5, date: "2025-11-10" },
        { name: "ريم - الرياض", product: "سيروم الإنبات + كركار سوداني", review: "شعري كان خفيف جدًا وفيه فراغات كتير… دلوقتي كثيف وطويل ولامع! أحلى قرار أخدته", rating: 5, date: "2025-11-15" },
        { name: "نور - القاهرة", product: "خلطة تطويل الشعر المجعد", review: "أنا 4C وأول مرة أشوف شعري بيطول بالسرعة دي! من 3 شهور بس وصل لكتفي، كل صحباتي طلبوا مني الوصفة", rating: 5, date: "2025-11-08" },
        { name: "أميرة - جدة", product: "زيت الثعلبة + سيروم", review: "كنت خلاص يأست من الثعلبة… بعد 6 أسابيع بس بدأ الشعر الجديد يطلع وملأ كل الفراغات!", rating: 5, date: "2025-11-20" },
        { name: "سارة - الخرطوم بحري", product: "الباقة الكاملة", review: "أنا استخدمت كل المنتجات مع بعض… والنتيجة؟ شعري بقى زي شعر الأميرات! أحلى فلوس دفعتها في حياتي", rating: 5, date: "2025-11-12" },
        { name: "لين - دبي", product: "سيروم الإنبات", review: "من أول أسبوعين بدأت أشوف شعر جديد بينط في المناطق الفاضية… دلوقتي شعري كثيف ومظبوط 100%", rating: 5, date: "2025-11-18" },
        { name: "هدى - المنصورة", product: "كركار سوداني أصلي", review: "أنا شعري مجعد وخشن… بعد الكركار بقى ناعم وسهل التسريح، وطوله زاد بشكل رهيب!", rating: 5, date: "2025-11-07" },
        { name: "منال - الجزائر", product: "زيت الثعلبة", review: "كنت بعاني من الثعلبة من ٨ سنين… د.هبة هي أول دكتورة فعلاً جابت نتيجة، الحمد لله رب العالمين", rating: 5, date: "2025-11-22" },
        { name: "زينب - عمان", product: "خلطة التكثيف", review: "شعري كان بيقع كتير… دلوقتي توقف التساقط تمامًا وصار أكثف من الأول بمراحل", rating: 5, date: "2025-11-14" },
        { name: "إيمان - الكويت", product: "الباقة الكاملة", review: "أنا دلوقتي بستخدم منتجات هبة ناتشورالز من ٤ شهور… والفرق واضح جدًا، شعري بقى تحفة!", rating: 5, date: "2025-11-19" },
      ];
      setReviews(defaultReviews);
      localStorage.setItem("hebaReviews", JSON.stringify(defaultReviews));
    } else {
      setReviews(saved);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.product.trim() || !formData.review.trim()) {
      setError("جميع الحقول مطلوبة يا قمر");
      setSuccess("");
      return;
    }

    const newReview = {
      ...formData,
      date: new Date().toLocaleDateString("ar-EG"),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("hebaReviews", JSON.stringify(updated));

    setFormData({ name: "", product: "", review: "", rating: 5 });
    setSuccess("تم إضافة تقييمك بنجاح! شكرًا لثقتك فينا");
    setError("");
  };

  return (
    <>
      <Helmet>
        <title>آراء وتجارب العملاء - هبة ناتشورالز</title>
        <meta name="description" content="أكثر من 12,000 عميلة استعادت شعرها مع منتجات هبة ناتشورالز الطبيعية 100% – شوفي تجاربهم الحقيقية" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* زر فيسبوك بحجم طبيعي وأنيق جدًا (Responsive) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <a
              href="https://www.facebook.com/share/g/1H45nmYu99/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              // أحجام مناسبة لكل الشاشات
              style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
            >
              <FaFacebookF className="text-xl" />
              <span className="text-sm sm:text-base md:text-lg">
                لمشاهدة التجارب المصورة اضغطي هنا
              </span>
            </a>
          </motion.div>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-center text-emerald-800 mb-6"
          >
            قصص نجاح عملائنا
          </motion.h1>

          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto font-medium">
            أكثر من <span className="text-emerald-600 font-black text-3xl">12,000</span> عميلة وثقوا فينا في مصر والسودان والسعودية والخليج
          </p>

          {/* نموذج إضافة تقييم */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-20 border-2 border-emerald-200"
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center flex items-center justify-center gap-3">
              <FaHeart className="text-rose-500 text-4xl" /> شاركينا تجربتك الجميلة
            </h2>

            {success && <p className="text-green-600 bg-green-50 border border-green-300 text-center font-bold py-3 rounded-xl mb-4">{success}</p>}
            {error && <p className="text-red-600 bg-red-50 border border-red-300 text-center font-bold py-3 rounded-xl mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="اسمك (مثل: فاطمة - الرياض)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="المنتج اللي استخدمتيه"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all text-lg"
                  required
                />
              </div>

              <textarea
                rows="5"
                placeholder="كيف غيرت هبة ناتشورالز شعرك؟ اكتبي تجربتك بكل صراحة"
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all resize-none text-lg"
                required
              />

              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={40}
                    className={`cursor-pointer transition-all hover:scale-110 ${formData.rating >= star ? "text-yellow-500 drop-shadow-lg" : "text-gray-300"}`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-black py-5 rounded-xl text-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
              >
                إرسال التقييم الآن
              </button>
            </form>
          </motion.div>

          {/* عرض التقييمات */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100 hover:shadow-2xl hover:border-emerald-300 transition-all hover:-translate-y-3"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, s) => (
                    <FaStar key={s} className="text-yellow-500 text-xl drop-shadow" />
                  ))}
                  <span className="text-sm text-gray-500 mr-2">• {review.date}</span>
                </div>

                <p className="text-gray-800 mb-6 leading-relaxed text-lg italic bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-2xl">
                  "{review.review}"
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="font-black text-emerald-700 text-xl">{review.name}</p>
                    <p className="text-sm text-gray-600 font-medium">{review.product}</p>
                  </div>
                  <FaLeaf className="text-emerald-600 text-5xl opacity-30" />
                </div>
              </motion.div>
            ))}
          </div>

          {reviews.length === 0 && (
            <p className="text-center text-gray-600 text-2xl mt-20">جاري تحميل التقييمات...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Reviews;