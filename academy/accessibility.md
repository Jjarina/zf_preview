---
## All layout updates should be made in 'lessons.html' layout.
layout: academy-lessons
permalink: /academy/accessibility
meta_title: Accessibility | Zoomforth Academy
meta_description: Meet a series of guidelines to help you construct accessible microsites. In the end, accessibility is not designing for the few. It is designing for all.
# This category must be equal to the corresponding title object variable in the file _data/academy
category: Advanced tips &#38; tricks
time: 30 min
# This is the title of the article. It must be equal to the corresponding title object variable in the file _data/academy
page_heading: Accessibility
subtitle-objectives: "By the end of this session, you will be able to:"
objectives:
  - Define what accessibility means and why it's important
  - Identify features that have been upgraded within Zoomforth to make accessible sites
  - Understand how to implement accessible features as a microsite builder and the how visitors will interact with these upgrades
video_tutorial: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/936220057?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Accessibility workshop"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
# If the lesson article has a transcript of the video, video_transcript must be set to "true".
video_transcript: true
resources:
  - Zoomforth and Accessibility: https://share.zoomforth.com/page-design-best-practice-v-2#/subpage/accessibility
  - Building accessible sites: https://support.zoomforth.com/en/articles/5909442-building-accessible-sites
  - Initiate site upgrade to access the accessibility features: https://support.zoomforth.com/en/articles/5920904-initiate-site-upgrade-to-access-the-accessibility-features
  - Upgrade a site to obtain new accessibility features: https://support.zoomforth.com/en/articles/5920151-upgrade-a-site-to-obtain-new-accessibility-features
next_lesson: academy/design-best-practices
---
Thank you for joining today's skills workshop. Today's topic is accessibility and its impact on microsites. I'm Ashmita or you can call me Ash, I will be hosting today's webinar. My colleagues, Morgan and Nicole are also in attendance. Before we review today's agenda, I wanted to make a few announcements. Firstly, the session is being recorded and will be shared with everyone here. And for those of your colleagues who registered, but were unable to join live, any supplementary information or articles that I highlight today will also be linked in the follow-up site that houses the recording. We will also leave time for questions, so feel free to post any in the chat at the bottom middle of your screen. One of my colleagues may be able to answer via chat, but we will also review collectively at the Q and A portion.

## Let's go ahead and review today's agenda

We will define exactly what accessibility is and why it's so important. We will then walk through the future demonstration, so I will talk through six different new upgrades for accessibility, including skip links, focus elements, order hierarchy, alt text, alerts, and forms. I'll then finish off with a couple considerations or exceptions to our upgrade and then we'll end with our Q and A portion. So let's dive right in.

## What exactly does accessibility mean?

Accessibility is the inclusive practice of ensuring there are no barriers that prevent interaction with or access to websites for people with physical disabilities, situational disabilities, and socioeconomic restrictions on bandwidth and speed. When sites are correctly designed and developed, more users have access to equal information and functionality. Since around 1999, accessibility concerns have been growing and the Web Content Accessibility Guidelines (WCAG) is the standard for websites to follow if they wish to provide a full-featured experience to those with disabilities. Zoomforth has released features and HTML changes that allow users to easily build sites that follow WCAG 2.1, AA guidelines. I do refer to these guidelines throughout the session and the reason for that is it's important for everyone to understand exactly which guidelines we followed. You're probably wondering why is accessibility so important? Recent data compiled by the US census shows that 40.7 million or 12.8% of the US population currently have a disability. Now, these disabilities can range. They can be visual, cognitive, auditory, physical, or speech, and it makes interactions online a little bit difficult for these individuals. So, what I'm going to do today is review the key tools now available in Zoomforth. I'll showcase the impact to the site builder as well as visitors to your site.

Here we have an example style guide, and I am using our fictional brand Denvertek which I think most of you are familiar with at this stage. I will be reviewing the preview site, as well as the site editor, and a few other sections of the platform throughout this demonstration. Let's go ahead and get started.

## Feature one has to do with skip links

Skip links are ways for users to skip visuals or other content that is not relevant to them. Zoomforth has implemented two types of skip links. The first is the subpage level skip link. When a visitor first loads your site and presses the tab button, they will be introduced to a button on the top left-hand corner, which allows them to skip to the main content of your site. This button can be edited within the site editor itself. Simply click on the section where you want to make the main content. It's really easy to change this. If you want them to be directed somewhere else first, simply just select the section and you now updated the main content.

## The second level skip link is sectional

