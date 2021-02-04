exports.createPages = async (
  { store, actions, graphql, reporter },
  options
) => {
  /**
   * Merged default theme settings and user settings.
   */

  const state = store.getState()
  const plugin = state.flattenedPlugins.find(
    (plugin) => plugin.name === 'gatsby-plugin-webfonts'
  )
  if (plugin) {
    console.log('!!!!!!FOUND YOU')
    const favicon = await graphql(`
      query {
        wp {
          gatsbywpthemes {
            favicon {
              localFile {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `)
    console.log(plugin.pluginOptions.fonts.google)
    plugin.pluginOptions.fonts.google = [
      { family: 'Arbutus', variants: undefined },
    ]

    plugin.pluginOptions = {
      ...plugin.pluginOptions,
    }
    console.log(plugin.pluginOptions.fonts.google)
  }
}
