"use client";
import { useEffect, useState, useParams } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={posts.id}>
            <strong>Title: {posts.title}</strong>
            <p>Body: {posts.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
