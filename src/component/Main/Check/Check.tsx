import "./Check.scss";
import Timer from "../../../images/Timer.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import { useEffect } from "react";
import { fetchProject } from "../../../redux/action/project/project";
import { Link } from "react-router-dom";

export const Check = () => {
  const dispatch = useAppDispatch();
  const { project } = useAppSelector((project) => project.project);

  useEffect(() => {
    dispatch(fetchProject());
  }, []); 

  return (
    <section className="check">
      <div className="check__component">
        <div className="check__inner">
          <div className="check__block1">
            <p>Проверьте все мои проекты</p>
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
            >
              {project.project?.map((slide) => (
                <SwiperSlide>
                  {" "}
                  <Link to={`/mail/${slide.id}`}>
                    <div
                      className="check__slider"
                      style={{
                        backgroundImage: `url(${slide.photo})`,
                      }}
                    ></div>
                  </Link>
                </SwiperSlide>
              ))}
              ...
            </Swiper>
          </div>
          <div className="check__block2">
            <div className="check__trans">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="check__imges"></div>
            <div className="check__titles">
              Основной язык программирования JS
            </div>
            <div className="check__texts">
              Работаю с его фремформаки, такими как: React, Next, Vue
            </div>
          </div>
          <div className="check__block3">
            <p>Топ проектов по моему мнению</p>
            <div className="check__pre">
              <div className="check__comp">
                <div
                  className="check__images"
                  style={{
                    backgroundImage: `url(https://cdn.i-scmp.com/sites/default/files/styles/portrait/public/d8/yp/images/taiwan_china_whatsapp_disruptions_rit03_59951942.jpg?itok=492CCDpE)`,
                  }}
                ></div>
                <div className="check__preBlock">
                  <p>Разработка web-проекта мессенджера "Message"</p>
                  <div className="check__flex">
                    <p>
                      <img src={Timer} width={20} height={20} /> 1м.р.
                    </p>
                    <span>3.20ETH</span>
                  </div>
                </div>
              </div>
              <div className="check__comp">
                <div
                  className="check__images"
                  style={{
                    backgroundImage: `url(https://i.pinimg.com/originals/c5/36/7c/c5367c3258b6954e8a85421028830c91.png)`,
                  }}
                ></div>
                <div className="check__preBlock">
                  <p>Разработка своего сайта визитки (портфолио)</p>
                  <div className="check__flex">
                    <p>
                      <img src={Timer} width={20} height={20} /> 1н.р.
                    </p>
                    <span>3.17ETH</span>
                  </div>
                </div>
              </div>
              <div className="check__comp">
                <div
                  className="check__images"
                  style={{
                    backgroundImage: `url(https://www.marieclaire.com.tr/wp-content/uploads/2014/02/manset-ast.jpg)`,
                  }}
                ></div>
                <div className="check__preBlock">
                  <p>Разработка сайта на космическую тему "Kosmo"</p>
                  <div className="check__flex">
                    <p>
                      <img src={Timer} width={20} height={20} /> 1н.р.
                    </p>
                    <span>3.18ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
