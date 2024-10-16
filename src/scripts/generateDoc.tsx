import { convertDocTsxToMdx } from "../functions/convertDocTsxToMdx"
import DocBack from '../../../fenextjs-component/src/Back/_.doc';

const main = async () => {
    const mdx = convertDocTsxToMdx(DocBack)
    await Bun.write("./src/pages/test.mdx", mdx);

}

main()