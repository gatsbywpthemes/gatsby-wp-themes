const p = {
  fontSize: ["base"],
  lineHeight: "body",
  mb: 5,
}
const a = {
  transition: "all .2s",
  color: "accent",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
}
const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  a: {
    borderBottom: "none",
  },
}

const h1 = {
  ...heading,
  fontSize: ["3xl", "4xl"],
  // mt: 1,
}
const h2 = {
  ...heading,
  fontSize: ["2xl", "3xl"],
  // mt: 1,
}

const h3 = {
  ...heading,
  fontSize: ["xl", "2xl"],
  // mt: 2,
}
const h4 = {
  ...heading,
  fontSize: ["lg", "xl"],
}

const h5 = {
  ...heading,
  fontSize: "xm",
}
const h6 = {
  ...heading,
  fontSize: "xs",
}

const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

module.exports = {
  baseFontSize: "16px",
  fonts: {
    body: "Coda",
    heading: "Baumans",
  },

  base,
}
