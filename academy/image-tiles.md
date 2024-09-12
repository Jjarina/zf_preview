---
## All layout updates should be made in 'lessons.html' layout.
layout: academy-lessons
permalink: /academy/image-tiles
title: Image tiles | Zoomforth Academy
description: Using text tiles in Zoomforth sites is easy. Learn how to add links to tile captions on anchor text, social media icons, and custom icons
# This category must be equal to the corresponding title object variable in the file _data/academy
category: Advanced tips &#38; tricks
time: 30 min
# This is the title of the article. It must be equal to the corresponding title object variable in the file _data/academy
page_heading: Image tiles
subtitle-objectives: "By the end of this session on tiles and images on the Zoomforth platform, you will be able to:"
objectives:
  - Create hyperlinks and mailto links in captions for tiles
  - Copy and paste our ready-made codes to add social icons
  - Copy and paste our ready-made codes to customize your own icons
  - Create and manage circuclar images
video_tutorial: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/936213362?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Image tiles"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
# If the lesson article has a transcript of the video, video_transcript must be set to "true".
video_transcript: true
resources:
  - Add / change an image or color for a section background: https://support.zoomforth.com/en/articles/766378-add-change-an-image-or-color-for-a-section-background
  - Create a mailto call-to-action on select asset caption: https://support.zoomforth.com/en/articles/2368871-create-a-mailto-call-to-action-on-select-asset-caption
  - Aspect ratios for cropping images: https://support.zoomforth.com/en/articles/5081632-aspect-ratios-for-cropping-images
next_lesson: academy/text-tiles
---
We're going to be focusing on image tiles and text tiles, but you'll see as we go through the content that we're preparing you to build very polished team bio sections and images. So you can feel very confident sharing the qualifications of the members of your team and the skills that you'll be supporting your clients with. We also spent a lot of time speaking with our support team and getting feedback from many of you. So many of the skills that will be shown today have come from questions you have all had. We have also built out our CSS Wiki quite a bit. You will see brand new codes to utilize and some new icons to play with, and a few different variations.

## What are we going to cover today?

* How to add links to tiles, captions (a little bit of coding there), and how to add email address (mailto) links.
* How can visitors click into team bios and email you directly for more information?
* How to add social icons so you can create a little bit more flare and dynamic bios including LinkedIn badges, et cetera. We'll show you how to build your own in case the ones we've provided aren't enough.
* Walk through some best practices in terms of using circular images.

## Skill one: how to add links to tiles captions

While Zoomforth may not necessarily have a built-in feature for adding links to tile captions, there's an easy way for us to do that. You can add a link to a tile caption by going to the left-hand panel; into the caption. We want to write the link name that we want. I want to link to our contact section on the main Zoomforth site to the get in touch section.

### Step one: set up an anchor text to link to

Write out the link title. So let's just say, "get in touch", and that will be our link title. You can see the text we have for getting in touch is surrounded by what is a paragraph tag or a P tag. We want to replace the P in this case with an A. What we're doing is replacing a paragraph with an anchor tag or what we know as a link. So all you have to do is remove the P and replace that with a lowercase "a." Head out of code view, and now we have a link.

### Step two: give anchor text a link destination URL

Give this link a destination. When you click one of your newly created links in the caption section, you get four options: you can open the link, turn it into a primary or secondary button, and as for the third option, you also have an edit link or unlink as the fourth option. Unlink would just reverse what we just did and turn the anchor tag back into a paragraph. But what we are looking for is the third option, which is "Edit link." This is where it allows us to give a link destination URL to the anchor text. So we grab the URL to the contact us page, copy it, go back into "Edit link," and paste that in. We can select open in a new tab and then press update. If we press preview at the top right, we can see our site. Click on the new link, and it takes us over to the contact section for Zoomforth. So that is the first skill. Just by replacing one letter in the code view, you can make almost anything a link.

## Skill two: adding email address links

If you've ever been to a site where there is an email, and it's been made a link, you can click, and it will open up an email service local to your computer with that email already put in, ready for you to message. Let me show you how to add email address links (mailto: function) in Zoomforth. We're going to do the same step as we did in the first skill. And that is to make it a link first in the caption. In this case, I want to make the name of this link the actual email address. So, in this case, we may name it something like brittanydough@gmail.com.

Same as before, we're just replacing one letter. We're replacing the paragraph with an anchor tag both in the opening and closing. Heading back out, we have our link. So now is where the difference is. We're going to be editing the link, but instead of giving it a standard URL, we want to type "mailto" as one word and then a colon after that. Here is where you can add where the email goes. In this case, we can copy the address we have below and paste that after "mailto:" and update. It really is as simple as that. If you then click on this link in the site preview, it will open up the local email service with brittanydough@gmail.com as the destination.

## Skill three: how to add social media icons

If we head over into the CSS Wiki, into tile captions. You can see that we have something new called "add icons to links." Here you can see that we have several icons you can add before links to various social media platforms. The five we have right now are LinkedIn, mailto, Twitter, Facebook, and Google maps. To utilize these, scroll down and copy the code for the CSS into your site.

### First step: add social media icons

Let's copy this over and head back to our site. Now, as with any CSS, you can add this into your theme directly, but in this case, we'll add it to our site CSS. So that's under styling, local site styles, and edit site CSS. Let me just copy this in here. Once you've done that, you want to go into the section or the tile and add the class so we can add "Link icon" here.

### The next step: create a link to social media icons

