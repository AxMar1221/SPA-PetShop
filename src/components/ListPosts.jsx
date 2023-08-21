/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { search } from "../API/Api";
import { Link } from "react-router-dom";

export const ListPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    search(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post) => {
        const { id, title, metadescription, categoria } = post;
        return (
          <Link
            to={`/posts/${id}`}
            className={`post__card post-card--${categoria}`}
            key={id}
          >
            <article>
              <h3 className="post-card__title">{title}</h3>
              <p className="post-card__meta">{metadescription}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
};
