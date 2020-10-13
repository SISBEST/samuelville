module.exports = {
  title: 'SamuelVille',
  tagline: 'Official Government Website',
  url: 'https://samuelville.tk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'SISBEST',
  projectName: 'samuelville',
  themeConfig: {
    navbar: {
      title: 'SamuelVille',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://transit.samuelville.tk',
          label: 'Transit',
          position: 'left'
        },
        {
          to: 'lrb',
          label: 'LRB',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Laws',
          position: 'left',
        },
        {
          to: 'health',
          label: 'Health',
          position: 'left'
        },
        {
          to: 'education',
          label: 'Education',
          position: 'left'
        },
        {
          to: 'safety',
          label: 'Public Safety',
          position: 'left'
        },
        {
          to: 'voting',
          label: 'Voting',
          position: 'left'
        },
        {
          to: 'taxes',
          label: 'Taxes',
          position: 'left'
        },
        {
          href: 'https://explore.samuelville.tk',
          label: 'Explore',
          position: 'left'
        },
        {
          to: 'blog',
          activeBasePath: 'blog',
          label: 'Press',
          position: 'left'
        },
        {
          href: 'https://api.samuelville.tk',
          label: 'Developer',
          position: 'left'
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} The SamuelVille Government. SV Copyright #00A1DEF9461C`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'home',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
