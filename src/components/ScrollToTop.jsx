// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // الحل الأقوى والأسلس: يعيد الصفحة لأعلى فورًا بدون أي تأخير أو فلاش
    window.scrollTo(0, 0);
    
    // بديل أكثر سلاسة (اختياري - أنيميشن خفيف)
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // كل ما يتغير الـ path → يرجع لأعلى

  return null;
};

export default ScrollToTop;