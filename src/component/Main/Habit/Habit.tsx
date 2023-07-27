import "./Habit.scss";
import React from "../../../images/ReactImage.png";
import Next from "../../../images/nextjs.png";
import NodeJS from "../../../images/NodeJS.png";
import Laravel from "../../../images/Laravel.png";
 
export const Habit = () =>{
    return( 
        <section className="habit">
            <div className="habit__inner">
                <div className="habit__block"></div>
                <div className="habit__block1">
                    <span>НЕМНОГО О СЕБЕ</span>
                    <p>Опты работы в web-индустрии более 2,5 лет. Зная 3-х языков программирования</p>
                    <small>Знания 5 фреймворков по 3 изученным языкам: React, Vue, Next ,Node, Laravel. Основной платформой разрабтки web-приложений считаю React и Next</small>
                    <div>
                        <img src={React} />
                        <img src={Next} />
                        <img src={NodeJS} />
                        <img src={Laravel} />
                    </div>
                </div>
            </div>
        </section>
    )
}