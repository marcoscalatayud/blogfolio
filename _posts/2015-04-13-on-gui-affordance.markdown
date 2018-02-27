---
layout: post
title:  "On GUIs and affordance"
date:   2016-12-18 13:58:11
categories: blog design gui writing
abstract: "Visual cues as affordances should be always used to point out what widgets can do."
---

## The birth of the GUI

As with most technologies, when graphical user interfaces were born, their inventors didn't know neither how to monetize them or the impact they would make in history.

They tried to **make visual metaphors that represented real objects (or their most common associated actions)**. E.g. a _button_ which could be _pressed_ and an associated action would be performed; a _folder_ where you _stored_ several files looked like a physical folder; and _files_ themselves represented the _data_ they stored.

GUIs faced two problems at first:

1. Being such a new technology, **there was no software that showed off their entire possibilities**, making them look useless and a bit of an overkill for common tasks which could be done (quicker if you learnt the commands) in the less hardware-demanding command line interface.
2. At that time **displays had a clear limitation: monochrome and low resolution**. And that played against GUIs' advantage.

Those two problems were **solved quickly** with the improving hardware and the popularization of WYSIWYG software (visual text processors, Photoshop, etc).

## The evolution of the GUI

We can point out three milestones for GUI popularity and ubiquitousness.

1. **(1984)** The launch of the Macintosh or, in this case, of its operative system Classic Mac OS (System 1), when GUIs became popular.
2. **(1995)** The launch of Windows 3.1 and, specially Windows 95, which _democratized_  GUIs since PCs where (and still are) economically more accessible than Macs.
3. **(2007)** The major adoption of smartphones, with a special mention to iOS and the possibilities of touch screens.

Currently, _almost everyone we know_ (not to be mistaken with just _everyone_) interacts with a GUI on a daily basis –or even more often.

## Affordances

**[Affordances](https://en.wikipedia.org/wiki/Affordance) are the possible actions for an object that someone can perceive in his/her own context**. For instance, in a GUI, if the user sees an element which resembles to her like a button and its label reads "Save changes", she'll know that the modifications made to the current file will be kept if she pushes that button.

Given that primitive GUIs ran on not very powerful hardware, affordances relied on:

1. Layout distribution (hierarchy).
2. Volume (buttons).
3. Visual metaphors (icons).

But, as hardware improved, so did GUIs –specially icons and eye-candy. They improved in:

1. Size.
2. Colour.
3. Resolution.
4. Affordances: for instance, overlapped windows had shadows which reinforced the concept of depth.

With the new graphical possibilities, saturated eye-candy GUI elements was the way to go. Apple had [Aqua](https://en.wikipedia.org/wiki/Aqua_(user_interface)), Microsoft had [Aero](https://en.wikipedia.org/wiki/Windows_Aero). Skeuomorphism became the king of GUIs, and eventually everyone making beautiful, photorealistic graphical controls for the sake of it.

But suddenly, with the advent of iOS 7, designers followed Apple's newly introduced trend: extreme-subtlety. **Minimal contrast, still-not-big-enough-fonts, ultra-lightweight typography, etcetera**; thus losing websites and apps most of the visual clues the GUI elements had.

Fortunately, **the trend has evolved to a less radical approach to minimalism ([material design](https://material.google.com))** and GUIs have started to regain affordances: shadows, volume (gradients are back), and so on. But there's still to much room for improvisation, specially with icons evoking new metaphors (those hamburger or share icons).

## What to do now?

With GUIs, like with any subsystem of a product, **think of your users before making radical changes, specially when adopting trends. Will they understand them?** Will they share your point of view and endorse them?

I know that **we as an industry are doing something wrong when my parents can't figure out how to do something with their smartphone or computer**; whether in an app or a website. They've been using computers (via GUIs) for more than 20 years and GUIs have kept the same basic concepts and user flows since their beginning: **showing the status possibilities of the computer at their current state** (being the state the active app or website). However we've been removing affordances and taking some things for granted (i.e.: the meat in the hamburger menu is some special [mistery meat](https://en.wikipedia.org/wiki/Mystery_meat_navigation)).

Some personal tips:

1. Trends or **standards are generally good** for the shared knowledge they suppose, **yet they can be wrong. Be critical**, judge if what you're applying to the elements can make any problem to your users.
2. Remember that **you are not your users**. They can be 8yo or 80yo. They can have any type of (visual or not) impairment. We as designers have a responsibility, we must design for everyone.

When I see a particularly trendy site, I like to picture the future of the obviously-young-designer: in his eighties, struggling to understand a then-modern trendy GUI.
