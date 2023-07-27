import { Arcticle } from "./Article/Article";
import { Check } from "./Check/Check";
import { Footer } from "./Footer/Footer";
import { Habit } from "./Habit/Habit";
import "./Main.scss";
import { Navbar } from "./Navbar/Navbar";
import { Self } from "./Self/Self";
import { Slider } from "./Slider/Slider";
import { Stack } from "./Stack/Stack";
import { Tecnologies } from "./Tecnologies/Tecnologies";
import { Title } from "./Title/Title";

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <Slider />
      <Self />
      <Check />
      <Habit /> 
      <Arcticle />
      <Stack />
      <Tecnologies />
      <Footer />
    </div>
  );
};
