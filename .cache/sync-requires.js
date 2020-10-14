const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/src/pages/404.js"))),
  "component---src-pages-icons-tsx": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/src/pages/icons.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/src/pages/index.tsx"))),
  "component---src-templates-page-tsx": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/src/templates/Page.tsx"))),
  "component---src-templates-room-detail-tsx": hot(preferDefault(require("/Users/quantranlehai/GitHub/assignment-homestay/front-end/src/templates/RoomDetail.tsx")))
}

