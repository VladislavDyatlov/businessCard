import { useState } from "react";
import { Footer } from "../Main/Footer/Footer";
import { Navbar } from "../Main/Navbar/Navbar";
import "./Contact.scss";
import { telegram } from "../../utils/telegram";
import toast from 'react-hot-toast';

export const Contact = () => {
  const [date, setDate] = useState({
    name: "",
    phone: "",
  });

  const postTelegram = (e: any) => {
    e.preventDefault();
    if (date.name && date.phone) {
      telegram(date.name, date.phone);
      toast.success("Данные успешно отправлены, ожидайте звонка.");
      return setDate({
        name: "",
        phone: "",
      });
    }else{
      toast.error("Пожалуйста введите данные")
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact__inner">
          <div className="contact__myself">
            <p>
              Форма для обратной связи &#128071;. Перезвоню в течении 5 минут{" "}
            </p>
            <form className="contact__text">
              <label>Введите ваше имя</label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                onChange={(e) => setDate({ ...date, name: e.target.value })}
                value={date.name}
              />
              <label>Введите ваш №-телефона</label>
              <input
                type="text"
                placeholder="Введите ваш №-телефона"
                onChange={(e) => setDate({ ...date, phone: e.target.value })}
                value={date.phone}
              />
              <div className="contact__btn">
                <button onClick={(e) => postTelegram(e)}>Отправить</button> *
                Просьба не спамить сообщение
              </div>
            </form>
          </div>
          <div className="contact__icon"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
