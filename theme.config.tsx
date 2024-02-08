import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./src/components/Logo";

const config: DocsThemeConfig = {
  logo: <span><Logo/></span>,
  project: {
    link: "https://github.com/franciscoblancojn/fenextjs",
  },
  footer: {
    text: <Logo/>,
  },
  
};

export default config;
