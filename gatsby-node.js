const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // const { data } = await graphql(`
  //   query Projects {
  //     allMarkdownRemark {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)
  // data.allMarkdownRemark.nodes.forEach(node => {
  //   actions.createPage({
  //     path: '/blogs/' + node.frontmatter.slug,
  //     component: path.resolve('./src/templates/blog.js'),
  //     context: { slug: node.frontmatter.slug }
  //   })
  // })
  // actions.createPage({
  //   path: '/blogs/',
  //   component: path.resolve('./src/blogs/pravin.js'),
  // })
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
