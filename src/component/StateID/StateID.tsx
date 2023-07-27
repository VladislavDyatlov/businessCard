import { useParams } from "react-router-dom";
import { Arcticle } from "../Main/Article/Article";
import { Footer } from "../Main/Footer/Footer";
import { Navbar } from "../Main/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { useEffect, useState } from "react";
import { fetchProjectID } from "../../redux/action/projectID/projectID";
import axios from "axios";
import { toast } from "react-hot-toast";

export const StateID = () => {
  const userId = useParams();
  const dispatch = useAppDispatch();
  const { project } = useAppSelector((project) => project.projectId);
  const [comment, setComment] = useState("Введите отзыв");

  const postComment = async () => {
    const name = prompt("Введите ваше имя");

    try {
      await axios
        .post(`${process.env.REACT_APP_API_PATH}user/project/comment`, {
          name: name,
          text: comment,
          id: userId.id,
        })
        .then((res) => toast(res.data?.message));
    } catch (err) {
      toast.error(err as any);
    }
    setComment("");
    dispatch(fetchProjectID(userId.id));
  };

  useEffect(() => {
    dispatch(fetchProjectID(userId.id));
  }, []);

  return (
    <>
      <Navbar />
      <section className="articleid">
        <div className="articleid__container">
          <div className="articleid__block1">
            <div className="articleid__width">
              <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
              >
                {project.image?.map((slide) => (
                  <SwiperSlide>
                    {" "}
                    <div
                      className="articleid__icon"
                      style={{
                        backgroundImage: `url(${slide.photo})`,
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
                ...
              </Swiper>
            </div>
          </div>
          <div className="articleid__myself">
            <p>{project.title}</p>
            <div className="articleid__text">
              <p>{project.text}</p>
            </div>
          </div>
        </div>
        <div className="state_id__containers">
          <div className="state_id__block3">
            <h3>Отправить отзыв на проект "{project.title}"</h3>
            <div className="state_id__back">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              >
                Введите свой отзыв
              </textarea>
              <button onClick={() => postComment()}>Отправить</button>
            </div>
          </div>
          {project.comment?.length > 0 ? (
            <div className="state_id__block4">
              {project.comment?.map((index) => (
                <div className="state_id__flexs">
                  <div className="state_id__logo">{index.name.slice(0, 1)}</div>
                  <div className="state_id__Text">{index.text}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <div className="articleid__remove">
        <Arcticle />
      </div>
      <Footer />
    </>
  );
};
