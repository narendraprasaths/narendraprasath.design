module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ["worlduniversityofdesign.ac.in"],
  },
  generateBuildId: () => "build",
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
