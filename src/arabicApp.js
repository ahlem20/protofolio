import React, { useEffect, useState } from "react";
import "./css/styles.css";
import {
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // استرجاع الوضع من localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  // تفعيل/إزالة كلاس dark على html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow"
        dir="rtl"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <a
            href="#"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            شعارك
          </a>

          <ul className="hidden md:flex space-x-6 space-x-reverse text-sm font-medium text-gray-700 dark:text-gray-200">
            {["الرئيسية", "من أنا", "المهارات", "الأعمال", "اتصل بي"].map(
              (section, index) => (
                <li key={section}>
                  <a
                    href={`#${
                      ["home", "about", "skills", "work", "contact"][index]
                    }`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {section}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? "☀️ فاتح" : "🌙 داكن"}
            </button>

            <a
              href="/english"
              className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              الانجلزية
            </a>
          </div>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
        dir="rtl"
        className="min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center px-6 md:px-20 gap-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      >
        <motion.div
          className="text-center md:text-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            مرحبًا، أنا{" "}
            <span className="text-indigo-600 dark:text-indigo-400">مهدي</span>
            <br /> مصمم واجهات الويب
          </h1>
          <a
            href="#contact"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            تواصل معي
          </a>
          <div className="flex justify-center md:justify-end gap-4 mt-6 text-xl text-indigo-600 dark:text-indigo-400">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaBehance />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="img/perfil1.png"
            alt="مهدي"
            className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-indigo-200"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        className="about section py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        id="about"
      >
        <div
          dir="rtl"
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">
              أنا مهدي
            </h2>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
              أنا مصمم واجهات ويب شغوف، أركز على إنشاء مواقع حديثة، متجاوبة
              وسهلة الاستخدام. أدمج الجمالية في التصميم مع الأداء السلس، وأمتلك
              خبرة في تقنيات الواجهة الأمامية ومبادئ تصميم تجربة المستخدم.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              أستمتع بحل المشكلات وتحويل الأفكار إلى واقع من خلال الكود
              والإبداع.
            </p>
          </div>
          <div>
            <img
              src="img/perfil2.jpg"
              alt="About"
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        className="skills section py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        id="skills"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            مهاراتي
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Skill List */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-500">
                المهارات الاحترافية
              </h3>
              <p className="text-gray-600 dark:text-gray-500 mb-8">
                هذه بعض التقنيات وأدوات التصميم التي أتقنها، وأنا دائمًا في سعي
                للتعلم والتطور!
              </p>
              {[
                { name: "HTML5", percent: 95 },
                { name: "CSS3", percent: 85 },
                { name: "JavaScript", percent: 65 },
                { name: "UX/UI Design", percent: 85 },
              ].map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-indigo-600">
                      {skill.name}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-indigo-600 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image or Illustration */}
            <div className="flex justify-center">
              <img
                src="img/work3.jpg"
                alt="Skills Illustration"
                className="w-96 h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        className="work section py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        id="work"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            أعمالي
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={`img/work${i}.jpg`}
                  alt={`work${i}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <p className="text-white text-lg font-semibold">
                    المشروع {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="contact section py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            اتصل بي
          </h2>
          <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="اسمك الكامل"
                className="w-full border border-gray-300 rounded-lg px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="6"
              placeholder="رسالتك"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 ">
        <div className="text-center">
          <h2 className="text-xl font-bold">مهدي</h2>
          <div className="flex justify-center space-x-4 text-lg mt-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
          </div>
          <p className="text-sm mt-4 text-gray-400">
            &copy; {new Date().getFullYear()} أحلام مزيان. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>

      {/* SCRIPTS */}
      <script src="https://unpkg.com/scrollreveal"></script>
    </>
  );
};

export default App;
