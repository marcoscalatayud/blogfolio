---
tags: post
layout: post
title: "Site maintenance (2023 edition)"
date: 2023-09-02
categories: blog design meta
abstract: "Going on with the people that taught me"
---

*This post is something like a release notes for this website; a reminder to my future self to how I kept it up to date.*

## Removed Google Analytics

This actually happened years ago actually. As a designer, I found Google Analytics **useful for the passive user data it provided**, mainly:

- Browser market distribution.
- Display resolution.
- User device.

With this, you knew if you needed to target (or not) certain features based on your audience; the classic dilemma on how to implement [graceful degradation and/or progressive enhancement](//www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement).

But I ended up ditching it since the industry has been adopting more common standards:

- Modern **browsers go more on par feature wise** (see [Interop](//web.dev/interop-2022/)).
- Users expect apps/sites to correctly display **regardless of the device**.

## Swithed from jekyll to 11ty

I have used my personal site as a [Learn In Progress](/blog/2015-02-01-reasons-to-build-your-own-blog/). And I have been changing how I built it.

- A "static" PHP site. Where I just used the `include()` PHP feature to help me code as [DRY](//en.wikipedia.org/wiki/Don%27t_repeat_yourself) as possible.
- A WordPress install (a classic step, mind you). I played around with different skeleton themes to build upon them.
- A [middleman](//middlemanapp.com) site, once I started to feel that **WordPress was too much for my needs**, since it got richer in features I just didn't need.
- A [jekyll](//jekyllrb.com) site. I took that step because it was more focused on blogging.
- **Now**: [11ty](//www.11ty.dev). The "new" kid on the block (I'm not an early adopter). Even though I got my local Jekyll installation with `rbenv`, it somehow still got itself corrupted. Jekyll was slow. My styles compilation (outside of the jekyll pipeline) was wonky. **11ty is blazing fast**.

## Optimized tooling (reduce almost everything)

I had initially **struggled setting up my tooling**, mainly npm scripts to automate building and serving the local site. I felt like it ~~could~~ should be streamlined. The switch to 11ty has helped me with it.

### Removed autoprefixer

Autoprefixer **has been of great help** but, like I said before, there's no reason to keep it.

### Removed PostCSS

**PostCSS is my favorite CSS processor** but, again, I didn't need it anyomore due to my CSS best practices principles are aligned towards keeping CSS as readable and understandable for anyone as possible. I probably *should* write about it.

### Removed nesting

I think this was actually the **only feature that was keeping me from removing PostCSS**. I have had a strict "only nest media queries" best practice rule, but I have finally accepted to not nest even these. *Another reason* to write that CSS best practices post.

### Removed linting

**I love linting**. I love auto-linting even more. It is an enormous help to write cross-team, scalable, easy-to-read code; be it CSS or JS (or whatever). **But I removed it because I'm the sole developer of this site and made no practical sense**. But I should probably rescue it to have a "code source of truth" exposing my best practices. Yup, I should *definetively* write that post.

## Added dark mode

This is **a nod to those people who smartly choose to use a dark mode GUI** setting in their devices. It was a fun exercice in the intersection of design and code. The color palette is fully AAA accessibility compliant.

## Tidied CSS up

Although the design and code base is as minimalistic as possible, it still needed some tweakings.

- I did a variable (custom properties) cleanup.
- I removed magic numbers in favor of variables (specially for spacing: margin and padding).
- I removed some unused code after the optimizations.

## Outro

I feel very satisfied overall with this maintenance. **Every product, digital ones included, needs one from time to time**. I wonder what next steps this one will need.
