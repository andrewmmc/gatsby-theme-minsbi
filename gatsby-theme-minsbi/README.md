# gatsby-theme-minsbi
![Publish](https://github.com/andrewmmc/gatsby-theme-minsbi/workflows/Publish/badge.svg)

Welcome to `gatsby-theme-minsbi`, a Gatsby theme by [Andrew Mok](https://andrewmmc.com). It's a simple Gatsby theme for blog and static website. Use it easily to create contents by `Markdown`.

![Demo](https://github.com/andrewmmc/gatsby-theme-minsbi/raw/master/gatsby-theme-minsbi/README1.png)

## Preview
* [Demo Website](https://gatsby-theme-minsbi.andrewmmc.dev)

## 🚀 Getting started
```bash
npm i gatsby-theme-minsbi
## or
yarn gatsby-theme-minsbi
```

## How to use
Edit `gatsby-config.js` and replace `siteMetadata` by the following configs:
```js
module.exports = {
  siteMetadata: {
    title: '',
    author: 'Author Name',
    authorDescription: 'Author description here!',
    description: 'Site description',
    siteUrl: 'https://examplesite.com',
    seoKeywords: [],
    location: 'Hong Kong',
    email: 'no-reply@email.com',
    social: {
      github: 'github',
      linkedin: '',
      facebook: 'facebook',
      instagram: 'instagram',
      twitter: 'twitter',
      medium: '',
    },
  },
}
```

And add the following configs to `plugins` array:
```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-minsbi',
      // You can edit the following options, or ignore them if you don't care. 
      // Note that siteName is required for RSS.
      options: {
        siteName: '',
        showIntro: false,
      },
    },
  ],
}
```

| Options                     | Required? | Description                                                     |
|-----------------------------|-----------|-----------------------------------------------------------------|
| `siteName` (string)         | Y         | Required for RSS                                                |
| `showIntro` (boolean)        | N         | Show introduction in home page                                  |
| `compactMode` (boolean)      | N         | DEPRECATED           |

## Writing contents and replacing images
Check `example-site` for the sample folder structure for blog posts, about page. 

You can replace the markdown files in `content` to update your website. You can change the images by replacing images in `assets` folder.

```
.
├── assets
|   ├── about.jpg
|   └── ...
├── content
|   ├── about
|   |   └── index.md
|   ├── blog
|   |   ├── 2020
|   |   |   └── title
|   |   |       └── index.md
|   |   └── ...
└── ...
```

## Customizing the theme
To customize the colors used in the theme, shadow the files inside `src/gatsby-theme-minsbi/themes`. To extend the colors usage, import the base colors and export a new color object. Check [Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) for the usage.

## Author
- [Andrew Mok](https://andrewmmc.com) (@andrewmmc)

## Questions or bugs report?
- Please feel free to [open an issue here](../../issues) or [contact me via email](mailto:hello@andrewmmc.com).