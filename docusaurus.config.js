module.exports = {
  title: "R", // The page title that displays in your web browser tab
  tagline: "A simple Docusaurus theme focused on the docs.", // Your site description
  url: "https://www.rafalkaron.github.io/r-docusaurus-theme/", // Your site address
  baseUrl: "/", // Leave as is
  onBrokenLinks: "throw", // Leave as is
  onBrokenMarkdownLinks: "warn", // Leave as is
  favicon: "img/favicon.svg", // The path to your favicon
  organizationName: "rafalkaron", // The name of your organization (usually, your GitHub username)
  projectName: "r-docusaurus-theme", // The name of your project (usually, your GitHub repository name)
  themeConfig: {
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
        style: "dark", // Leave as is
        links: [
          {
          items: [
            {
              label: "Mail",
              href: "mailto:name.surname@domain.com", // Fill in with your email address
              icon: "/src/media/icons/mail.svg",
            },
            {
              label: "GitHub",
              href: "#github", // Fill in with a link to your GitHub account
              icon: "/src/media/icons/github.svg",
            },
            {
              label: "LinkedIn",
              href: "#linkedin", // Fill in with a link to your LinkedIn account
              icon: "/src/media/icons/linkedin.svg",
            },
            {
              label: "Twitter",
              href: "#twitter", // Fill in with a link to your Twitter account
              icon: "/src/media/icons/twitter.svg",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Name Surname`,
    },
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
