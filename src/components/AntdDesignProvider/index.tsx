"use client";

import { App, ConfigProvider, theme } from "antd";
import React from "react";

interface Props {
  defaultTheme?: string;
  children: React.ReactNode;
}

export default function AntdDesignProvider({ children }: Props) {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <App message={{ maxCount: 3 }} notification={{ maxCount: 3 }}>
        {children}
      </App>
    </ConfigProvider>
  );
}
