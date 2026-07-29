# Bloskas.us starter site

A simple static personal website built for Cloudflare Pages.

## Files

- `index.html` — page content
- `styles.css` — design and mobile styling

## Before publishing

Open `index.html` and replace the placeholder LinkedIn and GitHub links:

- `https://www.linkedin.com/`
- `https://github.com/`

You can also edit the text in any section directly.

## Deploy to Cloudflare Pages

### Easiest route: Direct Upload

1. Sign in to Cloudflare.
2. Open **Workers & Pages**.
3. Choose **Create application**.
4. Choose **Pages**.
5. Choose **Upload assets** or **Direct Upload**.
6. Upload the contents of this folder, or upload the ZIP file.
7. Name the project, such as `bloskas-site`.
8. Deploy.
9. Open the project and choose **Custom domains**.
10. Add `bloskas.us`.

### GitHub route

1. Create a GitHub repository.
2. Upload `index.html` and `styles.css`.
3. In Cloudflare Pages, choose **Connect to Git**.
4. Select the repository.
5. Use:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy and add `bloskas.us` under **Custom domains**.
