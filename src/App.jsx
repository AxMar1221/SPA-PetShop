import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { Page404 } from "./pages/Page404";
import { Header } from "./components/Header";
import { Post } from "./pages/Post";
import { Category } from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Sobre />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/categoria/:id/*" element={<Category />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
