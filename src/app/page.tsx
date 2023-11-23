"use client";
import { Button, Space } from "@mantine/core";
import Link from "next/link";
import { Header } from "src/app/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Space h="md" />
      <h1 className="text-3xl text-blue-500">Reactの勉強方法</h1>
      <h2>Udemyの講座</h2>
      <ul>
        <li>
          最新ver対応済】モダンJavaScriptの基礎から始める挫折しないためのReact入門
        </li>
        <Link href="https://www.udemy.com/share/103Fxl3@gFCfFCgSIxZVEm53Ih-8GEU98yrt38hFGcDC5B-hqwnqVAiLz6kV4Km78MM3nSoJuA==/">
          <Button variant="subtle">Udemyの講座へジャンプ</Button>
        </Link>
        <li>
          Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版
        </li>
        <Link href="https://www.udemy.com/share/104d6k3@15TCXGei2dYt6HQEgXao9JMdzAJ3ZIxY1iRBlFIiQB_TKVCP47u6-cuXYHCf1-1msw==/">
          <Button variant="subtle">Udemyの講座へジャンプ</Button>
        </Link>
      </ul>
      <Link href="page1">
        <Button>Pythonの勉強方法へ</Button>
      </Link>
    </div>
  );
}
