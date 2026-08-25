# Shana Hu Portfolio

This is a React portfolio site with a tag-filtered masonry gallery, an Info view,
and a lightweight project viewer for projects with one or more images.

## Add Work

1. Add the original image to `public/images`.
2. Add a web-sized display copy to `public/images/optimized`.
3. Add or update an entry in `src/portfolioItems.js`.

Each portfolio item supports:

- `title`: project title.
- `summary`: short text shown in the project viewer.
- `tags`: any of `textiles`, `type`, `red-envelopes`, `zines`, `prints`.
- `cover`: the image used in the homepage gallery.
- `images`: optional extra images for the click-through project viewer.

Images should include accurate `width` and `height` values so the masonry layout
can reserve space before each image loads.

## Image Speed

Keep originals in `public/images`, but use smaller display assets from
`public/images/optimized` in the gallery. A long edge around 1600px is a good
default for current images. Animated GIFs can stay in `public/images` and be
used only inside project detail views, with a still PNG/JPG as the cover.

## Local Development

```sh
npm install
npm start
```

Open `http://localhost:3000`.

## Build

```sh
npm run build
```
