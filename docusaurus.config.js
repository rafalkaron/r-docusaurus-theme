module.exports = {
  title: 'R-Docusaurus-Theme',
  tagline: 'A simple theme focused on the docs.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'rafalkaron', // Usually your GitHub org/user name.
  projectName: 'r-docusaurus-theme', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
      switchConfig: {
        lightIcon: '\u{25CB}',
        darkIcon: '\u{25CF}',
        darkIconStyle: {
          color: `#FFFFFF`,
        },
        lightIconStyle: {
          color: `#FFFFFF`,
        },
      },
    },

    navbar: {
      title: 'R-Docusaurus-Theme',
      logo: {
        alt: 'r-docusaurus-theme logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/',
        //   activeBasePath: '/',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          to: 'https://www.github.com/rafalkaron/r-docusaurus-theme',
          src: 'img/icons/github.svg',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Mail',
              href: 'mailto:name.surname@domain.com',
              icon: '/src/media/icons/mail.svg',
            },
            {
              label: 'GitHub',
              href: '#github',
              icon: '/src/media/icons/github.svg',
            },
            {
              label: 'Linkedin',
              href: '#linkedin',
              icon: '/src/media/icons/linkedin.svg',
            },
            {
              label: 'Twitter',
              href: '#twitter',
              icon: '/src/media/icons/twitter.svg',
            },
            {
              label: '500px',
              href: '#500px',
              icon: '/src/media/icons/500px.svg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Name Surname`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          routeBasePath: '/',
          
        },
        plugins: [
          '@docusaurus/plugin-sitemap',
          {
            cacheTime: 600 * 1000, // 600 sec - cache purge period
            changefreq: 'weekly',
            priority: 0.5,
            trailingSlash: false,
          },
          '@docusaurus/plugin-pwa',
          {
            debug: true,
            offlineModeActivationStrategies: ['appInstalled', 'queryString'],
            pwaHead: [
              {
                tagName: 'link',
                rel: 'icon',
                href: '/img/logo.png',
              },
              {
                tagName: 'link',
                rel: 'manifest',
                href: '/manifest.json', // your PWA manifest
              },
              {
                tagName: 'meta',
                name: 'theme-color',
                content: '#5f0f40',
              },
            ],
          },
        ],
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
