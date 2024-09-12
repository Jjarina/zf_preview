# Zoomforth marketing website 

This is the repository for the [Zoomforth marketing site](https://www.zoomforth.com).

## Running the site locally

* Clone the repository
* Install [Jekyll](https://jekyllrb.com/)
* Navigate to site directory and run `bundle exec jekyll serve`.
* Visit `127.0.0.1:4000` in your browser. Changes will be refreshed in real time.

## Creating and modifying pages

* Follow the page, layout, and include structure outlined in Jekyll documentation.
* All CSS is compiled using SCSS, edits and additions should be done in the `_sass` folder.
* Any images should be created in `.webp` with a `.jpg` or `.png` backup, any videos should be `.mp4`. Assets are stored in the `assets` folder.

### YAML information

Each webpage has yaml information, all meta data is optional, but some layouts may require this information in order to function.

* `layout` is a jekyll standard and is used to define which file from `_layouts` is used for the page.
* `permalink` is the URL for the page. By default the URL will be the filename, this overrides that.
* `meta_title` is the `<title>` for the page.
* `meta_description` is the meta description.
* `page_heading` is frequently the `<h1>` on the page.
* `page_intro` is the intro below the h1.
* `news_strip` is for the information banner that appears at the top of the site.
* `hero_media` is a media URL for when the hero has an image or video.
* `section` is unique to Use Cases.
* `noindex` is a boolean option that will add `<meta name="robots" content="noindex,nofollow">` to the `<head>`.

## Inspiration gallery

The inspiration gallery uses a data loop. Screenshots are stored in `/assets/img/inspiration` and the data for each item is stored in `/_data/gallery-items.yml`.

The data formatting is basic and automatically adds format to thumbnails (e.g. `.webp`) and the domain for links (share.zoomforth.com). The front-end files for this are in `/_layouts/inspiration.html` and `/inspiration.md`.

## Tracking and Analytics

Any tracking and analytics scripts should be added to the site via Netlify.

## Principles to follow

* *Fast.* The site should be blazing fast. Compress all media, make sure everything is minified, and only use javascript when necessary.
* *Accessible.* Everyone who visits our site should be able to experience it.
* *Resuable and extensible.* Changes and updates should be able to happen in moments, not weeks. Consider the next person who needs to make an edit.  

## Deploy process

* **Do not commit to `main`**.

* Please use a new branch for each change to the site, and manage deploys with pull requests.
* Use Netlify Previews to view deploys from your branch.
* When ready to be merged into `main`, generate a Pull Request for review, and delete branch when merged.
