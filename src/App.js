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

const App = () => {
  return (
    <>
      {/* HEADER */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo text-2xl">
              Mahdi
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/* HOME */}
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi,
              <br />
              I'am <span className="home__title-color">Mahdi</span>
              <br /> Web Designer
            </h1>
            <a href="#contact" className="button">
              Contact
            </a>
          </div>

          <div className="home__social">
            <a href="#" className="home__social-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="home__social-icon">
              <FaBehance />
            </a>
            <a href="#" className="home__social-icon">
              <FaGithub />
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" maskType="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g className="flex justify-left"> 
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>{" "}
                <image
                  className="home__blob-img "
                  x="50"
                  y="60"
                  href="img/perfil1.png"
                />
              </g>
            </svg>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img ">
              <img src="img/perfil2.jpg"  alt="about" />
            </div>
            <div>
              <h2 className="about__subtitle text-2xl text-bold">I'am Mahdi</h2>
              <p className="about__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                ut voluptates soluta, aut earum nemo recusandae cumque
                perferendis! Recusandae alias accusamus atque.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle text-2xl text-bold">
                Profesional Skills
              </h2>
              <p className="skills__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                optio id vero amet, alias architecto consectetur error eum eaque
                sit.
              </p>

              {[
                {
                  name: "HTML5",
                  icon: "bx bxl-html5",
                  percent: "95%",
                  barClass: "skills__html",
                },
                {
                  name: "CSS3",
                  icon: "bx bxl-css3",
                  percent: "85%",
                  barClass: "skills__css",
                },
                {
                  name: "JAVASCRIPT",
                  icon: "bx bxl-javascript",
                  percent: "65%",
                  barClass: "skills__js",
                },
                {
                  name: "UX/UI",
                  icon: "bx bxs-paint",
                  percent: "85%",
                  barClass: "skills__ux",
                },
              ].map((skill) => (
                <div className="skills__data" key={skill.name}>
                  <div className="skills__names">
                    <i className={`${skill.icon} skills__icon`}></i>
                    <span className="skills__name">{skill.name}</span>
                  </div>
                  <div className={`skills__bar ${skill.barClass}`}></div>
                  <div>
                    <span className="skills__percentage">{skill.percent}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <img src="img/work3.jpg" alt="skills" className="skills__img" />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>
          <div className="work__container bd-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a href="#" className="work__img" key={i}>
                <img src={`img/work${i}.jpg`} alt={`work${i}`} />
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form className="contact__form">
              <input
                type="text"
                placeholder="Name"
                className="contact__input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact__input"
              />
              <textarea
                cols="0"
                rows="10"
                className="contact__input"
              ></textarea>
              <input
                type="submit"
                value="Enviar"
                className="contact__button button"
              />
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer__title">Mahdi</p>
        <div className="footer__social flex col justify-center">
          <a href="#" className="footer__icon hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="#" className="footer__icon hover:text-blue-600">
            <FaInstagram />
          </a>
          <a href="#" className="footer__icon hover:text-blue-600">
            <FaTwitter />
          </a>
        </div>
        <p className="footer__copy">&#169; Bedimcode. All rights reserved</p>
      </footer>

      {/* SCRIPTS */}
      <script src="https://unpkg.com/scrollreveal"></script>
    </>
  );
};

export default App;
