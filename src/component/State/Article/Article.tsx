import "./Article.scss";
import Timer from "../../../images/Timer.png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import { useEffect, useState } from "react";
import { fetchStates } from "../../../redux/action/state/state";
import { article } from "../../../utils/data";
import { Pagination } from "../Pagination/Pagination";

export const Article = () => {
  const dispatch = useAppDispatch();
  const { states } = useAppSelector((state) => state.state);
  const [category, setCategory] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const statePerPage = 8;

  const lastStateIndex = currentPage * statePerPage;
  const firstStateIndex = lastStateIndex - statePerPage;
  const currentState = states?.states?.slice(firstStateIndex, lastStateIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchStates(category));
    setCurrentPage(1);
  }, [category]);

  return (
    <section className="state">
      <div className="state__inner">
        <p>НОВОСТИ IT</p>
        <p>Ниболее популярные новости</p>
        <div className="state__btn">
          {article.map((category) => (
            <button onClick={() => setCategory(category.category)}>
              {category.text}
            </button>
          ))}
        </div>
        <div className="state__component">
          {currentState?.map((state) => (
            <div className="state__block">
              <div
                className="state__images"
                style={{
                  backgroundImage: `url(${state?.photo})`,
                }}
              ></div>
              <div className="state__text">
                <div>{state.title}</div>
                <span className="state__flex">
                  <span className="state__flexs">
                    <img src={Timer} /> {state?.date?.slice(0, 10)}
                  </span>
                  <button>
                    <Link to={`/state/${state?.id}`}>Читать</Link>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
        {Math.ceil(states?.states?.length / statePerPage) > 1 && (
            <Pagination
              totalState={states?.states?.length}
              statePerPage={statePerPage}
              paginate={paginate}
            />
          )}
      </div>
    </section>
  );
};
