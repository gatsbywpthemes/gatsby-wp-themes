import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { SeoOptionsContext } from "./../context"

export const SeoSiteVerifications = () => {
  const { seoGlobalSettings } = useContext(SeoOptionsContext)
  console.log(useContext(SeoOptionsContext))
  return (
    <>
      <Helmet>
        {seoGlobalSettings?.webmaster.googleVerify && (
          <meta
            name="google-site-verification"
            content={seoGlobalSettings?.webmaster.googleVerify}
          />
        )}
      </Helmet>
    </>
  )
}
