---
## All layout updates should be made in 'lessons.html' layout.
layout: academy-lessons
permalink: /academy/text-tiles
title: Text tiles | Zoomforth Academy
description: Learn how to use the text tiles in your Zoomforth sites. Change text tile color, change text color, make tile background different, and more.
# This category must be equal to the corresponding title object variable in the file _data/academy
category: Advanced tips &#38; tricks
time: 15 min
# This is the title of the article. It must be equal to the corresponding title object variable in the file _data/academy
page_heading: Text tiles
subtitle-objectives: "By the end of this session, you will be able to:"
objectives:
  - 'Changing text tile elements (H1, H2 , etc) by <a href="https://www.zoomforth.com/academy/introduction-css-classes" target="_blank">CSS classes</a>'
  - Changing colors of a single word by CSS class
  - Change tiles caption/ background by CSS class
  - Change tiles caption/ background on hover by CSS class
video_tutorial: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/936213760?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Text Tiles"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
# If the lesson article has a transcript of the video, video_transcript must be set to "true".
video_transcript: true
resources:
  - How to link text &#38; add buttons: https://support.zoomforth.com/en/articles/4778370-how-to-link-text-add-buttons
  - Replicate text format into another text editor: https://support.zoomforth.com/en/articles/587327-replicate-text-format-into-another-text-editor
  - Create a border for your text tile: https://support.zoomforth.com/en/articles/4394687-create-a-border-for-your-text-tile
  - Alt - text: https://support.zoomforth.com/en/articles/5879345-alt-text
next_lesson: academy/spacing-alignment
---
Today is about text tiles. In addition, we'll be showing you some other back-to-basics on how to change text color, make tile background color different, and all that jazz. Starting off with the first skill is how to change the color of a subheading to create some visual separation in our hero page. For all these skills, the first step is always to head over to the CSS Wiki. We have some newly added CSS there we will put back into the Site Editor custom CSS in the left-hand panel. Then we're going to apply that to wherever we need it. In this case, we want to go over to the Wiki, grab the CSS and then apply it to the tile.

## Changing the heading color

To start, we want to head over to the Wiki and go to the textiles subpage. What we're looking for is the "change text color" CSS. We want to copy this, go into the custom CSS in the Site Editor, then paste that in. In plain English, what this does is it changes the color of all the headers and the paragraphs. We only care about the hex value in the code. The important tag on the right-hand side is to ensure our changes go through without being overridden by anything. So there is some CSS, but all we care about is the color value.

I want to change this subheading to a different color. This subheading is an H3. What I want to do is grab the H3 color class. Copy that. Then, I'm going to apply that to a tile, and it gets recolored. Now you can do the same thing for the headers. If I write H1 color, that's going to get a custom color, same with P color, which is the paragraph. You can really customize a lot using this. But for now, we just want to recolor the subheading under the header.

How do we make it our own color? When you copy-paste the CSS, it comes with its own preset color, but how do we get it to our brand color? So going back to the H1 value in the CSS, you can see the color. We want to switch it out. I'm going to delete all the purple, and we can replace that by writing red, green, and then light blue and replace that with whatever. But usually, we have a brand color in mind. I've prepared a couple of brand colors from Zoomforth at the top of the CSS. So I want to copy in our Zoomforth blue, just copying in that code. And there we go. So again, we're just grabbing the CSS from the Wiki, setting the colors that we want and then applying it wherever we need it. That way, you can create some visual separations in your site.

## Changing the color of a specific word

What if I want to emphasize one word in this heading instead of recoloring the entire H1 to one color? We'll have to grab some CSS from the Wiki. So let's head back over, scroll down a bit, and we have "recolor a word or phrase". Grab this CSS and again, paste that into the page editor.

This class is called italic to color, and this is a bit of a hack. So what this CSS says essentially is anything we tag as italic style instead becomes this color. Grab the CSS class, and paste that in. Now that we've added this, any text that we tag as italic becomes a different color. You can forget about the italic part of it. It's more that we're using the tag italic as a vehicle for pushing some color into the section here. We're replacing the function. Again, it does come with a preset color, but I have a brand color in mind. So I want to get that Zoomforth blue going here again.

The good part about this is it gives you a lot of freedom when it comes to choosing how you add your color. You can select one word, or as I showed before, you can select different text elements within the same tile to change the color. But for now, I just want to emphasize "trackable" in this hero headline. So again, grab the CSS from the Wiki, the only real value you need to care about in all this CSS is just the color value. This is what you'll replace with whatever your brand colors are.

## Changing tile color

What if you wanted to recolor a tile to perhaps a color that you don't have a style preset for yet, or you want to create some other variation?

Heading over to the tile section of the CSS class Wiki, we're going to be grabbing the "Change tile, and tile caption color" CSS. Essentially it says, set the tile or the tile caption background for any tile. So just going to copy it and paste it into our page editor CSS.

From here, it is the tile color class that we're after now. When you copy some classes from the Wiki, sometimes the CSS can get a little long. So how do you know which class you should add to the sections? Usually, that's what we write under the CSS title in the Wiki. The title-color class is what you want to add. You can copy it from the site CSS code that you've just pasted, or you could just as well view them in the WIki description. What we can do from here is paste in the tile color class, and this class works for a single tile. So you can draw some extra attention to a tile. We could also add it to the entire section, coloring all tiles this way.

It comes with a preset red, but for this one, I want to add our Zoomforth yellow. The one value that we're looking for is the purple color value. Remove that and paste in our brand color. This tile color does not only work for textiles, which is the sort of primary subject today. But it also works for, let's say, team images. They can draw some emphasis to certain positions or locations or just recolor all of them. This it's the same class as you would add to a textile.

## Make tile background color change on hover

Lastly, as a bit of a bonus on changing tile backgrounds, something I want to show you is how you can change the tile background, but only on hover. So this is really in vain with what we've done so far.

Head over to the Wiki and onto hover effects. We're just going to scroll down. Here we have CSS where we can hover and recolor a tile. There are also some properties you can customize, like the animation speed and the color.

I really like recoloring tiles on hover when it comes to interactive tiles. I think these tiles are a good example of that. So let's just remove the CSS class we have here for now. And instead, let's add the hover color class to the site CSS. Let's add that class to the tile as well.

As you can see on hover it has the black default, but as always, when we get CSS that has a default value, we want to replace that with our brand colors. So copy in that yellow that we had before. This is good for things like external links like or team tiles that have an extra function that open up into an overlay. It really is a good hover effect to show some interactivity on these tiles in particular while perhaps leaving these other tiles up top a bit more neutral to draw more attention to the interactivity of these. So again, what we basically covered is the recoloring of some words, the recoloring of tiles, and additionally, some hover effects in the same vein.
