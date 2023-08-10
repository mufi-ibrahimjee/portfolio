module.exports = {
  output: "export",
  reactStrictMode: true,
  eslint: {
    dirs: [
      "pages",
      "utils",
      "components",
      "atoms",
      "styles",
      "hooks",
      "locales",
    ],
  },
  images: {
    domains: ["icons.elipa.co", "resources.elipa.co"],
    unoptimized: true,
  },
};
