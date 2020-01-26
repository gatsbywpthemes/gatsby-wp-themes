/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box } from 'theme-ui'
import Layout from '../Layout'
import ParsedContent from '../../utils/ParsedContent'
import SEO from '../seo/Seo'
import useThemeOptions from 'gatsby-theme-blog-data/src/hooks/useThemeOptions'
import Sidebar from '../Sidebar'
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
      <Container sx={{ ...containerStyles }} className="container">
        <Flex
          sx={{
            ...sidebarSide,
          }}
        >
          <article className="entry">
            <div className="content page-content">
              {!skipTitle.includes(slug) && skipTitle !== 'all' && (
                <Styled.h1
                  className="page-title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              <Styled.root>
                <Box className="entry-content" sx={{ ...gutenberg }}>
                  <ParsedContent content={content} />
                </Box>
              </Styled.root>
            </div>
          </article>
          {sidebarPage && <Sidebar widgets={sidebarWidgets} />}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Page
