"use client";

import { Button, message } from "antd";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    message.info("我点击了按钮");
  };

  return (
    <div className={styles.page}>
      <Button type="primary" onClick={handleClick}>
        点击 message 提示
      </Button>
    </div>
  );
}
