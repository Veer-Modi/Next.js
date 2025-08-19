"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blog = {
  101: {
    title: "101",
  },
  102: {
    title: "102",
  },
  103: {
    title: "103",
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Link href="/mui/Button">button</Link>
        <div></div>
        <Link href="/mui/Drawer">drawer</Link>
        <div></div>
        <Link href="/mui/Card">card</Link>
        <div></div>
        <Link href="/mui/Dialog">dialog</Link>
        <div></div>
        <Link href="/mui/Typography">typography</Link>
        <div></div>
        <Link href="/mui/Navigation/Appbar">appbar</Link>
        <div></div>
        <Link href="/mui/Navigation/Tabs">tabs</Link>
        <div></div>
        <Link href="/profile/Jenil">Profile Page</Link>
        <div></div>
        <Link href="/Blog/101">Blog</Link>
      </div>
    </>
  );
}
