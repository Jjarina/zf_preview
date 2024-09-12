---
## All layout updates should be made in 'lessons.html' layout.
layout: academy-lessons
permalink: /academy/designing-mobile
title: Designing for mobile devices | Zoomforth Academy
description: Learn more about designing for mobile devices and screen sizes on Zoomforth sites layouts
# This category must be equal to the corresponding title object variable in the file _data/academy
category: Advanced tips &#38; tricks
time: 27 min
# This is the title of the article. It must be equal to the corresponding title object variable in the file _data/academy
page_heading: Designing for mobile devices and screen sizes
subtitle-objectives: "By the end of this session on responsive website design tips, you will be able to:"
objectives:
  - Edit icon sizes on mobile view to align with the name or description
  - Adjust mobile text and image tile heights
  - Use padding on text sections to manage space between tiles on mobile
video_tutorial: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/936218299?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Designing for mobile"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
# If the lesson article has a transcript of the video, video_transcript must be set to "true".
video_transcript: true
resources:
  - Checking your site in mobile view: https://support.zoomforth.com/en/articles/6067807-checking-your-site-in-mobile-view
  - Disable mobile site view: https://support.zoomforth.com/en/articles/1683236-disable-mobile-site-view
  - Custom grid tile ordering on mobile: https://support.zoomforth.com/en/articles/4354501-custom-grid-tile-ordering-on-mobile
  - Add a section background for mobile site viewing: https://support.zoomforth.com/en/articles/1683281-add-a-section-background-for-mobile-site-viewing
next_lesson: academy/custom-embeds
---
## Responsive website design tips and best practices

### Tip one: perform physical mobile responsiveness tests

Remember to perform a mobile responsiveness test on a physical device. I know this may seem quite obvious, but the site editor is only a preview of mobile. I would go as far as to suggest testing on an apple or Android device to ensure that your site includes the correct spacing and padding between your sections. So check for text boxes or an image order to ensure that it makes sense and that you've replaced any hero images with an image placeholder. Remember a hero video will not render on mobile. You need to replace it with an image or solid color for the mobile view.

### Tip two: check links behind your mobile buttons

Mobile buttons. A common oversight we see is including buttons on your site but forgetting to add the relevant links to connect the visitor with your call to action. A quick click or a test of each is highly recommended.

### Tip three: keep mobile UX design principles in mind

Keep mobile UX design principles in mind as you build your site. So with speed of connectivity more important than ever, users expect the same kind of experience when browsing through their smartphones. If possible, try not to have infinite scrolling sites; break your content up. Break it into subpages or add anchor links so visitors can see relevant content quickly.

I know those are simple tips, but they can make a big impact on your end-user experience. We recommend this as a quick checklist before publishing and sharing your sites.

## Skill one: multiple grids on mobile view

A common issue we see is when we [use image tiles]({{'academy/image-tiles'|relative_url}}){:target="_blank"}, the image covers the entire screen on mobile. This isn't great for the user experience because it covers all of it. But it also doesn't tell you if the image is part of the text below unless it has a header that tells you so. The first thing that we need to do is copy the [CSS class]({{'academy/introduction-css-classes'|relative_url}}){:target="_blank"} we have set up, and we're going to paste it into the [site editor]({{'platform-site-editor'|relative_url}}){:target="_blank"}, or you can also paste it into the theme editor. So step number one, paste it. You can see over, we highlighted some values. These values can be changed into whatever you want. In step two, we'll copy the class name: three grids, and paste it into each of these tile images.

Now we can preview our mobile view, and you can see the difference. Instead of it taking up all of the mobile screen, it only takes a third part of the screen. It shrinks the image and now it's in context with the text below. You can also see that if you have three images in the background, you can place them next to each other.

## Skill two: mobile tile text height

So what is the issue? If we use text tiles with only a heading and another text tile below it with copy, on mobile this will expand. What it does is create a specific height for each of the text tiles. It creates a huge gap between the title and the text below creating a bad visual for the user. To fix this, we have to copy the CSS and paste it into your site editor, or you can also paste it in your theme editor. Step two, copy the class name. In this case, it's "small height-on-mobile," then paste it into the sections we want to apply it to. I'm going to paste it over the tile to show you the difference. Now let's preview the changes.

When we scroll down on the mobile view, we can see the space between the two looks a lot better, right? As I said, you can change the red values to suit your needs. If you want less of a gap, you can also reduce where it says 100 to 50 pixels. It will reduce the gap between the text and the heading.

Let's say we have [many text tiles]({{'academy/text-tiles'}}|relative_url){:target="_blank"} across your site and you don't want to add the class one by one. The solution is to copy the CSS and paste it into the site editor or your theme editor. This is going to automatically change the height of each one of your textiles. Instead of going one by one, it will do it automatically for you across your whole site on mobile view. So you notice that I removed the class on the one we were working on. As you can see, it doesn't have the gap again. This second one doesn't have the gap although I didn't add any class to each one of the tiles.

