const path = require(`path`)


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
        allShopifyProduct(sort: {fields: [title]}) {
          edges {
            node {
              title
              shopifyId
              handle
            }
          }
        }
      }
      
  `)
  createPage({
    path: `/products`,
    component: path.resolve(`./src/templates/CatalogTemplate/CatatogTemplate.js`),
    context: {
      product: result.data.allShopifyProduct.edges,
    },
  })
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/ProductTemplate/ProductTemplate.js`),
      context: {
        shopifyId: node.shopifyId,
      },
    })
  })
}