"use client";
import { Button, List, Mark, Space } from "@mantine/core";
import Link from "next/link";
import { Header } from "src/app/header";

export default function page() {
  return (
    <div>
      <Header />
      <Space h="md" />
      <h1 className="text-3xl text-blue-500">Python（機械学習）の勉強方法</h1>
      <h2>機械学習習得のロードマップ</h2>
      <Space h="xs" />
      <List type="ordered" withPadding size="md">
        <List.Item>Pythonの基礎をさらっと勉強する</List.Item>
        <List.Item>
          <Mark>Pandas</Mark>
          (データ操作と分析を行うためのライブラリ)の勉強
        </List.Item>
        <List.Item>
          <Mark>Numpy</Mark>
          (数値計算を効率的かつ便利に行うためのライブラリ)を勉強する
        </List.Item>
        <List.Item>
          <Mark>Matplotlib, seaborn</Mark>
          (グラフなどを描画するためのライブラリ)を勉強する
        </List.Item>
        <List.Item>
          <Mark>scikit-learn</Mark>
          (機械学習アルゴリズムのライブラリ)を勉強する
        </List.Item>
      </List>
      <Space h="xs" />
      <Link href="/">
        <Button>Reactの勉強方法へ戻る</Button>
      </Link>
    </div>
  );
}

