
# Login Design

A small front-end project containing a login page plus separate signup and profile pages. The project demonstrates simple HTML/CSS/JavaScript structure with modular styles and scripts per page.

Overview
- `index.html`: Login page (uses `styles.css` and `login.js`).
- `signup.html`: Signup page (uses `signup.css` and `signup.js`).
- `profile.html`: Profile page (uses `profile.css` and `profile.js`).
- `users.js`: Shared user-data helper (if applicable).

Quick start
1. Open `index.html` in your browser to view the login page.
2. Or serve the folder with a simple HTTP server for correct module/asset loading:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes
- `styles.css` is used by `index.html` (login page) only.
- The signup and profile pages use Bootstrap (as required) and have their own CSS files: `signup.css` and `profile.css`.
- Each page has a corresponding JS file to handle page-specific logic: `login.js`, `signup.js`, and `profile.js`.



