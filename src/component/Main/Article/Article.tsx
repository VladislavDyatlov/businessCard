import "./Article.scss";
import Timer from "../../../images/Timer.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import { useEffect } from "react";
import { fetchStates } from "../../../redux/action/state/state";

export const Arcticle = () => {
  const dispatch = useAppDispatch();
  const { states } = useAppSelector((state) => state.state);
  const category = "all";

  useEffect(() => {
    dispatch(fetchStates(category));
  }, []);

  return (
    <section className="article">
      <div className="article__inner">
        <p>НОВОСТИ IT</p>
        <p>Ниболее популярные новости</p>
        <div className="article__component">
          {states.states?.slice(0,4).map((state) => (
            <div className="article__block">
              <div
                className="article__images"
                style={{
                  backgroundImage: `url(${state.photo})`,
                }}
              ></div>
              <div className="article__text">
              <div>{state.title}</div>
                <span className="article__flex">
                  <span className="article__flexs">
                    <img src={Timer} /> {state.date.slice(0,10)}
                  </span> 
                  <button>
                    <Link to={`/state/${state?.id}`}>Читать</Link>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="article__button">
          <Link to="/state">Смотреть всё</Link>
        </div>
      </div>
    </section>
  );
};
