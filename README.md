# Sehrish Maqsood — Portfolio Site

A single-page portfolio site: About, Work History, Skills, Results, and Contact.

## Files

- `index.html` — page structure and content
- `styles.css` — all styling
- `script.js` — small optional enhancement (copy phone/email to clipboard)

## How to view it

Just open `index.html` in any browser (Chrome, Safari, Edge, Firefox). No build step, no server required.

## How to publish it for free (GitHub Pages)

1. Create a new GitHub repo and upload these three files (`index.html`, `styles.css`, `script.js`) to the root.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. GitHub will give you a live URL like `https://<username>.github.io/<repo-name>/` within a minute or two.

## Notes

- The tabs at the top, the "Work History" entries, and the mobile menu all work using plain HTML/CSS (radio buttons and `<details>` elements) — no JavaScript required for any of that.
- The only JavaScript is the "Copy" button next to the phone number and email in the Contact tab.
