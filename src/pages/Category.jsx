import "../assets/css/blog.css";
import { ListCategories } from "../components/ListCategories";
import { ListPosts } from "../components/ListPosts";
import { search } from "../API/Api";
import {
  Routes,
  Route,
  Link,
  useResolvedPath,
  useParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { SubCategoria } from "./SubCategoria";

export const Category = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const { id } = useParams();

  const url = useResolvedPath("").pathname;

  useEffect(() => {
    search(`/categorias?id=${id}`, (response) => {
      setSubcategorias(response[0].subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path="/"
          element={<ListPosts url={`/posts?categoria=${id}`} />}
        />
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};