There are complex components sometimes in our websites, such as iframes, slideshows, or video playlists, and these can be disorienting for individuals with disabilities. Our skip link at the section level allows a user to skip these types of complex sections when they tab through the site. Let me visualize that for you. You can see here that this is an image slideshow and because it is complex, we now have an alert to skip the slideshow as I tab through my site. There is no action for the site builder. I wanted to just note this as this is one of our optimizations for the accessibility upgrade.

## Feature two has to do with focus elements

Focus elements refer to an element that is currently being looked at. Visitors who use a mouse, such as I am right now, typically hover over elements and a website. Visitors who are restricted to using their keyboard to navigate need a different experience to help them understand the elements they're interacting with, and where exactly they are on the site. These focus elements, therefore, need to be visually apparent. When a visitor tabs through to navigate your site, you can see that we now have a visible color box around where they are. Screen readers and other assistive technology will announce what they're focused on so they can actually participate in your content. Zoomforth sites have been upgraded so that every interactive element now has this border. Something to note, our designers here at Zoomforth have opted to keep this color uniform with your accounts action links. But if you would like to modify this color, you can do that very easily within the theme editor. Let me show you where. So I've opened just the theme editor on another tab and you can see this is the theme for our style guide. I want to direct your attention to site basics under the MISC or miscellaneous tab. If you select that drop down, we now have a new feature called keyboard focus, and this is where you can update that color.

## Feature three has to do with focus order hierarchy

Websites are read from top to bottom when they're clicking or tabbing through the site. Zooomforth has ensured that sites now follow this concept and that visitors are tabbing through in a very predictable way. So what is the impact on the site builder? When you're building microsites, it's important to use headings to introduce content. Headings allow visitors to understand the hierarchy of your site which can range from H1 through H6. When you're building your sites you should typically use one H1 tag per subpage. This is the most important heading on the page which outlines what exactly it's about. Use H2 to differentiate different sections or areas of content, and then use smaller headings to break up paragraphs or show relationships between concepts.

## Feature four has to do with alt text

For this demonstration, I'm going to move to one of the images on our site editor. Alt text or alternative text is the text that appears in place of an image on a webpage if the image fails to load on a user screen. This text helps screen reading tools describe images to visually impaired readers, and allows search engines to better crawl and rank your website. Accessible ensures that even when the image doesn't load due to bandwidth speeds, a visitor can still understand what is being presented. For the accessibility update, Zoomforth has introduced two new fields in the media library and in the site editor for each of your images. Let me show you so within the media library I've just opened up in a new tab. I've directed you to a photo. When I select a photo, you can now see on the right-hand side we have a new field for alt text.

The second place that you will find an option to add alt text is within the site editor. When I click on an image, at the bottom of the editing panel, you will now see an option to add in the alt text. We do recommend adding alt text everywhere that makes sense. We have an entire help center article for guidelines on optimizing this text, but I also recommend checking out this HubSpot article. So I want to reference it now. Again, don't worry all of this will be linked in the follow-up site. This part of the article refers to bad and good alt text. If we refer back to our image of two women looking at a computer screen, I can see in the first example, that alt text is defined as "woman pointing to a person's computer screen", which is very skeleton in terms of a description. A better alt text is written to describe exactly who the woman is in each scenario. So instead of saying woman, here they defined it as a business school professor, and she's not pointing to any screen she's pointing to a student's screen. In this case, I'm gonna go ahead and copy command C this and I'm gonna go ahead and add it to my field here.

## Feature five has to do with alerts

When you are content switching, it can be a little bit challenging for anyone as you're going through different websites. It's sometimes disorienting when you click a link and realize that it's opened in a new tab or it's opened in the same window that you're currently viewing. Accessible sites should have visual cues that help visitors understand the intentions of your links. What Zoomforth has done is create a small **tool so any time someone tabs or hovers over a link that opens in a new tab. Again, in this particular feature for alerts, there's no action for the site builder here, it's just something to note for your visitors.

## Our last feature has to do with forms

Forms allow visitors to input data and submit it right on our microsites. I think a lot of you are familiar with these. We do have a couple feature updates with accessibility. Firstly, all inputs now have a corresponding label element. When clicked, it describes what the field is for disabled individuals. Elements such as checkboxes, you will see a checkbox appear as I enter into this field. Dials are now embedded to help visitors understand that they've added in values. We also have a prompt that will show any errors when they submit the form.

## The last option has to do with placeholder text

Placeholder text or more simply shadow text appears in the form field before a user types. It can help provide example responses or describe more about the field's intention. I have an example here for "what state do you live in?" My shadow text is just describing that my visitor can use initials to enter the state that they live in. I wanna show you now exactly how you add that to your form. I'm gonna go ahead and open up a new tab. I'm gonna direct you to our form section. This is the form, my style guide form. I'm gonna go ahead and edit it. When I scroll down, you can see that I've placed in my shadow text under Question Placeholder. That's a new field that we've embedded for accessibility.

