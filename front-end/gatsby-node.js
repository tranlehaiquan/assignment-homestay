/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = async ({
  actions: { createNode },
  getCache,
  createNodeId,
  node,
}) => {
  if (node.internal.type === 'StrapiRoom') {
    if (node.preview) {
      const fileNode = await createRemoteFileNode({
        url: `${process.env.API_URL}${node.preview.url}`,
        getCache,
        createNode,
        createNodeId,
        parentNodeId: node.id,
      });

      if (fileNode) {
        node.previewRemoteImage = fileNode.id;
        node.previewRemoteImage___NODE = fileNode.id;
      }
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const RoomTemplate = path.resolve('./src/templates/RoomDetail.tsx');
  const PageTemplate = path.resolve('./src/templates/Page.tsx');

  const result = await graphql(`
    query SiteTitleQuery {
      allStrapiRoom {
        nodes {
          id
          description
          guests
          categories {
            name
            id
          }
          summary
          strapiId
          size
          name
          isSpecial
          bed
          roomType
          images {
            id
            url
            formats {
              large {
                publicURL
              }
            }
          }
          facilities {
            icon
            label
            id
            name
          }
          previewRemoteImage {
            childImageSharp {
              fluid(jpegQuality: 80) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }

      allStrapiPage {
        nodes {
          id
          strapiId
          name
          slug
          description
        }
      }
    }
  `);

  if (result.data && !!result.data.allStrapiRoom) {
    result.data.allStrapiRoom.nodes.forEach(node => {
      createPage({
        path: `/room/${node.id}`,
        component: RoomTemplate,
        context: {
          ...node,
        },
      });
    });
  }

  if (result.data && !!result.data.allStrapiPage) {
    result.data.allStrapiPage.nodes.forEach(node => {
      const slug = node.slug || node.name.toLowerCase().replace(' ', '-');
      createPage({
        path: `/${slug}`,
        component: PageTemplate,
        context: {
          ...node,
        },
      });
    });
  }
};
