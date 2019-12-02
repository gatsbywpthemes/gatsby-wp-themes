/** @jsx jsx */
import { jsx, Styled, Container, Flex } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar'
import articleStyles from '../../styles/articleStyles'

const Page = ({ page }) => {
  const { title, excerpt, content, slug, uri } = page
  const {
    widgetAreas: { sidebar },
  } = useThemeOptions()
  const ogType = page.isFrontPage ? 'website' : 'article'
  const { widgets } = sidebar
  const sidebarPage =
    sidebar.location.pages === 'all' || sidebar.location.pages.includes(slug)
  const sidebarPosition = sidebar.position

  const containerStyles =
    widgets && sidebarPage
      ? {
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: `l` }

  const sidebarSide = sidebarPage
    ? sidebarPosition === `left`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, `l`] },
        }
      : { '.entry': { pr: [0, 0, 0, `l`] } }
    : ''

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : uri}
      />
      <Container sx={{ ...containerStyles }}>
        <Flex
          sx={{
            ...sidebarSide,
            flexWrap: [`wrap`, `wrap`, `wrap`, `nowrap`],
            alignItems: `flex-start`,
          }}
        >
          <article
            sx={{
              ...articleStyles,
              width: `100%`,
            }}
            className="entry"
          >
            <div className="content page-content" sx={{ borderRadius: `s` }}>
              <Styled.h1
                className="page-title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Styled.root>
                <ParsedContent content={content} />
              </Styled.root>
            </div>
          </article>
          {sidebarPage && <Sidebar />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page