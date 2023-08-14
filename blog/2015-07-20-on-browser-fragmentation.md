---
tags: post
layout: post
title: "On browser fragmentation"
date: 2015-07-21
categories: blog development writing
abstract: "Give the best possible experience across devices keeping in mind your budget."
---

## Context

When developing software, one of the most common requirements is that the product must run smoothly in the myriad of available devices worldwide. Different operative systems, browsers, versions, screen sizes, processing power, etc. And different combinations of all that. That diversity constitutes **[market fragmentation](http://thenextweb.com/mobile/2014/08/21/18796-different-android-devices-according-opensignals-latest-fragmentation-report/)**.

Focusing on web apps, **the main concern is narrowed to browser fragmentation** (screen size issues are relatively easy solved with media queries). Now, just when most of desktop-browsers problems were solved with the help of background auto-updates, **stock mobile browsers have failed** suffer the same problem Internet Explorer did before: stagnation.

The fact that the stock browsers in iOS and Android do not auto-update leaves the users helpless against obsolescence. **Most smartphones cease to receive OS updates two years (three at most) after their launch**, and that includes the stock browser. Sure, Android users can install a different browser, or even hack-install a different OS, but that’s something most users are not likely to do.

Since we –as developers– and our clients –as stakeholders– strive to offer the best experience to almost every user, **we need to find some workarounds to overcome this browser-feature fragmentation**. That involves testing in a never ending combination of software and hardware. *Bear in mind the fact that it’s often overlooked to test for accessibility issues*.

## Finding balance between market reach and development budget
Given the circumstances, some sacrifices/constraints in the side of the user need to be done; it’s preferable to apply Facebook’s –and others– rule to **only support the two last major versions of browsers**. That doesn’t mean that some users will have a lousy experience, as long as we **remember to apply fallbacks or graceful degradation for unsupported features in old browsers**.

But that won’t make everything as easy as to write code once and deploy; current browsers supported under this 2-major-versions rule still lack many features we take for granted. Thus, **we rely on [scripts](http://modernizr.com), polyfills and automated [CSS post-processors](https://github.com/postcss/postcss)** that help you adapt your code to make it work in old browsers.

## Hopes and fears
For what I read, I think that in a near future we might get rid of polyfills and CSS post-processors.

But it’s a matter of time until some company with a well settled market-share browser decides to follow its own way -loosely applying standards– and [become the new Internet Explorer](http://nolanlawson.com/2015/06/30/safari-is-the-new-ie/). Then, we will be back to the starting line.


## TL;DR
+ Just like everybody finally realised, it's impossible to achieve pixel perfect translation from Photoshop compositions to browsers, **we have to accept that some features of our apps might not be available to all users/browsers**.
+ Give the **best possible experience across devices** with the help of scripts, polyfills and CSS post-processors, but **keeping in mind your context: budget and supported browsers**.
+ Eventually one company with **a browser well positioned in the market could stop updating it or try to follow its own pace on implementing standards**. Again.
