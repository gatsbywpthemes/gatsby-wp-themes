import React from "react"
import { Helmet } from "react-helmet"

export const SeoSiteVerifications = ({ verifications }) => {
  return (
    <>
      <Helmet>
        {verifications.googleVerify && (
          <meta
            name="google-site-verification"
            content={verifications.googleVerify}
          />
        )}
      </Helmet>
    </>
  )
}
