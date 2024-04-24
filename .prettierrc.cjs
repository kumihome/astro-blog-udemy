module.exports = {
  plugins: ["prettier-plugin-astro"], // `plugins` を使用して正しく指定
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro", // `prettier-plugin-astro`がインストールされている場合は、`astro`パーサーを使用
      },
    },
  ],
};
