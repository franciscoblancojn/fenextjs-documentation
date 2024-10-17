import { convertDocTsxToMdx } from "../functions/convertDocTsxToMdx"


const onGenerateDocComponents = async () => {
    console.log("---------------------------");
    console.log("Init generate Components" );
    console.log("---------------------------");

    const glob = new Bun.Glob("**/_.doc.tsx");

    const URL_BASE= "../fenextjs-component/src"

    for await (const path of glob.scan(URL_BASE)) {
        console.log("Component ---- " + path );
        const FILE = require("../../"+URL_BASE + "/" +path);
        const doc = FILE.default
        const mdx = convertDocTsxToMdx(doc)

        let FILEDOC = `./src/pages/components-2/${path}`.replaceAll("/_.doc.tsx",".mdx")

        await Bun.write(FILEDOC, mdx);
    }

  console.log("---------------------------");
  console.log("Finish generate Components" );
  console.log("---------------------------");
}

const main = async () => {
    await onGenerateDocComponents()

}

main()