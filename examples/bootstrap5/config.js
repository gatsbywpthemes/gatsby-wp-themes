const config = {
  wordPressUrl: `https://wp-pehaa.xyz/five-boots`,
  //pathPrefix: "",

  siteUrl: "https://gatsby-wp-b5.netlify.app/",
  fonts: ["Prata", "Fira Sans:300,700"],
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
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home", "contact"],
  lightboxSettings: {},
}

module.exports = config
