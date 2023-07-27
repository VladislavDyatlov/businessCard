import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import { useEffect, useState } from "react";
import { fetchArticleID } from "../../../redux/action/stateID/stateID";
import { Footer } from "../../Main/Footer/Footer";
import { Navbar } from "../../Main/Navbar/Navbar";
import { Slider } from "../../Main/Slider/Slider";
import "./State_ID.scss";
import axios from "axios";
import { toast } from "react-hot-toast";

export const State_ID = () => {
  const userId = useParams();
  const dispatch = useAppDispatch();
  const { state } = useAppSelector((state) => state.stateId);
  const [comment, setComment] = useState("");

  const postComment = async () => {
    const name = prompt("Введите ваше имя");

    try {
      await axios
        .post(`${process.env.REACT_APP_API_PATH}article/state/comment`, {
          name: name,
          text: comment,
          id: userId.id,
        })
        .then((res) => toast(res.data?.message));
    } catch (err) {
      toast.error(err as any);
    }
    setComment("");
    dispatch(fetchArticleID(userId.id));
  };

  useEffect(() => {
    dispatch(fetchArticleID(userId.id));
  }, []);

  return (
    <>
      <Navbar />
      <section className="state_id">
        <div className="state_id__container">
          <div className="state_id__width">
            <div
              className="state_id__icon"
              style={{ backgroundImage: `url(${state.photo})` }}
            ></div>
          </div>
          <div className="state_id__myself">
            <p>{state.title}</p>
            <div className="state_id__text">
              <p>{state.text}</p>
            </div>
          </div>
        </div>
        <div className="state_id__containers">
          <div className="state_id__block3">
            <h3>Отправить отзыв про статью "{state.title}"</h3>
            <div className="state_id__back">
              <textarea onChange={(e) => setComment(e.target.value)} value={comment}>
              </textarea>
              <button onClick={() => postComment()}>Отправить</button>
            </div>
          </div>
          {state.comment?.length > 0 ? (
            <div className="state_id__block4">
              {state.comment.map((index) => (
                <div className="state_id__flexs">
                  <div className="state_id__logo">{index.name.slice(0, 1)}</div>
                  <div className="state_id__Text">{index.text}</div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <Slider />
      <Footer />
    </>
  );
};
