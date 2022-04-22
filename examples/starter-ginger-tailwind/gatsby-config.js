const fs = require("fs");
require("dotenv").config({
  path:
    (fs.existsSync(`.env.${process.env.NODE_ENV}`) &&
      `.env.${process.env.NODE_ENV}`) ||
    ".env",
});

module.exports = {
  plugins: [
    `@gatsbywpthemes/gatsby-plugin-gwpt-tailwind`,
    // `gatsby-plugin-postcss`,
  ],
};
