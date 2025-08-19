'use client';
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
    </div>
  );
}
