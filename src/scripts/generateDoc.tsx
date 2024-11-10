import {
  convertDocTsxToMdx,
  convertDocTsxToMdxProps,
} from "../functions/convertDocTsxToMdx";

interface onGenerateDocProps {
  name: string;
  URL_BASE: string;
  page: string;

  options: convertDocTsxToMdxProps;
}

const onGenerateDoc = async ({
  URL_BASE,
  name,
  options,
  page,
}: onGenerateDocProps) => {
  const Bun_ = eval("Bun");
  console.log("---------------------------");
  console.log(`Init generate ${name}`);
  console.log("---------------------------");

  const glob = new Bun_.Glob("**/_.doc.tsx");

  for await (const PATH of glob.scan(URL_BASE)) {
    let path = PATH;
    console.log(`${name} ---- ` + path);
    const FILE = require("../../" + URL_BASE + "/" + path);
    const doc = FILE.default;
    if (options.useStorybook) {
      try {
        const STORYBOOK = require(
          "../../" +
            URL_BASE +
            "/" +
            `${path}`.replaceAll("_.doc.tsx", "_.stories.tsx"),
        );
        const storybook = STORYBOOK.default;
        const idStorybook = `${storybook.title}`
          .toLowerCase()
          .replaceAll("/", "-");
        doc.idStorybook = idStorybook;
      } catch (error) {
        console.log("Error Storybook ---- " + path);
        error;
      }
    }

    const mdx = convertDocTsxToMdx(doc, options);

    if (path == "_t/_.doc.tsx") {
      path = "t/_.doc.tsx";
    }

    const FILEDOC = `./src/pages/${page}/${path}`
      .replaceAll("/_.doc.tsx", ".mdx")
      .toLowerCase();

    await Bun_.write(FILEDOC, mdx);
  }

  console.log("---------------------------");
  console.log(`Finish generate ${name}`);
  console.log("---------------------------");
};

const main = async () => {
  await onGenerateDoc({
    name: "Components",
    URL_BASE: "../fenextjs-component/src",
    page: "components",
    options: {
      useStorybook: true,
      useUses: true,
    },
  });
  await onGenerateDoc({
    name: "Interfaces",
    URL_BASE: "../fenextjs-interface/src",
    page: "interface",
    options: {},
  });
  await onGenerateDoc({
    name: "Error",
    URL_BASE: "../fenextjs-error/src",
    page: "error",
    options: {},
  });
  await onGenerateDoc({
    name: "Functions",
    URL_BASE: "../fenextjs-functions/src",
    page: "functions",
    options: {
      useUses: true,
    },
  });
  await onGenerateDoc({
    name: "Firebase",
    URL_BASE: "../fenextjs-firebase/src",
    page: "firebase",
    options: {
      useUses: true,
    },
  });
  await onGenerateDoc({
    name: "Date",
    URL_BASE: "../fenextjs-date/src",
    page: "date",
    options: {
      useUses: true,
    },
  });
};

main();
