"use client";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-blue-500">Hello Next.js13 template</h1>
      <h2>h2です</h2>
      <h3>h3です</h3>

      <Link href="page1">
        <Button>page1へ</Button>
      </Link>
    </div>
  );
}