## Considerations

Now, these are all the features on today's agenda. Next, I wanna highlight some considerations and exceptions to our accessibility updates. I'm going to go back to our preview sites, and I want to refer to looping videos. Any sites that are upgraded for accessibility will now pause looping videos in a section. Essentially what will happen is they'll only play when a visitor opts to select and play it. This again was intentional. Accessibility guidelines are very specific. You cannot have a video in the background for people who may be seizure prone or where movement can cause them issues. So what we've suggested as an alternative is to add a gif in replacement of any looping video.

The last consideration has to do with tables. Tables should make clear what data is being presented and the caption should describe to your visitor exactly the data that they are being presented with. For a fully accessible site that meets very strict WCAG 2.1 guidelines, our Zoomforth tables currently aren't enabled for captions so, at this stage, we do recommend not using tables in your content if you are looking to be very strict with following the 2.1 AA guidelines.

This concludes our review of the accessibility features. Every site is different, so there isn't necessarily a clear blueprint to follow. Our real aim of today's session was to give you some guidelines on features that you could embed to make your sites accessible to more individuals. What you may want to do is check how you're doing when you build your sites.

Luckily there are a ton of resources online, and sites where you can embed your site to see how accessible it is. We're gonna link that in our accessibility guide. I have referenced this accessibility guide a few times today, so I wanna just preview that as well for you. Our design team has created a guide, essentially a walk through all of the different updates that I shared with you today, but just on a site level. We've defined everything here and given you visuals of all the different new upgrades. If you scroll to the complete bottom of this site, which again will be linked in the follow-up site as an accessibility guide, you can see all the different websites we've linked to check your accessibility.

## We will now open up for questions

We're happy to review any posted in the chat box or if anyone would like to be unmuted, you're welcome to voice your questions now. Let me just check. There doesn't look to be, oh, I see a raised hand. Just give me one second. Here. There you go. Henry. I've just enabled you to speak.

Henry - Oh, great. Yes. Thank you. Can you hear me?

Ash - I can. Thanks, Henry.

Henry - Oh, wonderful. Hey, thank you so much for this presentation. It's definitely something that's catching up to speed with our client base. So I had a question and I know because I've seen these little icons and a lot of websites that I browse. Would that little accessibility icon be available to be displayed on our site? So you can define that it's an actual accessibility-friendly site.

Ash - That is a great question. I'm not sure I've personally seen that icon. But what we can do is we can take that back and I can check internally with our Team.

Yeah, I know Bloomberg does. I know, um, what other sites. I'm a news junkie so I kind of go around and I say, what's a little icon on and it's the accessibility. So that's really, really cool. And I saw that in your presentation. That's why it really caught my attention. So that was the only question that I had. Everything seems pretty straightforward and kind of just jumping in there and kind of getting my hands dirty.

Ash - Wonderful. Yeah, I think that's a great question. We will note that down and then I will provide the answer in the follow-up email to all of you.

Henry - Thank you very much. Appreciate it.

Ash - That's awesome. No problems. Anyone else? I'll just check for raised hands or anything in the chat. No. Okay. So before we end today's session, I have a brief, I promise you it's only three questions, poll. So you should see that on your screen now. It will just take a minute,

Once you've submitted your question, you're welcome to drop off. Apologies, I do see just one more question in the chat: are all these features on by default? Great question Tom. There was an email that was sent out to all of the accounts on a template that we would upgrade for you. We've designated your most common template. So our design team will be upgrading those for you. So you can use it. If there are additional templates that you would like to upgrade, that is not a problem. We can walk you through how to do that.

Morgane - Ash, jumping on quickly. For everyone, we're not touching any existing sites. We're creating a duplicate of your most commonly used theme and your most commonly used template. So that moving forward, you have the chance to create accessible sites. You should see that in your account, we added a description, whatever the name of your template is slash accessibility 2022. So none of the existing sites are going to be impacted. It's for you to have an option moving forward to create sites that are accessible.

Ash - And there's a question from Stacy as well around video CC. That is a great question. I need to double-check on that as well, unless any of my colleagues . . . Morgan, remind me about the video CC. Is that embedded only at the video level? You might have to check that internally as well.

Morgane - Yeah, we need to check. I'm not sure, to be honest.

Ash - Yeah, that's fine. We can review. Nicole, if you can just note that question down as well, then we will provide the answer in the follow-up resources. Okay, wonderful. Let me see if there are any additional questions. Amazing. Thank you, Henry. Amazing. If there's nothing else, you are welcome to drop off. Thank you all for joining and we look forward to welcoming you to our next session. Thank you all. Bye now.
