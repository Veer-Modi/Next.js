'use client';
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile Page: {username}</h1>
    </div>
  );
}
