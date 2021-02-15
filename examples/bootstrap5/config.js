const config = {
  wordPressUrl: `https://wp-pehaa.xyz/five-boots`,
  //pathPrefix: "",

  siteUrl: "https://gatsby-wp-b5.netlify.app/",
  social: [
    {
      name: `twitter`,
      url: `https://twitter.com/gatsbyjs`,
    },
    {
      name: `GitHub`,
      url: `https://github.com/gatsbyjs`,
    },
    {
      name: `Discord`,
      url: `https://gatsby.dev/discord`,
    },
  ],
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
  //googleTagManagerId: "GTM-K3CF7RK",
  // addSiteMap: false,
  // siteMapOptions: {},
  // instantWPSearch: false,
  // addColorModes: false,
  skipTitle: ["home", "contact"],
  lightboxSettings: {},
  favicon: "static/icon.svg",
  manifestOptions: {
    background_color: `#ffffff`,
  },
}

module.exports = config
