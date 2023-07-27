import "./Slider.scss";
import Timer from "../../../images/Timer.png";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import { fetchProject } from "../../../redux/action/project/project";
import { Link } from "react-router-dom";

export const Slider = () => {
  const dispatch = useAppDispatch();
  const { project } = useAppSelector((project) => project.project);

  useEffect(() => {
    dispatch(fetchProject());
  }, []);

  const SliderLeft = () => {
    const slider = document.getElementById("sliders");
    slider!.scrollLeft = slider!.scrollLeft - 230;
  };

  const SliderRight = () => {
    const slider = document.getElementById("sliders");
    slider!.scrollLeft = slider!.scrollLeft + 230;
  };

  return (
    <section className="slider">
      <h3>Топ моих проектов с 2022 года</h3>
      <div className="slider__inner">
        <div className="slider__icons left" onClick={() => SliderLeft()}>
          &lt;
        </div>
        <div className="slider__conteiner" id="sliders">
          {project?.project?.map(info =>(
            <div className="slider__block">
            <img src={info.photo} />
            <div className="slider__text">
              <p>
                {info.title}
                <br /> <span>{info.number}ETH</span>{" "}
              </p>
            </div>
            <div className="slider__option">
              <div className="slider__timer">
                <img src={Timer} width={20} height={20} /> {info.date}
              </div>
              <button><Link to={`/mail/${info.id}`}>Читать</Link></button>
            </div>
          </div>
          ))}
        </div>
        <div className="slider__icons right" onClick={() => SliderRight()}>
          &gt;
        </div>
      </div>
    </section>
  );
};
