/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar'
import articleStyles from '../../styles/articleStyles'
import gutenberg from '../../styles/theme-gutenberg'

const Page = ({ page }) => {
  const {
    title,
    excerpt,
    content,
    slug,
    uri,
    template: { templateName },
  } = page
  const pageTemplate = templateName.toLowerCase()
  const { skipTitle, layoutWidth, sidebarWidgets } = useThemeOptions()

  const ogType = page.isFrontPage ? 'website' : 'article'
  const sidebarPage = pageTemplate.includes('sidebar')

  const containerStyles =
    sidebarWidgets && sidebarPage
      ? {
          '.entry': {
            width: [`100%`, `100%`, `100%`, `70%`],
          },
          '.sidebar': { width: [`100%`, `100%`, `100%`, `30%`] },
        }
      : { maxWidth: layoutWidth.page }

  const sidebarSide = sidebarPage
    ? pageTemplate === `left sidebar`
      ? {
          flexDirection: `row-reverse`,
          '.entry': { pl: [0, 0, 0, layoutWidth.page] },
        }
      : pageTemplate === `right sidebar`
      ? { '.entry': { pr: [0, 0, 0, layoutWidth.page] } }
      : ''
    : ''

  return (
    <Layout page={page} type="page">
      <SEO
        title={title}
        description={excerpt}
        ogType={ogType}
        ogUrl={ogType === 'website' ? '' : uri}
      />
      <Container sx={{ ...containerStyles }} className="mainContainer">
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
              borderBottom: `none`,
            }}
            className="entry"
          >
            <div className="content page-content" sx={{ borderRadius: `s` }}>
              {skipTitle &&
                !skipTitle.includes(slug) &&
                skipTitle !== 'all' && (
                  <h1
                    className="page-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}

              <Box className="entry-content" sx={{ ...gutenberg }}>
                <ParsedContent content={content} />
              </Box>
            </div>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
