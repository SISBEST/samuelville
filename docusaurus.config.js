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
          label: 'SV Transit',
          position: 'left'
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Laws',
          position: 'left',
        },
        {
          href: 'https://explore.samuelville.tk',
          label: 'Explore',
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
          href: 'https://api.samuelville.tk',
          label: 'Developer',
          position: 'left'
        },
        {
          to: 'blog',
          label: 'Newscenter & Blog',
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SamuelVille.`,
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
