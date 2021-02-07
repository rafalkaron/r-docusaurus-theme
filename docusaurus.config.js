module.exports = {
  title: "R",
  tagline: "A simple Docusaurus theme focused on the docs.",
  url: "https://www.rafalkaron.github.io/r-docusaurus-theme/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "rafalkaron",
  projectName: "r-docusaurus-theme",
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: "\u{25CB}",
        darkIcon: "\u{25CF}",
        darkIconStyle: {
          color: `#f4f4f4`,
        },
        lightIconStyle: {
          color: `#f4f4f4`,
        },
      },
    },

    navbar: {
      title: "R",
      logo: {
        alt: "r-docusaurus-theme logo",
        src: "img/logo.svg",
      },
      items: [
        // {
        //   to: '/',
        //   activeBasePath: '/',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {
          to: "https://www.github.com/rafalkaron/r-docusaurus-theme",
          src: "img/icons/github.svg",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              label: "Mail",
              href: "mailto:name.surname@domain.com",
              icon: "/src/media/icons/mail.svg",
            },
            {
              label: "GitHub",
              href: "#github",
              icon: "/src/media/icons/github.svg",
            },
            {
              label: "Linkedin",
              href: "#linkedin",
              icon: "/src/media/icons/linkedin.svg",
            },
            {
              label: "Twitter",
              href: "#twitter",
              icon: "/src/media/icons/twitter.svg",
            },
            {
              label: "500px",
              href: "#500px",
              icon: "/src/media/icons/500px.svg",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Name Surname`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs",
          routeBasePath: "/",
        },
        plugins: [],
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
