# bloskas.us

Minimal professional website for Cale Bloskas.

## Cloudflare settings

- Production branch: `main`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

## Updating the site

Edit the files inside `public/`, commit the changes to the `main` branch,
and Cloudflare will automatically deploy the update.


## Animated signature

The homepage now uses `public/cale-bloskas-signature.png` with a CSS handwriting
reveal. It is not a GIF, so it remains sharp and lightweight. Edit the animation
timing in the `.signature-reveal` and `.signature-pen` rules in `public/styles.css`.
