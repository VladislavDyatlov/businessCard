import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./component/Main/Main";
import { About } from "./component/About/About";
import { Contact } from "./component/Contact/Contact";
import { State } from "./component/State/State";
import { Toaster } from 'react-hot-toast';
import { ArticleID } from "./component/ArticleID/ArticleID";
import { StateID } from "./component/StateID/StateID";
import { State_ID } from "./component/State/State_ID/State_ID";

function App() { 
  return (
    <div className="index">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<ArticleID />} />
        <Route path="/mail/:id" element={<StateID />} />
        <Route path="/state/:id" element={<State_ID />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
