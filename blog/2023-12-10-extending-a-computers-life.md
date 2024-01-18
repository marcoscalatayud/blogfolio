---
tags: post
layout: post
title: "Extending a computer’s life"
date: 2023-12-10
categories: blog industrial design
abstract: "How I experienced obsolescence and overcame it"
---

## Experiencing obsolescence first hand

I have previously written about [planned obsolescence](/blog/2023-09-24-products-that-last/), its origins and consequences. There, as a first hand example of lasting products, I talked about an iMac G4 who lasted further than the life expectancy Apple gave it. Somewhat understandable, **official support was dropped when Apple shifted its interest to the Intel architecture instead of the PowerPC one** for performance reasons (specially heat dissipation). They couldn’t (or didn’t want to) support/maintain both architectures in their operative system.

But it’s funny because in 2012 I bought a maxed out 27ˮ iMac with the hope it also would last many years &mdash;using it for professional and personal matters. It has served me well, it still does. **Apple has again changed their processors architecture to a custom ARM-based one, yet they keep support for Intel processors** in their operative system. Mac OS has been releasing a new version every 1&dash;2 years, yet **many major version updates have been feeling a bit too bland, with no remarkable changes to the users**, most of the changes directed to reinforced the walled garden Apple is building. So, if Intel processors are still supported, why drop support altogether for what Apple brands as *legacy* computers?

## Meet OpenCore Legacy Patcher

I bet the people from [OpenCore Legacy Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher) asked themselves that same very question.

After writing the planned obsolescence post, I watched a video from Action Retro [updating a 2009 Macbook Pro to Mac OS Sonoma](https://www.youtube.com/watch?v=l1-slCZ41FI) (the latest at the moment of this writing). It shows the **surprisingly easy way to force a non-supported Mac OS version into a legacy computer with a software called OpenCore Legacy Patcher**.

**I was astonished**. I was reluctantly accepting that this computer could live a bit longer with Windows 10 at a bootcamp partition some more years, or even installing Linux, but I wasn’t aware of this option.

So I backed everything up before trying and installing it. I barely had to do anything, the process was very automatic. **Careful**, even though I thought this was going to install the OS in another partition or something like that, it overwrote my latest supported Mac OS (10.15.7) installation. Cold sweat run through my forehead once I realized that. But the fear dissipated once I saw everything was working great.

## The thing with not-official updates

Well, not everything was great. It refused to shut down. Or wake up from sleep mode. In fact, **this is the 3rd revision of this post** when I had it in the drafts folder. My thoughts on Opencorelegacy have gone through the following roller coaster of emotions:

- Opencorelegacy is awesome. Thank you!
- Wait! I can’t recommend it to everyone. Be careful with what you do!
- Well, everything is working fine now so...

With all that said and done, after some weeks, my final thoughts on this are:

- **Only install these kind of hacks in your computer if you are looking to buy a new one**. Maybe you can wait a few months or years to do so. Also **keep regular backups of your data**.
- If a talented team can achieve this with no access to Apple documentation and resources, **why doesn’t Apple make a bit of an effort to further increase the life of their products?** We all know the answer, don’t bother.
- **I’m really happy with installing OpenCore Legacy Patcher**, and I salute and thank the team for their work.

Of course, as previously hinted. This also applies to non-Apple computers installing lightweight distros that will allow you to expand any computer's life.
