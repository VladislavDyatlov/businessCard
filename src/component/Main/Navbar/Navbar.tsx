import logo from "../../../images/Logo.png";
import { NavLink } from "react-router-dom";
import { Modal } from "../../Modal/Modal";
import { useState } from "react";
import Menu from "../../../images/menu.png";
import Cross from "../../../images/cross.png";

export const Navbar = () => {
  const [modal, setModal] = useState(false);
  const setActive = (isActive: string) => (isActive ? " active" : "");
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <nav className={`nav ${menu ? "active" : "" }`}>
        <div className={`nav__${menu ? 'block' : 'component'}`}>
          <div className="nav__block1">
            <img src={logo} />
          </div>
          <div className={`nav__${menu ? 'actives' : 'block2'}`}>
            <NavLink className={`${setActive}`} to="/">
              Главная
            </NavLink>
            <NavLink className={`${setActive}`} to="/about">
              О себе
            </NavLink>
            <NavLink className={`${setActive}`} to="/state">
              Статьи
            </NavLink>
            <NavLink className={`${setActive}`} to="/contact">
              Контакты
            </NavLink>
          </div>
          <div className={`nav__${menu ? 'buttons' : 'block3'}`}>
            <button onClick={() => setModal(!modal)}>Заявка</button>
            <button
              onClick={() =>
                (document.location = "https://github.com/VladislavDyatlov")
              }
            >
              Мой аккаунт
            </button>
          </div>
          <div className={`nav__${menu ? 'three' : 'cross'}`}>
            <img
              src={menu ? Cross : Menu}
              width={`${menu ? "20" : "34"}`}
              height={`${menu ? "20" : "34"}`}
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};
