module.exports = {
    title: "Klipps", // The page title that displays in your web browser tab
    tagline: "Klipps enables you to export your Kindle clippings to a static site.  ", // Your site description
    url: "https://rafalkaron.github.io/klipps/", // Your site address
    baseUrl: "/Klipps/", // Leave as is
    onBrokenLinks: "throw", // Leave as is
    onBrokenMarkdownLinks: "warn", // Leave as is
    favicon: "img/favicon.svg", // The path to your favicon
    organizationName: "rafalkaron", // The name of your organization (usually, your GitHub username)
    projectName: "klipps", // The name of your project (usually, your GitHub repository name)
    themeConfig: {
        sidebarCollapsible: false,
        navbar: {
            title: "Klipps",
            logo: {
                alt: "Klipps logo",
                src: "img/logo.svg",
            },
        },
        footer: {
            style: "dark", // Leave as is 
            links: [
                {
                    items: [
                        {
                            label: "Mail",
                            href: "mailto:rafalkaron@gmail.com", // Fill in with your email address
                            icon: "/src/media/icons/mail.svg",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/rafalkaron", // Fill in with a link to your GitHub account
                            icon: "/src/media/icons/github.svg",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/in/rafa%C5%82-karo%C5%84-39534516b", // Fill in with a link to your LinkedIn account
                            icon: "/src/media/icons/linkedin.svg",
                        },
                        {
                            label: "Twitter",
                            href: "https://www.twitter.com/rafalkaron", // Fill in with a link to your Twitter account
                            icon: "/src/media/icons/twitter.svg",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Rafał Karoń`, // Replace with your name and surname
        },
        colorMode: {
            // Dark/Light Mode switcher. You can leave this as is or play around if you are curious!
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
        // Leave as is
        [
            "@docusaurus/preset-classic",
            {
                blog: false,
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    path: "./docs",
                    routeBasePath: "/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
