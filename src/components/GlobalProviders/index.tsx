"use client";

import AntdRegistry from "@ant-design/nextjs-registry/lib/AntdRegistry";
import { ReactNode } from "react";
import AntdDesignProvider from "../AntdDesignProvider";

interface Props {
  defaultTheme: string;
  children: ReactNode;
}
export default function GlobalProviders({ defaultTheme, children }: Props) {
  return (
    <AntdRegistry>
      <AntdDesignProvider defaultTheme={defaultTheme}>{children}</AntdDesignProvider>
    </AntdRegistry>
  );
}
