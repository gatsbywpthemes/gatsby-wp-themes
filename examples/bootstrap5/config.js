const config = {
  wordPressUrl: `https://wp-pehaa.xyz/five-boots`,
  //pathPrefix: "",

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
  addWordPressSearch: true,
  //googleTagManagerId: "GTM-K3CF7RK",
  // addSiteMap: false,
  // siteMapOptions: {},
  // addColorModes: false,
  skipTitle: ["home", "contact"],
}

module.exports = config
