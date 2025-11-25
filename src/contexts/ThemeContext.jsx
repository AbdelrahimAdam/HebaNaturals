// src/contexts/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // تحميل الثيم من localStorage أو تفضيل النظام
  useEffect(() => {
    const savedTheme = localStorage.getItem("heba-theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // تطبيق الثيم + ألوان مخصصة فاخرة
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--bg-primary", "#0f172a");
      root.style.setProperty("--bg-secondary", "#1e293b");
      root.style.setProperty("--text-primary", "#ecfdf5");
      root.style.setProperty("--text-secondary", "#86efac");
      root.style.setProperty("--accent", "#10b981");
      root.style.setProperty("--accent-hover", "#059669");
    } else {
      root.classList.remove("dark");
      root.style.removeProperty("--bg-primary");
      root.style.removeProperty("--bg-secondary");
      root.style.removeProperty("--text-primary");
      root.style.removeProperty("--text-secondary");
      root.style.removeProperty("--accent");
      root.style.removeProperty("--accent-hover");
    }

    localStorage.setItem("heba-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// زر الثيم الفاخر الجديد – الحل النهائي والأخالي من العيوب
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="تبديل الثيم"
      className="relative w-20 h-11 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-gray-700 dark:to-gray-800 p-1.5 shadow-lg hover:shadow-xl hover:shadow-emerald-500/40 overflow-hidden transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-700"
    >
      {/* خلفية لامعة خفيفة */}
      <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-black/30 pointer-events-none" />

      {/* الدائرة المتحركة – الحل السحري باستخدام left/right */}
      <motion.div
        className="absolute top-1.5 w-8 h-8 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center z-10"
        animate={{
          left: theme === "dark" ? "calc(100% - 36px)" : "6px",
          right: theme === "dark" ? "6px" : "auto",
        }}
        initial={{ left: "6px" }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 30,
          mass: 0.8,
        }}
      >
        {theme === "light" ? (
          // أيقونة الشمس
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.708.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          // أيقونة القمر مع نجوم صغيرة
          <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            <circle cx="15" cy="6" r="1.2" fill="#86efac" opacity="0.9" />
            <circle cx="6" cy="8" r="0.9" fill="#86efac" opacity="0.8" />
            <circle cx="13" cy="15" r="0.8" fill="#86efac" opacity="0.7" />
          </svg>
        )}
      </motion.div>

      {/* تأثير لمعان متحرك عند الضغط */}
      <motion.span
        className="absolute inset-0 rounded-full bg-white/40 blur-xl pointer-events-none"
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      />
    </button>
  );
};