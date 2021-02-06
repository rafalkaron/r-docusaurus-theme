module.exports = {
  title: 'R',
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
      title: 'R',
      logo: {
        alt: 'r-docusaurus-theme logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/section_a',
          activeBasePath: 'docs/section_a',
          label: 'Section A',
          position: 'right',
        },
        {
          to: 'docs/section_b',
          activeBasePath: 'docs/section_b',
          label: 'Section B',
          position: 'right',
        },
        {
          to: 'docs/section_c',
          activeBasePath: 'docs/section_c',
          label: 'Section C',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Mail',
              href: 'mailto:name.surname@domain.com',
            },
            {
              label: 'GitHub',
              href: '#github',
            },
            {
              label: 'Linkedin',
              href: '#linkedin',
            },
            {
              label: 'Twitter',
              href: '#twitter',
            },
            {
              label: '500px',
              href: '#500px'
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
          'docusaurus-plugin-sass',
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
