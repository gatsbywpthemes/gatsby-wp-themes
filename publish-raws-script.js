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
  {
    name: "starter-base-dev",
    srcPath: "examples/starter-base-dev",
    packagePath: "base-theme-starters/starter-base-dev",
  },
  /*   {
    name: "starter-base-tailwind",
    srcPath: "examples/starter-base-tailwind",
    packagePath: "base-theme-starters/starter-base-tailwind",
  },
  {
    name: "starter-base-gradient-tailwind",
    srcPath: "examples/starter-base-gradient-tailwind",
    packagePath: "base-theme-starters/starter-base-gradient-tailwind",
  }, */
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
    name: "starter-ginger-dev",
    srcPath: "examples/starter-ginger-dev",
    packagePath: "pro-themes-starters/ginger-theme-starters/starter-ginger-dev",
  },
  {
    name: "starter-ginger-kitchen",
    srcPath: "examples/starter-ginger-kitchen",
    packagePath:
      "pro-themes-starters/ginger-theme-starters/starter-ginger-kitchen",
  },
  {
    name: "starter-ginger-mini",
    srcPath: "examples/starter-ginger-mini",
    packagePath:
      "pro-themes-starters/ginger-theme-starters/starter-ginger-mini",
  },
  // add here each new starter to be published
]
const subfoldersToCreate = [
  "base-theme-starters",
  "pro-themes-starters",
  "pro-themes-starters/ginger-theme-starters",
  // add here when new starters subfolder is added
]
  .map((el) => `user-starters/${el}`)
  .join(" ")

const { execSync } = require("child_process")

execSync(`rm -rf user-starters`)
execSync(`mkdir user-starters ${subfoldersToCreate}`)

for (const package of publishedPackages) {
  execSync(`cp -r ${package.srcPath} user-starters/${package.packagePath}`)
  execSync(
    `rm -rf user-starters/${package.packagePath}/node_modules user-starters/${package.packagePath}/.cache user-starters/${package.packagePath}/.env user-starters/${package.packagePath}/.env.production user-starters/${package.packagePath}/.env.development user-starters/${package.packagePath}/public user-starters/${package.packagePath}/yarn-error.log user-starters/${package.packagePath}/.vscode`
  )

  execSync(
    "echo '@gatsbywpthemes:registry=https://npm.cloudsmith.io/gatsbywpthemes/gatsby-themes/\n//npm.cloudsmith.io/gatsbywpthemes/gatsby-themes/:_authToken=${GWPT_AUTH_TOKEN}\nalways-auth' > user-starters/" +
      package.packagePath +
      "/.npmrc"
  )
}

execSync(
  `cd user-starters && zip -r base-theme-starters.zip base-theme-starters`
)

execSync(
  `cd user-starters && zip -r pro-themes-starters.zip pro-themes-starters `
)

execSync(`cd user-starters && zip -r starter-light.zip starter-light `)

execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/base-theme-starters.zip`,
  { stdio: "inherit" }
)
execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/pro-themes-starters.zip`,
  { stdio: "inherit" }
)

execSync(
  `cloudsmith push raw gatsbywpthemes/gatsby-themes user-starters/starter-light.zip`,
  { stdio: "inherit" }
)
