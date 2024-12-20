export const main = async () => {
  // const Bun_ = eval("Bun");

  await Bun.write("../fenextjs-component/src/Button/README2.md", "test", {
    createDirs: true,
  });
};
main();
