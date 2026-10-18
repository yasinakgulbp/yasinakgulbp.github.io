# BP96 STUDIO — public developer website

Live: https://yasinakgulbp.github.io/

This repository contains only public website files. The Akış app source is in the separate private `akis-reading` repository. Signing keys, passwords and account credentials must never be added here.

- `index.html`: studio/app introduction and support contact.
- `privacy.html`: Turkish and English privacy policies, distinguished by app version.
- `app-ads.txt`: BP96 AdMob authorized seller declaration at the website root.
- `.nojekyll`: serve these static files directly.

GitHub Pages serves the root of the `main` branch with HTTPS. Edit a file through GitHub, commit the change, and check the repository's Pages deployment. The site has no server, database, build dependency, custom-domain renewal or paid hosting subscription. GitHub Pages is currently included for public repositories on GitHub Free. The repository/account must remain available and comply with GitHub policies; permanent availability is not guaranteed by this project.

Keep the developer website in Play Console set to `https://yasinakgulbp.github.io/`. Keep the privacy URL reachable. When data collection changes, update the relevant version's policy before publishing the app. If the AdMob publisher account changes, update `app-ads.txt` to the new authorized publisher. Keep a local ZIP backup of these files; they can be hosted by another static provider if needed.

Do not rename the GitHub account or this user-site repository without planning the URL migration first.

Sources: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site and https://support.google.com/admob/answer/9363762
