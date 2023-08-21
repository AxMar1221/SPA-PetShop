/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../assets/css/componentes/card.css";
import { useNavigate, useParams } from "react-router-dom";
import { search } from "../API/Api";

export const Post = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    search(`/posts/${id}`, setPost).catch(() => {
      navigate("/not-fount");
    });
  }, [id]);

  return (
    <main className="container flex flex--center">
      <article className="card post">
        <h2 className="post-card__title">{post.title}</h2>
        <p className="text__card">{post.body}</p>
      </article>
    </main>
  );
};
