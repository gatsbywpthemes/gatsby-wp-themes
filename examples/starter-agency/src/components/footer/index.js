import React from "react"
import FooterMenu from "./FooterMenu"
import { SocialFollows } from "~/components/social"
import { useStaticQuery, graphql } from "gatsby"
import { FaHome as HomeIcon, FaPhoneAlt as PhoneIcon } from "react-icons/fa"
import { SubscribeForm } from "@gatsbywpthemes/gatsby-theme-acf-builder/src/SubscribeForm"
import clsx from "clsx"

const FooterColumn = ({ children, title, className = "" }) => {
  return (
    <div
      className={`footer-column w-full sm:w-1/2 md:w-1/4 px-3  ${className}`}
    >
      {title && (
        <h3 className=" text-lg font-bold uppercase tracking-wider mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

export const Footer = () => {
  const info = useStaticQuery(graphql`
    query {
      wp {
        themeOptions {
          companyInfo {
            address
            company
            phone
          }
        }
      }
    }
  `)
  const { address, company, phone } = info.wp.themeOptions.companyInfo

  return (
    <footer className={clsx(" bg-footerBg text-footerColor")}>
      <div className=" center-container flex flex-wrap sm:flex-nowrap justify-between gap-8 py-10">
        <FooterColumn className="space-y-3" title="contact">
          <div className="flex">
            <HomeIcon className="mr-4 text-3xl" />
            <span dangerouslySetInnerHTML={{ __html: address }} />
          </div>
          <div className="flex">
            <PhoneIcon className="mr-4 text-3xl" />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </FooterColumn>
        <FooterColumn title="The agency">
          <FooterMenu location="FOOTER_MENU_1" />
        </FooterColumn>
        <FooterColumn title="legal">
          <FooterMenu location="FOOTER_MENU_2" />
        </FooterColumn>
        <FooterColumn title="Newsletter">
          <SubscribeForm />
        </FooterColumn>
      </div>
      <div className="copyright text-center space-y-5 pt-5 pb-10 border-t border-neutral-600">
        Copyright © {new Date().getFullYear()}
        <span className="font-bold"> {company}</span>
        <div className="flex justify-center">
          <SocialFollows
            className="flex space-x-2 text-center"
            iconClassName="text-2xl"
          />
        </div>
      </div>
    </footer>
  )
}
