import { Footer } from "../Main/Footer/Footer";
import { Navbar } from "../Main/Navbar/Navbar";
import { Slider } from "../Main/Slider/Slider";
import Vlad from "../../images/Vladislav.png";
import "./About.scss";

export const About = () => {
  const birth = +new Date("7/2/2004");
  const check = +new Date();
  const milliDay = 1000 * 60 * 60 * 24;
  const ageInDays = (check - birth) / milliDay;
  const ageInYears = Math.floor(ageInDays / 365);

  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about__container">
          <div className="about__icon"></div>
          <div className="about__myself">
            <p>Кто я такой? Чем я занимаюсь? Что я за челоовек?</p>
            <div className="about__text">
              <p> 
              <img src={Vlad} className="about__img" />Всем привет, меня зовут Влад. Мне {ageInYears} лет. Я живу в городе
                Ульяновске.
              </p>
              <p>
                Я занимаюсь frontend разработкой более 2,5 лет. Моя основная
                платформа это разработка сайтов с применением фреймворков JS:
                React, Next. Так же у меня имеются зания в языке прграммирования
                PHP и его фреймворке Laravel. Умения применять технологию
                Node.js в разработке(в основном API).
              </p>
              <p>
                Компьютерные навыки: НТМL, СCS, JavaScript, Typescript, Node.js,
                React, Vue, Next.js, Laravel, jQuery, Bootstrap5, Material-UI,
                Git, Webpack, Chrome devtools, SASS, LESS, Redux, MongoDB,
                Firebase, Prisma.
              </p>
              <p>Знание английского на уровне Intermediate. Из личных качеств кому отметить работоспособность, целеустремленность, стрессоустойчивость, умение работать в команде, дисциплинированность, аккуратность.</p>
            </div>
            <div className="about__btn">
              <button onClick={() => document.location='https://github.com/VladislavDyatlov'}>Мой аккаунт</button>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <Footer />
    </>
  );
};
