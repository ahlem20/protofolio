import React from "react";
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
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <a href="#" className="text-2xl font-bold text-indigo-600">
            your logo
          </a>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home", "About", "Skills", "Work", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="hover:text-indigo-600"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-16"
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-600">Mahdi</span> <br /> Web
            Designer
          </h1>
          <a
            href="#contact"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Contact Me
          </a>
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl text-indigo-600">
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
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="img/perfil1.png"
            alt="Mahdi"
            className="w-96 h-96 object-cover rounded-full shadow-lg border-4 border-indigo-200"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="about section py-20 bg-gray-50" id="about">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="img/perfil2.jpg"
              alt="About"
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-indigo-600 mb-4">
              I'm Mahdi
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I'm a passionate web designer dedicated to creating modern,
              responsive, and user-friendly websites. My focus lies in combining
              aesthetic design with seamless functionality. With experience in
              front-end technologies and UX/UI design principles, I strive to
              deliver clean code and compelling digital experiences.
            </p>
            <p className="text-gray-600 mt-4">
              I enjoy solving problems and turning ideas into reality through
              code and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills section py-20 bg-white" id="skills">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            My Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Skill List */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Professional Skills
              </h3>
              <p className="text-gray-600 mb-8">
                Here are some of the technologies and design tools I specialize
                in. I’m always learning and improving!
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
      <section className="work section py-20 bg-gray-50" id="work">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            My Work
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
                    Project {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section py-20" id="contact">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            Contact Me
          </h2>
          <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="text-center">
          <h2 className="text-xl font-bold">Mahdi</h2>
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
            &copy; {new Date().getFullYear()} MEZIANE Ahlem. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* SCRIPTS */}
      <script src="https://unpkg.com/scrollreveal"></script>
    </>
  );
};

export default App;
