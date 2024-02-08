import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./src/components/Logo";

const config: DocsThemeConfig = {
  logo: <span><Logo/></span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: <Logo/>,
  },
  
};

export default config;
