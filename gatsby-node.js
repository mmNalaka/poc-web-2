const path = require("path")
const StoryblokClient = require("storyblok-js-client")

const getStoryBlokData = () => {
  Storyblok.get("cdn/stories", {
    token: "4zLB1uOlBxP2da9sm6iuzgtt",
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve("src/templates/storyblok-entry.js")

    resolve(
      graphql(
        `
          {
            stories: allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.stories.edges

        const pages = entries.filter(item => {
          const content = JSON.parse(item.node.content)
          return content.component === "page"
        })

        pages.forEach((entry, index) => {
          const pageContent = JSON.parse(entry.node.content)

          const pageLayout = pageContent.layout
          const pageHeaderTheme = pageContent.headerTheme

          const pagePathArray = entry.node.full_slug.split("/")
          const layoutDirPath =
            pagePathArray.length > 1 ? pagePathArray.slice(0, 1) : []
            layoutDirPath.push(pageLayout)
          const layoutPath = layoutDirPath.join("/")

          const layout = entries.filter(item => {
            return item.node.full_slug === layoutPath
          })

          const pagePath =
            entry.node.full_slug == "home" ? "" : `${entry.node.full_slug}`

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              layout: layout[0].node,
              story: entry.node,
              headerTheme: pageHeaderTheme
            },
          })
        })
      })
    )
  })
}
