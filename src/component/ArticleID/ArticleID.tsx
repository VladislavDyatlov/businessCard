import { Arcticle } from "../Main/Article/Article";
import { Footer } from "../Main/Footer/Footer";
import { Navbar } from "../Main/Navbar/Navbar";
import "./ArticleID.scss";

export const ArticleID = () => {
  return (
    <>
      <Navbar />
      <section className="articleid">
        <div className="articleid__container">
          <div className="articleid__icon"></div>
          <div className="articleid__myself">
            <p>Кто я такой? Чем я занимаюсь? Что я за челоовек?</p>
            <div className="articleid__text">
              <p>
                Всем привет, меня зовут Влад. Мне 19 лет. Я живу в городе
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
            <div className="articleid__btn">
              <button onClick={() => document.location='https://github.com/VladislavDyatlov'}>Мой аккаунт</button>
            </div>
          </div>
        </div>
      </section>
      <Arcticle />
      <Footer />
    </>
  );
};
