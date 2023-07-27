import "./Footer.scss";
import Logo from "../../../images/LogoWhite.png";
import VK from "../../../images/vk.png";
import TELEGRAM from "../../../images/telegram.png";
import GITHUB from "../../../images/github.png";
import WATH from "../../../images/wathApp.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { telegram } from "../../../utils/telegram";

export const Footer = () => {
  const [phone, setPhone] = useState("");

  const postTelegram = (e: any) => {
    e.preventDefault();
    if (phone) {
      telegram("", phone);
      toast.success("Данные успешно отправлены, ожидайте звонка.");
      return setPhone("");
    } else {
      toast.error("Пожалуйста введите данные");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__position">
        <div className="footer__block1">
          <div className="footer__icon">
            <img src={Logo} />
          </div>
        </div>
        <div className="footer__block2">
          <div className="footer__link">
            <div className="footer__a">
              <Link to="/">Главная</Link>
              <Link to="/about">О себе</Link>
              <Link to="/state">Статьи</Link>
              <Link to="/contact">Контакты</Link>
            </div>
            <div className="footer__button">
              <button>Мой аккаунт</button>
            </div>
            <div className="footer__icons">
              <a href="https://vk.com/id546549006">
                <img src={VK} />
              </a>
              <a href="https://t.me/Vladislav25022">
                <img src={TELEGRAM} />
              </a>
              <a href="https://github.com/VladislavDyatlov">
                <img src={GITHUB} />
              </a>
              <a href="https://wa.me/79023568503">
                <img src={WATH} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__block3">
          <div className="footer__text">
            <p>
              Для обратной связи со мной вы можете оставить заявку. Вам нужно
              указать свой номер телефона и нажать кнопку отправить. В течении 5
              минут я вам перезвоню. Просьба не спамить сообщения &#128579;{" "}
            </p>
          </div>
          <div className="footer__btn">
            <input
              type="text"
              placeholder="Введите ваш номер"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <button onClick={(e) => postTelegram(e)}>Отправить</button>
          </div>
        </div>
      </div>
    </footer> 
  );
};
