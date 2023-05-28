"use client";
import { Button } from "@mantine/core";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Page1です</h1>
      <Link href="/">
        <Button>戻る</Button>
      </Link>
    </div>
  );
}