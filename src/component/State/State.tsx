import { Footer } from "../Main/Footer/Footer";
import { Navbar } from "../Main/Navbar/Navbar";
import { Title } from "../Main/Title/Title";
import { Article } from "./Article/Article";

export const State = () => {
  return (
    <div className="main">
      <Navbar />
      <Title />
      <Article />
      <Footer />
    </div>
  );
};
