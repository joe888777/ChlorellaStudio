// module.exports = {
//   reactStrictMode: true,
//   exportPathMap: async function (defaultPathMap) {
//     return {
//       '/': { page: '/' },
//       '/contact': { page: '/contact' },
//       '/game': { page: '/game' },
//     }
//   }
// }

const debug = process.env.NODE_ENV !== 'production';
module.exports = {
assetPrefix: !debug ? '/ChlorellaStudio/' : '',
}