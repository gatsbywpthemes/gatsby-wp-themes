import React, { createContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

export const SeoSiteSettingsContext = createContext()

export const SeoSiteSettingsContextProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
          language
        }
      }
    }
  `)

  return (
    <SeoSiteSettingsContext.Provider value={{ ...data.wp.generalSettings }}>
      {children}
    </SeoSiteSettingsContext.Provider>
  )
}
