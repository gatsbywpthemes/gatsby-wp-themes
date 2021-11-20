const config = {
  webfontsOptions: {
    fonts: {
      google: [{ family: "Baumans" }, { family: "Coda" }],
    },
  },
  gatsbySourceWordPressOptions: {
    schema: {
      perPage: 20, // currently set to 100
      requestConcurrency: 5, // currently set to 15
      previewRequestConcurrency: 1, // currently set to 5
    },
  },
}

module.exports = config
