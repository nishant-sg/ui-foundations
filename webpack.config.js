module.exports = {
    mode: 'none',
    output: {
      filename: 'main.js',
    libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };