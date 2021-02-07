export const galleryStyles = {
  "[data-parsed-gallery]": {
    display: "grid",
    gap: "1rem",
    marginBottom: "1.5rem",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    "&.columns-3": {
      "@media(min-width: 40em)": {
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
      },
    },
    "&.columns-4": {
      "@media(min-width: 40em)": {
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      },
    },
    "&.columns-5": {
      "@media(min-width: 40em)": {
        gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
      },
    },
    "&.columns-6": {
      "@media(min-width: 40em)": {
        gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
      },
    },
    "&.columns-7": {
      "@media(min-width: 40em)": {
        gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
      },
    },
  },

  "[data-parsed-gallery] > *:last-of-type:nth-of-type(2n+1)": {
    gridColumn: "span 2",
    "@media(min-width: 40em)": {
      gridColumn: "span 1",
    },
  },
  "[data-parsed-gallery].columns-3 > *:last-of-type:nth-of-type(2n+1)": {
    "@media(min-width: 40em)": {
      gridColumn: "span 2",
    },
  },
  "[data-parsed-gallery].columns-2 > *:last-of-type:nth-of-type(2n+1), [data-parsed-gallery].columns-3 > *, [data-parsed-gallery].columns-4 > *:nth-last-of-type(2):nth-of-type(4n+1), [data-parsed-gallery].columns-4 > *:last-of-type:nth-of-type(4n+2)": {
    "@media(min-width: 40em)": {
      gridColumn: "span 2",
    },
  },
  "[data-parsed-gallery].columns-3 > *:last-of-type:nth-of-type(3n+1):nth-of-type(2n)": {
    "@media(min-width: 40em)": {
      gridColumn: "span 6",
    },
  },
  "[data-parsed-gallery].columns-3 > *:last-of-type:nth-of-type(3n+1):nth-of-type(2n+1)": {
    gridColumn: "span 2",
    "@media(min-width: 40em)": {
      gridColumn: "span 6",
    },
  },
  "[data-parsed-gallery].columns-3 > *:nth-last-of-type(2):nth-of-type(3n+1), [data-parsed-gallery].columns-3 > *:last-of-type:nth-of-type(3n+2)": {
    "@media(min-width: 40em)": {
      gridColumn: "span 3",
    },
  },

  "[data-parsed-gallery]:not(.is-cropped) a img": {
    height: "auto!important",
  },
}
