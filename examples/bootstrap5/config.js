const config = {
  siteUrl: "https://gatsby-wp-b5.netlify.app/",
  webfontsOptions: {
    fonts: {
      google: [
        {
          family: "Prata",
        },
        {
          family: "Fira Sans",
          variants: ["300", "300i", "700"],
        },
      ],
    },
  },
  //gaUniversalTrackingId: "UA-186757931-1",
  gaUniversalOptions: {
    head: true,
  },
  GTagGATrackingId: "G-V63SJWDYCJ",
  GTagOptions: {
    pluginConfig: {
      // Puts tracking script in the head instead of the body
      head: true,
    },
  },
}

module.exports = config
