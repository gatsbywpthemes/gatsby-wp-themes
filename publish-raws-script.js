const publishedPackages = [
  {
    name: "starter-base",
    srcPath: "examples/starter-base",
    packagePath: "base-theme-starters/starter-base",
  },
  {
    name: "starter-base-gradient",
    srcPath: "examples/starter-base-gradient",
    packagePath: "base-theme-starters/starter-base-gradient",
  },
  /*
  {
    name: "starter-base-legacy",
    srcPath: "examples/starter-base-legacy",
    packagePath: "base-theme-starters/starter-base-legacy",
  },
  {
    name: "starter-base-gradient-legacy",
    srcPath: "examples/starter-base-gradient-legacy",
    packagePath: "base-theme-starters/starter-base-gradient-legacy",
  },
  {
    name: "starter-base-dev-legacy",
    srcPath: "examples/starter-base-dev-legacy",
    packagePath: "base-theme-starters/starter-base-dev-legacy",
  },
  */
  {
    name: "starter-light",
    srcPath: "examples/starter-light",
    packagePath: "starter-light",
  },
  {
    name: "starter-ginger",
    srcPath: "examples/starter-ginger",
    packagePath: "pro-themes-starters/ginger-theme-starters/starter-ginger",
  },
  {
    name: "starter-agency",
    srcPath: "examples/starter-agency",
    packagePath: "pro-themes-starters/agency-theme-starters/starter-agency",
  },
  {
    name: "starter-ginger-kitchen",
    srcPath: "examples/starter-ginger-kitchen",
    packagePath:
      "pro-themes-starters/ginger-theme-starters/starter-ginger-kitchen",
  },
  // {
  //   name: "starter-ginger-mini",
  //   srcPath: "examples/starter-ginger-mini",
  //   packagePath:
  //     "pro-themes-starters/ginger-theme-starters/starter-ginger-mini",
  // },
  // add here each new starter to be published
];
const subfoldersToCreate = [
  "base-theme-starters",
  "pro-themes-starters",
  "pro-themes-starters/ginger-theme-starters",
  "pro-themes-starters/agency-theme-starters",
  // add here when new starters subfolder is added
]
  .map((el) => `user-starters/${el}`)
  .join(" ");

const { execSync } = require("child_process");

execSync(`rm -rf user-starters`);
execSync(`mkdir user-starters ${subfoldersToCreate}`);

for (const package of publishedPackages) {
  execSync(`cp -r ${package.srcPath} user-starters/${package.packagePath}`);
  execSync(
    `rm -rf user-starters/${package.packagePath}/node_modules user-starters/${package.packagePath}/.cache user-starters/${package.packagePath}/.env user-starters/${package.packagePath}/.env.production user-starters/${package.packagePath}/.env.development user-starters/${package.packagePath}/public user-starters/${package.packagePath}/yarn-error.log user-starters/${package.packagePath}/.vscode`
  );

  execSync(
    "echo '@gatsbywpthemes:registry=https://gatsbywpthemes.nodejs.pub/\n//gatsbywpthemes.nodejs.pub/:_authToken=${GWPT_AUTH_TOKEN}' > user-starters/" +
      package.packagePath +
      "/.npmrc"
  );
}

execSync(
  `cd user-starters && zip -r base-theme-starters.zip base-theme-starters`
);

execSync(
  `cd user-starters && zip -r pro-themes-starters.zip pro-themes-starters `
);

execSync(`cd user-starters && zip -r starter-light.zip starter-light `);

// publishing start here

execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/base-theme-starters.zip`,
  { stdio: "inherit" }
);
execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/pro-themes-starters.zip`,
  { stdio: "inherit" }
);

execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/starter-light.zip`,
  { stdio: "inherit" }
);
