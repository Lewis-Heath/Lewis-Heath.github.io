# Lewis-Heath.github.io

Portfolio site for Lewis Heath, programmer at BULKHEAD. Live at <https://lewis-heath.github.io/>.

A single static page with no build step: plain HTML, CSS and a small script, served by GitHub Pages.

## Structure

```
index.html          The whole page
css/style.css       All styling; colours and spacing are variables at the top
js/main.js          Reveals sections as they scroll into view
favicon.svg         Browser tab icon
images/games/       Game images (official screenshots from each game's Steam page)
images/og-image.jpg Preview image shown when the link is shared
```

## Editing

- **Text:** edit `index.html` directly.
- **Accent colour:** change `--accent` at the top of `css/style.css`.
- **Adding a game:** copy one of the `<article class="game">` blocks in `index.html`, add a 1920×1080 image to `images/games/`, and update the `01 / 03` counters. On phones the image is cropped around `--focus-x` (set on the `<img>`), so set that to where the subject is, left to right.

Animations respect the "reduce motion" accessibility setting, and the page is fully visible without JavaScript.

To preview locally, open `index.html` in a browser.
