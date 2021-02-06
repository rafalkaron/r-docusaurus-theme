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
        plugins: ['docusaurus-plugin-sass'],
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
