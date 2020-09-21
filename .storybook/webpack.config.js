const path = require("path");

module.exports = async ({ config, mode }) => {
  const r = config.module.rules[0];

  r.use &&
    r.use[0] &&
    r.use[0].options &&
    r.use[0].options.plugins.push([
      "import",
      {
        libraryName: "antd",
        style: "css",
      },
    ]);

  config.module.rules[0] = r;

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../"),
  });

  // console.dir(config.plugins, { depth: null })

  return config;
};
