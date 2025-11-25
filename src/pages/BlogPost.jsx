// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaArrowRight, FaWhatsapp, FaUser, FaCalendarAlt } from "react-icons/fa";

const fullPosts = {
  1: {
    title: "لماذا تستحق منتجات هبه ناتشورالز ثقتكِ الكامله؟",
    date: "2025-11-20",
    image: "/img/products/hebaBrand.jpeg",
    content: `
<div class="text-center mb-12">
  <img src="/img/products/hebaBrand.jpeg" alt="هبه ناتشورالز - العلامه التجاريه الأصليه" class="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800" />
  <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">كل قطره تحمل اسم هبه ناتشورالز تصنع بحب وعلم</p>
</div>

<p class="text-lg leading-relaxed mb-6">في زمن أصبحت فيه الخيارات لا تُحصى، والوعود أكثر من المنتجات نفسها، اخترنا في هبه ناتشورالز أن نكون مختلفين تمامًا.</p>

<p class="text-lg leading-relaxed mb-6">كل منتج يخرج من مختبرنا مبني على أسس علميه دقيقه، مدعومة بسنوات من البحث في الطب الأيورفيدي وخبرة حقيقية في علاج مشاكل الشعر الأفريقي والمجعد.</p>

<p class="text-lg leading-relaxed mb-6 font-semibold text-emerald-700">نحن لا نُعالج العَرَض فقط… بل نستهدف السبب الجذري.</p>

<ul class="space-y-4 my-8 text-lg bg-emerald-50 dark:bg-emerald-950/50 p-8 rounded-3xl border border-emerald-200 dark:border-emerald-800">
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> زيوت نقيه 100% بدون تخفيف أو إضافات صناعيه</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> أعشاب أيورفيديه مختاره بعنايه من مصادر موثوقه</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> تركيبات متوازنه تعمل مع طبيعة الشعر الأفريقي والعربي</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> خاليه تمامًا من البارابين و السلفات و العطور الصناعيه والمواد الحافظه</li>
</ul>

<p class="text-lg leading-relaxed mb-6">النتائج التي ترينها يوميًا في شهادات العميلات ليست صدفه… بل هي نتيجة عمل علمي دقيق، وصبر، وإيمان بقوة الطبيعه.</p>

<p class="text-lg leading-relaxed font-semibold text-emerald-700">هبه ناتشورالز ليست مجرد علامة تجاريه… إنها رساله.</p>

<p class="text-lg leading-relaxed">رسالة تقول إن الجمال الحقيقي يبدأ من الصحه، والصحة تبدأ من الطبيعه.</p>
    `,
  },

  2: {
    title: "المعالج الأيورفيدي: لماذا نُطلق عليه لقب «الملك»؟",
    date: "2025-11-18",
    image: "/img/products/oil.jpeg",
    content: `
<div class="text-center mb-12">
  <img src="/img/products/oil.jpeg" alt="المعالج الأيورفيدي - زيت الملك من هبه ناتشورالز" class="w-full max-w-xl mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800 hover:scale-105 transition duration-500" />
  <p class="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-6 text-2xl">المعالج الأيورفيدي – الملك بلا منازع</p>
</div>

<p class="text-lg leading-relaxed mb-6">إذا كان هناك منتج واحد في هبه ناتشورالز يستحق لقب «الملك»… فهو المعالج الأيورفيدي بلا منازع.</p>

<p class="text-lg leading-relaxed mb-6">هذا الزيت ليس مجرد زيت… بل هو علاج شامل طوّرته بعد سنوات من التجربة والدراسة، ليصبح الحل الأمثل لكل من تعاني من:</p>

<ul class="space-y-4 my-8 text-lg bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 p-8 rounded-3xl border border-emerald-300 dark:border-emerald-700">
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> التساقط الشديد و الثعلبه</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> انسداد المسام وعدم نمو شعر جديد</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> الشعر الضعيف المتقصف والهائش</li>
  <li class="flex items-start gap-3"><span class="text-emerald-600 mt-1">✔️</span> آثار الفرد والبروتين والصبغات الكيميائيه</li>
</ul>

<p class="text-lg leading-relaxed mb-6 font-semibold text-emerald-700">كيف يعمل المعالج الأيورفيدي؟</p>

<p class="text-lg leading-relaxed mb-6">يجمع بين أقوى 17 عشبه أيورفيديه وهندية، مع زيوت أساسية نقيه تعمل على:</p>

<ul class="space-y-3 my-8 text-lg">
  <li>• فتح بصيلات الشعر المغلقه</li>
  <li>• تنشيط الدوره الدموية في فروة الرأس</li>
  <li>• تغذية الشعر من الجذور حتى الأطراف</li>
  <li>• إعادة بناء الكيراتين الطبيعي التالف</li>
  <li>• منع التساقط وتحفيز النمو الجديد خلال أسابيع</li>
</ul>

<p class="text-lg leading-relaxed mb-6">والأجمل؟ آمن 100% للحوامل والمرضعات، لا رائحة قويه، لا تهييج، ومناسب لكل أنواع الشعر حتى الأكثر تضررًا.</p>

<p class="text-lg leading-relaxed font-semibold text-emerald-700 text-center text-2xl mt-10">آلاف العميلات جربنه… والنتيجة تحكي عن نفسها.</p>
    `,
  },

  3: {
    title: "حلول واقعيه في عالم مليء بالوعود الكاذبه",
    date: "2025-11-15",
    image: "/img/products/karkar.jpeg",
    content: `
<div class="text-center mb-12">
  <img src="/img/products/karkar.jpeg" alt="الكركار السوداني الأصلي - جزء من تركيبات هبه ناتشورالز" class="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-gray-800" />
  <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">نمزج بين الأصاله السودانيه والعلم الأيورفيدي لنقدم لكِ الأفضل</p>
</div>

<p class="text-lg leading-relaxed mb-6">كل يوم أسمع نفس السؤال: "يا دكتورة مواهب… كيف أثق في منتج جديد بعد ما جربت العشرات بدون جدوى؟"</p>

<p class="text-lg leading-relaxed mb-6">وإجابتي دائمًا واحده:</p>

<p class="text-lg leading-relaxed mb-6 font-bold text-emerald-700 text-2xl text-center">"ثقتك ما بتجي من كلامي… ثقتك بتجي من النتيجه اللي هتشوفيها بنفسك"</p>

<p class="text-lg leading-relaxed mb-6">في هبه ناتشورالز ما بنبيع أحلام ولا وعد فارغ… بنقدم حلول حقيقيه لمشاكل حقيقيه:</p>

<ul class="space-y-4 my-8 text-lg bg-rose-50 dark:bg-rose-950/30 p-8 rounded-3xl border border-rose-200 dark:border-rose-800">
  <li class="flex items-start gap-3"><span class="text-rose-600 mt-1">❤️</span> الثعلبه؟ لها علاج</li>
  <li class="flex items-start gap-3"><span class="text-rose-600 mt-1">❤️</span> الفراغات بتتملي</li>
  <li class="flex items-start gap-3"><span class="text-rose-600 mt-1">❤️</span> التساقط؟ بيقيف</li>
  <li class="flex items-start gap-3"><span class="text-rose-600 mt-1">❤️</span> الشعر التالف؟ بيرجع زي الأول وأحسن</li>
</ul>

<p class="text-lg leading-relaxed mb-6">كل منتج عندنا له قصه… قصة عميله كانت يائسه، ورجعت تبتسم من كل قلبها.</p>

<p class="text-lg leading-relaxed mb-6">هبه ناتشورالز مش مجرد زيوت… دي أمل بيتحول لحقيقه كل يوم.</p>

<p class="text-lg leading-relaxed font-semibold text-emerald-700 text-center text-2xl mt-10">جربي بنفسك… وهتعرفي ليه آلاف الستات بقوا يقولوا: "أخيرًا لقيت الحل"</p>
    `,
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = fullPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950">
        <div className="text-center p-10">
          <h1 className="text-6xl font-black text-emerald-800 dark:text-emerald-400 mb-4">404</h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">الصفحة غير موجوده</p>
          <Link to="/blog" className="text-emerald-600 dark:text-emerald-400 font-bold text-xl hover:underline">
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | هبه ناتشورالز</title>
        <meta name="description" content={post.content.replace(/<[^>]*>/g, "").substring(0, 160)} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-900 py-16 px-5">
        <article className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-10 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 mt-6 text-emerald-100">
                <span className="flex items-center gap-2"><FaUser /> د. مواهب مهاجر</span>
                <span className="flex items-center gap-2"><FaCalendarAlt /> {new Date(post.date).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
            </div>

            {/* Content مع الصور الفعلية */}
            <div className="p-8 sm:p-12 prose prose-lg max-w-none dark:prose-invert">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* CTA */}
            <div className="bg-emerald-50 dark:bg-emerald-950/50 p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-800 dark:text-emerald-300 mb-8">
                مستعده تبدئي رحلتك مع النتايج الحقيقيه؟
              </h3>
              <a
                href="https://wa.me/966566452949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xl sm:text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="text-4xl" />
                تواصلي معانا الآن عبر واتساب
              </a>
            </div>

            <div className="p-8 text-center border-t border-emerald-200 dark:border-emerald-800">
              <Link to="/blog" className="text-emerald-600 dark:text-emerald-400 hover:underline text-lg font-medium flex items-center justify-center gap-2">
                <FaArrowRight className="rotate-180" />
                العوده إلى المدونه
              </Link>
            </div>
          </motion.div>
        </article>
      </main>
    </>
  );
};

export default BlogPost;