---
id: site-content
title: Site content
---

You manage the content on your site by authoring Markdown files and editing the `sidebars.js` file.

## Creating content

You add content by developing Markdown files.

1. Navigate to your site directory.
2. In the `docs/` directory, create a Markdown (MD) file.  
**Example:** `Installing my solution`
3. Open the MD file and create a front matter.  
For more information about front matters, see [Docusaurus - Docs introduction](https://v2.docusaurus.io/docs/docs-introduction).  
**Example:**  

``` markdown
---
id: installing-my-solution
title: Installing my solution
---
```

4. Below the header, add your MD content.  
For more information about authoring in Markdown, see the [Markdown Style Guide](content_style_guide.md) and [MDX](content_mdx.md).
5. Save the MD file.

## Linking to content in the sidebar

You add links to the pane on the left by referring to the Markdown (MD) files IDs.

1. Navigate to your site directory.
2. In the `docs` directory, open the MD file that you want to link in the sidebar.
3. From the MD file front matter, copy the `id` value.  
**Example:**  

``` markdown
---
id: installing-my-solution
title: Installing my solution
---
```

4. In the root directory of your site, open the `sidebars.js` file.
5. In a relevant place, paste the `id` value.  
For more information, see [Docusaurus - Linking to a doc page](https://v2.docusaurus.io/docs/sidebar#linking-to-a-doc-page).
6. Save the `sidebars.js` file.
