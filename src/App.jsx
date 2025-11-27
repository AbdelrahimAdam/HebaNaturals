// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";          // تمت الإضافة
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="order" element={<Order />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<BlogPost />} />
              <Route path="contact" element={<Contact />} />
              <Route path="reviews" element={<Reviews />} />   {/* الصفحة الجديدة */}
            </Route>

            {/* 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4">
                <div className="text-center py-20">
                  <h1 className="text-9xl font-black text-emerald-700 animate-pulse">404</h1>
                  <p className="text-4xl font-bold text-gray-800 mb-8">الصفحة مش موجودة</p>
                  <a href="/" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:scale-110 transition">
                    العودة للرئيسية
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;