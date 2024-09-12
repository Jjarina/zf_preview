---
## All layout updates should be made in 'lessons.html' layout.
layout: academy-lessons
permalink: /academy/custom-embeds
title: Custom embeds | Zoomforth Academy
description: Make customized inlays of different tools for your website
# This category must be equal to the corresponding title object variable in the file _data/academy
category: Advanced tips &#38; tricks
time: 10 min
# This is the title of the article. It must be equal to the corresponding title object variable in the file _data/academy
page_heading: Custom embeds
subtitle-objectives: "By the end of this session, you will be able to:"
objectives:
  - Use embeds to enrich your site with content hosted outside of Zoomforth
video_tutorial: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/936219005?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Custom embeds"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
# If the lesson article has a transcript of the video, video_transcript must be set to "true".
video_transcript: true
resources:
  - Add embeds that won't work with normal URLs: https://support.zoomforth.com/en/articles/2097036-add-embeds-that-won-t-work-with-normal-urls
  - How to embed a google calendar to a zoomforth site: https://support.zoomforth.com/en/articles/3837048-embed-a-published-calendar-to-your-site
  - Embed a published calendar to your site: https://support.zoomforth.com/en/articles/3837048-embed-a-published-calendar-to-your-site
  - Add Join Zoom meeting button to your website: https://support.zoomforth.com/en/articles/4757104-add-join-zoom-meeting-button-to-your-website
next_lesson: academy/accessibility
---
You can leverage content hosted on third-party platforms and bring them into a Zoomforth site by using either the embed feature or custom HTML packages.

I’ll quickly walk through some of them.

* You can add graphs
* Add a map so you can include the location of your office in your sites
* You can also add a social feed, added through a custom HTML package
* Include a calendar, documents, forms, articles, and zoom meetings

Most of us are working remotely. Remember that you can add the registration link for your Zoom meetings directly on a Zoomforth site, and once the call is done, you can swap that out for the actual recording.

## Google Maps Embed

Let's go into Google maps and pick a random place. Let's say we want to go to Haulover Park. Once you've picked the location you want to share, click on the embedded map icon, the 5th icon, copy the link, and go to your site editor. We should add it under the map subpage. For the purpose of the example I'm going to create a new section. Select embed and copy the code. As is, it's not working. What you want to do is remove everything that's before HTTPS, then remove everything that's after the URL. Now it allows me to create the section, and we're done. So that's the first one, pretty straightforward. Going back to Google maps, where you see the iframe information at the end of the URL, whatever embed you're trying to do, remove that. Why? Because in Zoomforth when you use the embed section, we already create an iframe for you, so you don't need that information. We just need the URL.

## Twitter Embed

Our design team has created an HTML template for the Twitter feed.

**Step one**: Figure out what we want to embed. There is a site that allows us to do this. Go to publish.twitter.com and we can decide what we want to show. I've decided we want to show our Zoomforth Twitter account. Then it asks, what do I want to embed? I want to embed our timeline. So I'm going to pick that one. Here it generates a code so I can embed our Zoomforth tweets. You can also customize the window by setting the height and the width. In the height box I can say it's 300. Update, and now I'm going to copy that code.

**Step two**: Open the custom HTML package provided by Zoomforth with TextMate. I'm using a MacBook. If you're using a PC, we'll have some suggestions on the website on how to open it. This is just a text editor so I can go in and open the file. I know this looks a little scary, but don't worry. We'll share the exact directions step by step. I want to remove lines 9 through 11 of the code. Paste the one that we've just copied and Save As. Just be sure that you don't change the name. It should be called index HTML. And it must be a lowercase "i," don't capitalize it. Just save it.

Now we're going to click on the file that I've created, and compress it. By compressing it, it just creates a zip file. Now that we have our HTML package ready, we're going to go to this site editor, new section HTML package, upload the zip file from my computer, select the file, click open, and that's how you embed a Twitter feed.
