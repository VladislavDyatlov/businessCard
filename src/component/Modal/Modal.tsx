import { useState } from "react";
import "./Modal.scss";
import { telegram } from "../../utils/telegram";
import toast from 'react-hot-toast';

type Props = {
  modal: boolean;
  setModal: (value: boolean) => void;
};

export const Modal = ({ modal, setModal }: Props) => {
  const [date, setDate] = useState({
    name: "",
    phone: "",
  });

  const postTelegram = (e: any) => {
    e.preventDefault();
    if (date.name && date.phone) {
      telegram(date.name, date.phone);
      setModal(!modal);
      toast.success("Данные успешно отправлены, ожидайте звонка.");
      return setDate({
        name: "",
        phone: "",
      });
    } else{
      toast.error("Пожалуйста введите данные")
    }
  };

  return (
    <section
      className={modal ? "modal active" : "modal"}
      onClick={() => setModal(!modal)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form className="modal__input">
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
    </section>
  );
};
