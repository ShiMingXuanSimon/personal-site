export default {
  title: 'SMXS 的个人主页',
  description: 'ShiMingXuanSimon 的个人主页',
  head: [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'alternate icon', href: '/favicon.png', sizes: '32x32' }]
],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '实验', link: '/playground.html' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ShiMingXuanSimon/Site-ClassScoreManageSystem' }
    ]
  }
}