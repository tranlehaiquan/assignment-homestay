// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-icons-tsx": () => import("./../../../src/pages/icons.tsx" /* webpackChunkName: "component---src-pages-icons-tsx" */),
  "component---src-pages-index-tsx": () => import("./../../../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-templates-page-tsx": () => import("./../../../src/templates/Page.tsx" /* webpackChunkName: "component---src-templates-page-tsx" */),
  "component---src-templates-room-detail-tsx": () => import("./../../../src/templates/RoomDetail.tsx" /* webpackChunkName: "component---src-templates-room-detail-tsx" */)
}

