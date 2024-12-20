const BASE_URL_STORYBOOK_IFRAME =
  "https://fenextjs-component-storybook.vercel.app/iframe.html?args=&id=";
const BASE_URL_STORYBOOK =
  "https://fenextjs-component-storybook.vercel.app/?path=/story/";

export interface convertDocTsxToMdxProps {
  useStorybook?: boolean;
  useUses?: boolean;
  subTitle?: boolean;
}

export function convertDocTsxToMdx(
  docTsx: any,
  NAME: string,
  options: convertDocTsxToMdxProps,
): {
  mdxContent: string;
  mdxReadme: string;
} {
  const {
    name,
    description,
    code,
    props,
    extras,
    useExample,
    minHeightIframe,
    functions,
    interfaces,
    properties,
    useImport,
    useBreadcrumb,
    html,
    returns,
    extrasReturns,
  } = docTsx;

  const URL_STORYBOOK_IFRAME =
    BASE_URL_STORYBOOK_IFRAME + docTsx.idStorybook + "--index";
  const URL_STORYBOOK = BASE_URL_STORYBOOK + docTsx.idStorybook + "--index";

  let mdxReadme = "";
  let mdxContent = "";

  let Breadcrumb = "";
  if (useBreadcrumb === false) {
    Breadcrumb = `---
breadcrumb: false
---
`;
    mdxContent += Breadcrumb;
  }

  mdxContent += `#${options.subTitle === true ? "#" : ""} ${name}\n\n${description}\n\n`;
  let ModuleStorybook = "";
  if (options.useStorybook) {
    ModuleStorybook += `import { Iframe } from "@/components/Iframe"; \n\n`;
    // Sección de Ejemplo (puede ser estática)
    ModuleStorybook += `### Ejemplo\n\n<Iframe minHeightIframe="${minHeightIframe ?? "30dvh"}" src="${URL_STORYBOOK_IFRAME}&viewMode=story" />\n\n`;
    mdxContent += ModuleStorybook;
  }

  if (
    ((functions == undefined || functions.length == 0) &&
      useImport !== false) ||
    useImport === true
  ) {
    // Sección de Importación
    mdxContent += `### Importación\n\n`;
    mdxContent += `Para importar el componente ${name}, se puede hacer desde fenextjs\n\n`;
    mdxContent += `\`\`\`tsx copy\nimport { ${name} } from "fenextjs";\n\`\`\`\n\n`;
  }
  const fixCharacter = (d: string) =>
    `${d}`
      .replaceAll("}", "\\}")
      .replaceAll("{", "\\{")
      .replaceAll("<", "\\<")
      .replaceAll(">", "\\>")
      .replaceAll("|", "\\|");
  if (props && props.length > 0) {
    // Sección de Parámetros
    mdxContent += `### Parámetros\n\n`;
    mdxContent += `| Parámetro | Tipo | Requerido | Default | Descripcion |\n`;
    mdxContent += `| --------- | ---- | --------- | ------- | ----------- |\n`;

    props.forEach((prop: any) => {
      mdxContent += `| ${prop.id} | ${fixCharacter(prop.type)} | ${prop.require ? "sí" : "no"} | ${fixCharacter(prop.default || "")} | ${fixCharacter(prop.description)} |\n`;
    });
  }

  // Sección de Extras (Redireccionamiento)
  if (extras && extras.length > 0) {
    extras.forEach((extra: any) => {
      mdxContent += `\n### ${extra.title}\n\n${extra.description}\n\n`;
      if (extra?.code) {
        mdxContent += `\`\`\`tsx copy\n${extra?.code}\n\`\`\`\n\n`;
      }

      if (extra.tableItems && extra.tableItems.length > 0) {
        mdxContent += `| ${Object.keys(extra.tableItems[0]).join(" | ")} |\n`;
        mdxContent += `| ${Object.keys(extra.tableItems[0])
          .map(() => "---")
          .join(" | ")} |\n`;
        extra.tableItems.forEach((item: any) => {
          mdxContent += `| ${Object.values(item).map(fixCharacter).join(" | ")} |\n`;
        });
      }
    });
  }
  if (returns && returns.length > 0) {
    // Sección de Parámetros
    mdxContent += `### Returns\n\n`;
    mdxContent += `| Parametro | Tipo | Descripcion |\n`;
    mdxContent += `| --------- | ---- | ----------- |\n`;

    returns.forEach((prop: any) => {
      mdxContent += `| ${prop.id} | ${fixCharacter(prop.type)}  | ${fixCharacter(prop.description)} |\n`;
    });
  }

  if (extrasReturns && extrasReturns.length > 0) {
    extrasReturns.forEach((extra: any) => {
      mdxContent += `\n### ${extra.title}\n\n${extra.description}\n\n`;
      if (extra.tableItems && extra.tableItems.length > 0) {
        mdxContent += `| ${Object.keys(extra.tableItems[0]).join(" | ")} |\n`;
        mdxContent += `| ${Object.keys(extra.tableItems[0])
          .map(() => "---")
          .join(" | ")} |\n`;
        extra.tableItems.forEach((item: any) => {
          mdxContent += `| ${Object.values(item).map(fixCharacter).join(" | ")} |\n`;
        });
      }
    });
  }
  if (options?.useStorybook) {
    // Sección de Storybook (puede ser estática)
    mdxContent += `\n### Storybook\n\n`;
    mdxContent += `Para ver el storybook del componente lo puede hacer con este [link](${URL_STORYBOOK})\n\n`;
  }
  if (html) {
    mdxContent += `${html}\n\n`;
  }
  if (code) {
    mdxContent += `\`\`\`tsx copy\n${code}\n\`\`\`\n\n`;
  }

  if (options?.useUses && useExample && useExample.length > 0) {
    // Sección de Usos
    mdxContent += `### Usos\n\n`;
    useExample.forEach((example: any) => {
      mdxContent += `- ${example.text}\n\n`;
      mdxContent += `\`\`\`tsx copy\n${example.content}\n\`\`\`\n\n`;
    });
  }

  if (functions && functions.length > 0) {
    // mdxContent += `### Funciones\n\n`;

    functions.forEach((example: any) => {
      mdxContent += convertDocTsxToMdx(example, NAME, {
        ...options,
        subTitle: true,
      }).mdxContent;
      mdxContent += `\n\n`;
    });
  }
  if (interfaces && interfaces.length > 0) {
    // mdxContent += `### Funciones\n\n`;

    interfaces.forEach((example: any) => {
      mdxContent += convertDocTsxToMdx(example, NAME, {
        ...options,
        subTitle: true,
      }).mdxContent;
      mdxContent += `\n\n`;
    });
  }
  if (properties && properties.length > 0) {
    // mdxContent += `### Funciones\n\n`;

    properties.forEach((example: any) => {
      mdxContent += convertDocTsxToMdx(example, NAME, {
        ...options,
        subTitle: true,
      }).mdxContent;
      mdxContent += `\n\n`;
    });
  }

  mdxReadme = mdxContent.replace(ModuleStorybook, "").replace(Breadcrumb, "");
  if (NAME == "img-placeholder") {
    const urlImg = html.replace(/.*src="([^"]+)".*/, "$1");
    const img = `![alt ${name}](${urlImg})`;
    mdxReadme = mdxReadme.replace(html, img);
  }
  return {
    mdxContent,
    mdxReadme,
  };
}