Same as before. We want to create a link to these social media icons. But the way these icons work, if the URL contains LinkedIn it will give you a LinkedIn icon. If the URL contains mailto, it will convert to a little email icon. Same with Twitter, Facebook, and Google maps. So first, we're going to do the first step we did, which is creating a link. So we might write LinkedIn under Brittany Dough's image if that's what we want to link. Select that, go into code view, replace the paragraph with an anchor tag, and head back out. Now we want to go into "Edit link" and write "www.linkedin.com." There we go. As we can see, we get a little LinkedIn icon before the text.

### Condensed social icons

We don't just have one version of this as we saw, this is the standard version, but if we go back to the wiki, we also have a condensed version that only shows the icon for the destination, but the links work just fine. The one thing to note if you're using the condensed version is making sure that the name and position of the text are one type of heading like H1 through H4 instead of a paragraph because paragraphs would be for the icons. So how would you use the second version? Well, that depends on the CSS class that you're using. The main CSS class is "linked icon," but if you want to use the condensed version, you can simply remove that and write "link icon condensed." That gives you the other styling that we have available. Just as a styling tip, I would recommend central aligning everything. I think the condensed version looks better that way. You can also add an icon for Twitter. If we say Twitter in the caption, convert that again into an "a," head back out, and let's say www.twitter.com. Of course, you would copy the user account, but I'm just writing Twitter for this example. Then the Twitter icon would show up right next to the LinkedIn one.

## Skill four: how to add custom icons

What we've done is prepare five icons that should cover a lot of use cases. But if you find that you have another use case, another type of icon that you want to add, we'll show you exactly how you would do that. Let's say I want to link to a user profile on Zoomforth, I might want to add our company logo. You might have the same custom icons use case for your companies. Same step as before; we'll start with adding some text in the caption and convert that text into a link. Here is where it's different. We want to create our own icon, but in the CSS that the CSS class Wiki has, at the very bottom of what we copy we have a section where we can add our own URLs.

**How does this work?** Let me just give you a little rundown of how the CSS works. If you write Zoomforth in the site CSS, it will display the icon URL you write. The only thing we have to do is to add a URL to the icon that we need. In this case, the way we create a URL for the icon is to head into the theme. If you go up to the top left, you can upload a file that will generate a URL for you. So I click here, "choose file," and grab my icon. Then it will upload it and give me a public URL that I can use.

Copying that over, heading back into the CSS, I'll just paste where it says, add icon. Now, let us see if that works. So let's go back to "Edit link" and set the URL to Zoomforth.com. And here, we get a little Zoomforth icon of our brand. You could do the exact same thing for whichever brand. Let's say you want to link to your profile in the tile or any other use case. So again, that is creating a link as normal, but then at the very bottom of the CSS, selecting which URL you want to apply to, and the second step is to upload the icon you want to use to through the theme editor, which will give you a little link that you can put here for the icon. So that is how we can add your very own icons.

## Circular images and best practices

Our crop feature has a border-radius feature where you can round out your images, but you may have tried this and added a tile caption and found it doesn't look quite right the way that it's cutting off the image. The solution is instead of adding a tile caption, add a regular text tile right under the image. It's helpful to have a high column count. This allows you to work with smaller text tiles like this, and control the sizing a lot easier this way.

Not only will this optimize circular images, but we are able to show off some of the icon links we've been using so far. So I've done several optimizations. This may be an aesthetic preference, but when the images are squared, I prefer to make the text a bit smaller than when I round out the corners. Another thing is, sometimes in your themes, you don't always control the padding, right? So in this case, compared to the image the text is too far or it's too close. So how would you fix that? You would fix that by going into the Wiki, under text, and here you have ways to alter the padding. You can take the CSS class "no top padding" and copy that into your site in the site CSS; then, you can add the class, "no top padding" to your tile. This will close the gap between the text and the image.

You may think: I've added it, but now it's too close. Instead of it being too far, now it's too close. Well, when you add something from the Wiki, it has a preset value but you can set custom values. So while it says no top padding, you can set the padding in the CSS yourself. In this case, I might set the padding to 2em or 5em, but that's a bit too much. By the way, em is the measurement that I would prefer to use. That keeps things very responsive in Zoomforth. In this case, I may go for 0.3, 0.4, 0.2, let's say, 0.3. And that way, I can finally adjust the padding I want for the image.

## Mobile responsiveness

Something to watch out for, if you're adding a text tile under an image on mobile we just want to make sure that everything shows up in the correct order. So in the mobile preview, let me head down to the section. As we can see, the images stack on top of each other, and then the text. So we want to be diligent about this in the way I've done in this section below. And that is to actually reorder the tiles. So the image shows up on top of the text, and I like to go into setting, mobile order priority, and then I work in the minus. So I go minus one, minus two, minus three, et cetera. And the very last thing is the sizing on mobile.

So if you have a circular image, you may find it doesn't fit the same way it does with a square image. It fits edge to edge. It may be more fitting to have it be a bit smaller. You can [use a CSS class]({{'academy/introduction-css-classes'|relative_url}}){:target="_blank"} that we have under images in the wiki, which is the mobile icon. You can copy it over and set a custom size under the Mac site. That allows you to make the images the appropriate size on mobile.

## QA

How can I link it to a file in the media file, which is not a PDF?

* Similar to our expand media function, where it opens up when you click one of the links. Say it opens up a PDF, or it opens up an overlay of some kind. That is a bit trickier to do from here in the tile captions. But you would do a little bit of a workaround, perhaps by sorting that link out in a textile first, then copying that over into your tile caption.
