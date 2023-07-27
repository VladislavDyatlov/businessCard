import "./Stack.scss";
import AGE from "../../../images/AGE.png";
import Programm from "../../../images/program.png";
import FrameWork from "../../../images/Framework.png";
import Library from "../../../images/Library.png";

export const Stack = () => {
  const birth = +new Date("7/2/2004");
  const check = +new Date();
  const milliDay = 1000 * 60 * 60 * 24;
  const ageInDays = (check - birth) / milliDay;
  const ageInYears = Math.floor(ageInDays / 365);

  return (
    <section className="stack">
      <div className="stack__container">
        <div className="stack__blocks">
          <img src={AGE} width="35" height="35" />
          <p>{ageInYears} лет</p>
          <small>Возраст</small>
        </div>
        <div className="stack__blocks">
          <img src={Programm} width="35" height="35" />
          <p>3 ЯП</p>
          <small>Программирование</small>
        </div> 
        <div className="stack__blocks">
          <img src={FrameWork} width="35" height="35" />
          <p>5 Frame</p>
          <small>Фреймворки</small>
        </div>
        <div className="stack__blocks">
          <img src={Library} width="35" height="35" />
          <p>9 Library</p>
          <small>Библиотеки</small>
        </div>
      </div>
      <div className="stack__inner">
        <div className="check__trans">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stack__block">
          <span>ДОПОЛНИТЕЛЬНО</span>
          <p>Активно применяю библиотеки для своих проектов</p>
          <small>
            Я активно работаю с библиотеками, например такими как: Redux, SASS,
            Webpack, Material-UI и тд.
          </small>
        </div>
        <div className="stack__block1"></div> 
      </div>
    </section>
  );
};
