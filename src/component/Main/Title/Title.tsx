import FrameLine from "../../../images/Frame Line.png";
import FrameIcon from "../../../images/Frame Icon.png";
import Zoom from "../../../images/Zoom.png";
import JS from "../../../images/JS.png";
import TS from "../../../images/TS.png";
import PHP from "../../../images/PHP.png";
import HTML from "../../../images/HTML.png";

export const Title = () =>{
    return(
        <section className="main__inner">
        <div className="main__block">
          <div className="main__select">
            <div className="main__small">Самые современные технологии</div>
            <div className="main__title">
              Новое представление о<span><img src={FrameLine} width={25} height={55} /></span> <span className="main__left"><img src={FrameIcon} width={35} height={35} /> Frontend-разработке</span>
            </div>
            <div className="main__small">Программирование, Дизайн, Игры</div>
            <div className="main__icons">
                <img src={HTML} />
                <img src={JS} />
                <img src={TS} />
                <img src={PHP} /> 
            </div>
          </div>
        </div>
      </section>
    )
}