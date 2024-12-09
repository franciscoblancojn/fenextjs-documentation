import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./src/components/Logo";

const config: DocsThemeConfig = {
  logo: <span><Logo/></span>,
  project: {
    link: "https://github.com/fenextjs/fenextjs",
  },
  footer: {
    text: <Logo/>,
  },
  editLink:{
    component:null
  },
  feedback:{
    content:null
  },
  toc:{
    title:"En esta pagina"
  }
  
};

export default config;
