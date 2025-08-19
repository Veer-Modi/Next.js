import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href="/api/posts">Posts</Link>
        <div></div>
        <Link href="/api/posts/3">PostsByID</Link>
      </div>
    </>
  );
}