The difference between these two is that with the first code, you can manipulate the height of the actual tile. The second code will do it automatically for you but don't use both on your site. Just one or the other.

## Skill three: padding on text section for mobile

When we use a text section, sometimes we add a padding, a bottom, top, left, or right padding. In this case, we'll add bottom padding to add space between the text and the section below. So let's see how this issue looks.

The issue in our example is there’s no padding on the right side of the screen. You can see that the text is close to the end of the mobile view. That's something that we don't want. We want it to have the same gap as the left-hand side so it looks more consistent. How do we fix this? Simply go to the padding section on the right column and place a value. In this case, we are going to write 10 pixels. You can see on the desktop, it doesn't adjust that much. It's not that noticeable. Let's see how it looks now on mobile, we scroll down and now we have a gap on the right, which is better. The user knows that the text doesn't go off-screen. It cuts off and goes to the next line. Just know you can use whatever value you want over in the padding. But I strongly recommend using a value of 10 or greater.

## Skill four: adjusting tile images on mobile

Again, this is a really common issue when we have an image and then a text that represents that image. So how is that going to look on mobile? You can see the image is great, but there is a gap. Again, the gap doesn't let us know if this text represents the image, right? Unless it's something related to it, that is something the user doesn't want. We want it to be as close as possible to the image. To fix this, let's copy the CSS to the site editor and copy the name of the class. We'll leave the first image as is, but we'll add it to the second one so we can see the changes.

Let's give it a preview, just like this. Image one, no CSS class. A huge gap between image and text. Number two is more compact, with no gap between image and text, which helps the user know that these two things are related. Now let's make a live demo of how we can change these red values on Zoomforth. These two tiles are extremely close. You don't want that. So value number one, this value represents the height of the actual tile, the whole section, right? So let's make it a little bit bigger. Let's say 350 pixels. Value number two, this value represents the height of the image. The higher the height of the tile, the lower the value has to be. If we leave it as is, the image will look stretched.

As you can see in the mobile view, the section is a little bit higher now, but as I said, the image is stretched now. We don't want that; we want it to be more compact, so let's change these values. Instead of being 130, let's put 120 and have a look. We scroll all the way down. It looks way better. But for me, it's still a little bit stretched, right? Let's change it to 110, then let's preview again. That's better. There is a little bit of a gap but not so much. You can play around with the values, preview your site and see what fits best for you.

## QA

Can we also change the alignment of the image to left, middle, or right?

- Let's move the image from top to bottom. We are going to add some CSS, which is “transform.” Type translate "y" and then in parenthesis the value that we want. In this case, we'll put 30 pixels, and now it's a bit more in this center. If you want to move it from left to right, you can use "X." You can also use two values after typing translate. The first value will represent the top and bottom, and the second value will represent the left and right. And as you can see, it's kind of in the middle to the right side. And that is how you move the image.

How to address the smaller icons to the left and middle?

- Remove the additional images, and let's see if adding this part of CSS if it puts it in the middle. So no, in this case, you cannot align the image to the middle or the left side. It will always be on the left side instead of the right side; it will populate them one next to the other.

Do I need to work with three columns?

- No. As you can see in the CSS, this value is highlighted. That means that we can change that value. Let's give it a try. Instead of being three columns, we can actually make it however many we want. We need to divide the number of columns into a hundred. Let's say I just want two columns. So a hundred divided by two, it will be 50. So that value goes here in the width. Instead of 33.3, we are going to put 50. The widder it is, the bigger the height has to be. So let's do 200. In this case, it will cover half of the mobile view. You can see the image is a little bit stretched, so you can play with these values. Instead of 200, we can put 150 and that will fix the size. Now, as you can see, it covers half of the column. And if I duplicate this image, you'll see that instead of three columns, it will be two. Let's say we want four. So again, we divide a hundred, that will be 25. So that's the value you'll put in this width section.

If you add tiles to the center icon above the text, will that change the placement to be in the center in mobile, or does it force it to be left-aligned automatically in mobile?

- So you say you want it to be in the middle. We can create an empty text tile and add the class to the three tiles. And in that case, yes, it will put it in the middle. If you want it to be all the way to the right, I suggest you can create another empty text tile and place it on the left. Why do we need three? Remember it will create this into a 33.33% column. So if you do this, it doesn't matter how long the tile is. It will always reduce its size. So since we added two empty tiles, now we have our icon all the way to the right.

Just want to remind everyone as well. We do have our G2 review site. This is an independent review site. So if you have a moment, we would love to hear how we're doing at Zoomforth. You can leave your comments anonymously. The link will also be shared on the follow-up site. Any comments or posts that you can share there are always appreciated. Thank you again.
