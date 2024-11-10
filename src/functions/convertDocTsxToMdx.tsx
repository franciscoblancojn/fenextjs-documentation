const BASE_URL_STORYBOOK_IFRAME =
  "https://fenextjs-component-storybook.vercel.app/iframe.html?args=&id=";
const BASE_URL_STORYBOOK =
  "https://fenextjs-component-storybook.vercel.app/?path=/story/";

export interface convertDocTsxToMdxProps {
  useStorybook?: boolean;
  useUses?: boolean;
}

export function convertDocTsxToMdx(
  docTsx: any,
  options: convertDocTsxToMdxProps,
): string {
  const {
    name,
    description,
    props,
    extras,
    useExample,
    minHeightIframe,
    functions,
    interfaces,
    properties,
    useImport
  } = docTsx;

  const URL_STORYBOOK_IFRAME =
    BASE_URL_STORYBOOK_IFRAME + docTsx.idStorybook + "--index";
  const URL_STORYBOOK = BASE_URL_STORYBOOK + docTsx.idStorybook + "--index";

  let mdxContent = "";
  mdxContent += `# ${name}\n\n${description}\n\n`;
  if (options.useStorybook) {
    mdxContent += `import { Iframe } from "@/components/Iframe"; \n\n`;
    // Sección de Ejemplo (puede ser estática)
    mdxContent += `### Ejemplo\n\n<Iframe minHeightIframe="${minHeightIframe ?? "30dvh"}" src="${URL_STORYBOOK_IFRAME}&viewMode=story" />\n\n`;
  }

  if ((functions == undefined || functions.length == 0) && useImport!==false) {
    // Sección de Importación
    mdxContent += `### Importacion\n\n`;
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
    mdxContent += `### Parametros\n\n`;
    mdxContent += `| Parametro | Tipo | Requerido | Default | Descripcion |\n`;
    mdxContent += `| --------- | ---- | --------- | ------- | ----------- |\n`;

    props.forEach((prop: any) => {
      mdxContent += `| ${prop.id} | ${fixCharacter(prop.type)} | ${prop.require ? "sí" : "no"} | ${fixCharacter(prop.default || "")} | ${prop.description} |\n`;
    });
  }

  // Sección de Extras (Redireccionamiento)
  if (extras && extras.length > 0) {
    extras.forEach((extra: any) => {
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
      mdxContent += convertDocTsxToMdx(example, options);
      mdxContent += `\n\n`;
    });
  }
  if (interfaces && interfaces.length > 0) {
    // mdxContent += `### Funciones\n\n`;

    interfaces.forEach((example: any) => {
      mdxContent += convertDocTsxToMdx(example, options);
      mdxContent += `\n\n`;
    });
  }
  if (properties && properties.length > 0) {
    // mdxContent += `### Funciones\n\n`;

    properties.forEach((example: any) => {
      mdxContent += convertDocTsxToMdx(example, options);
      mdxContent += `\n\n`;
    });
  }

  return mdxContent;
}
