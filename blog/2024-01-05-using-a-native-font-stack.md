---
tags: post
layout: post
title: "Using a native font stack"
date: 2024-01-05
categories: blog industrial design
abstract: "On trying to optimize both performance and readability"
---

## Requirements

One of the most important checkpoints I had in mind when building the current iteration of my blogfolio was **achieving the fastest load time possible**. I went as far as setting up everything with Amazon Web Services and its user-unfriendly interface.

I **also wanted a nice readable font**. Since there's no easy answer to the debate for Serif vs Sans-serif, I chose the option I feel more comfortable with a serif font.

After browsing alternatives, I decided to go with a font called [Merriweather](https://fonts.google.com/specimen/Merriweather). I downloaded it from [Google Fonts](https://fonts.google.com), but it came as a [TTF](https://en.wikipedia.org/wiki/TrueType). So the next step was going to [transfonter](http://transfonter.org) and convert the files to [WOFF2](https://en.wikipedia.org/wiki/Web_Open_Font_Format) to reduce their file size. I even optimized them further by selecting a concrete subset of characters limited to the Latin alphabet, which is the only one I need.

## Can we go further?

Some years ago a design trend which relies on using the fonts used by the operative system (system fonts) for web apps gained some popularity. The benefits were interesting:

- Faster load times: no need to download more files.
- Improved UX: by avoiding [FOUT](https://fonts.google.com/knowledge/glossary/fout) or [FOIT](https://fonts.google.com/knowledge/glossary/foit) situations.
- Improved UX: the text in the app feels integrated.

For branding reasons I have never been able to implement that in my career though.

Even some more years ago, with the rise of styling in the web, designers concerned with the consistency of their websites followed what they called "web safe font stacks". They are a collection of fonts present throughout different operative systems that look similar to one another.

These font stacks have been regularly updated and are ultimately very similar. We could say there are different *flavours* &mdash;each font stack is built according to the taste of the developer.

To try this option, I wanted to keep the font as close as possible to Merriweather. I finally decided on the Transitional option at [Modern Font Stacks](https://modernfontstacks.com).

## What about variable (weight) fonts?

One of the worries of using custom fonts besides their font size are network calls. You usually need to download at least 3 files for each font (regular, italic, bold). So, given that these fonts encapsulate all weights, maybe variable fonts were a reasonable approach to optimization? I looked up in Google Fonts again and downloaded a font I liked only to realize it weighed 2,5MB in their TTF format (~180kB in WOFF2). And another 2,6MB for the italic version! So, no. Not an option.

## Conclusions

Currently this site only downloads the HTML document and the CSS, weighing around 5kB, and the favicons (another 3kB). I guess that's the most minimalist approach I can take. But I already am in the path to diminishing returns.
