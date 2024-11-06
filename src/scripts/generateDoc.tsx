import { convertDocTsxToMdx } from "../functions/convertDocTsxToMdx";

const onGenerateDocComponents = async () => {
  const Bun_ = eval("Bun");
  console.log("---------------------------");
  console.log("Init generate Components");
  console.log("---------------------------");

  const glob = new Bun_.Glob("**/_.doc.tsx");

  const URL_BASE = "../fenextjs-component/src";

  for await (const path of glob.scan(URL_BASE)) {
    console.log("Component ---- " + path);
    const FILE = require("../../" + URL_BASE + "/" + path);
    const doc = FILE.default;

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

    const mdx = convertDocTsxToMdx(doc);

    let FILEDOC = `./src/pages/components/${path}`
      .replaceAll("/_.doc.tsx", ".mdx")
      .toLowerCase();

    await Bun_.write(FILEDOC, mdx);
  }

  console.log("---------------------------");
  console.log("Finish generate Components");
  console.log("---------------------------");
};

const main = async () => {
  await onGenerateDocComponents();
};

main();
