---
layout: case
title: "Qatium design case study"
type: casestudy
navname: "Cases"
---

<div class="layout-Content-maxWidth">
  {% include header %}
</div>
<div class="cst-LayoutArea cst-LayoutArea-hero-qatium">
  <div class="cst-LayoutArea_Content">
    <header class="cst-HeaderHero">
      <h1>Qatium <span>UX case study</span></h1>
    </header><!-- .header-hero -->
  </div><!-- .cst-LayoutArea_Content -->
</div><!-- .cst-LayoutArea -->

<div class="cst-LayoutArea">
  <div class="cst-LayoutArea_Content">

## Abstract

Qatium is an *easy-to-use water management software for utilities of any size*, with employees distributed all over the world working remotely.

The team constantly deployed improvements that allowed us to gather feedback and iterate quickly.

## Role

Each area of the product had assigned a team with a designer, a water engineer, and some developers. These teams worked shoulder to shoulder, reaching agreements on how to develop each feature and pairing most of the time via video calls and screen-sharing.

## Considerations

When I joined Qatium, the Product team was mainly composed of programmers &mdash;they had been working without designers for a long time&mdash; and were following [eXtreme Programming](https://en.wikipedia.org/wiki/Extreme_programming).

I had been working for years using other lean methodologies such as SCRUM or Kanban; and adapting to this methodology felt challenging at first. In the end I got used to it and liked most of the parts:

- **I'm in love with pair programming**.
- We delivered improvements at a **very quick pace**.
- **Deploying directly to production**, while making use of feature flags for user testing purposes.
- Promoting a **shared property of the code**, which helps less expert peers grow.
- **Almost everything was tested**, which should be mandatory for a software that manages critical assets such as the water industry.

## Achievements

**The previous team of designers had truly done their homework**. You can tell by realizing that the company had been running without designers for a year, that's quite a feat!

Anyway the **product kept evolving** and there were some areas where it could be improved.

### Accessibility

Companies doing business in the US and EU markets are &mdash;to say the least&mdash; *encouraged* to reach a minimum of AA level for their digital products; specially when dealing with contracts with governments:

- [Section 508](https://www.section508.gov/)
- [European Union is enforcing accessibility](https://ec.europa.eu/social/main.jsp?catId=1202&intPageId=5581&langId=en) (from June 2025)

However some stakeholders ignore that **complying with WCAG 2.2 at AA level is so easy and cheap** that it's worth being accessible by default.

We pushed **lots of improvements**, and suggested developing new features with accessibility in mind.

Here's a proposal to update our pressure visualization palette to more contrasting colors. Please check the black and white versions of both palettes.

<div class="layout-FullWidth">
  <div class="cst-ScreenshotComparison">
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/contrast-before.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Contrast &mdash; Before</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/contrast-after.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Contrast &mdash; After</p>
      </figcaption>
    </figure>
  </div>
</div>

### GUI design

#### 8pt grid

The overall Graphics User Interface looked okay at first glance but, once the more you kept looking the more you noticed **some quirks that made the GUI look funny**. It was due to the lack of a grid.

We reworked our components to **fit into an 8pt grid** and everything began to fall into place nicely.

<div class="cst-ScreenshotComparison">
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/8pt-toggle-before.png"
      alt=""
      width="240" height="128">
    </picture>
    <figcaption>
      <p>Toggle size variants &mdash; Before</p>
    </figcaption>
  </figure>
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/8pt-toggle-after.png"
      alt=""
      width="240" height="128">
    </picture>
    <figcaption>
      <p>Toggle size variants &mdash; After</p>
    </figcaption>
  </figure>
</div>

<div class="cst-ScreenshotComparison">
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/8pt-toggle-popover-before.png"
      alt=""
      width="506" height="416">
    </picture>
    <figcaption>
      <p>Qatium popover &mdash; Before</p>
    </figcaption>
  </figure>
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/8pt-toggle-popover-after.png"
      alt=""
      width="506" height="416">
    </picture>
    <figcaption>
      <p>Qatium popover &mdash; After</p>
    </figcaption>
  </figure>
</div>

<div class="layout-FullWidth">
  <div class="cst-Case_Grid">
    <div class="cst-Case_Content">

#### Iconography

The previous Design team had built an icon family. They were **aesthetically pleasing**, but the vertices of the shapes were **not aligned** to integer pixel coordinates and were usually **being scaled** to fit into small buttons. The result was **blurry icons**.

We also needed to build new icons for new features. To **keep consistency between the old and new** icons the solution was redrawing them while:

- Using a grid and adjusting the icons to fit into keyshapes.
- Drawing them at the final size they were being used in the product.
- Making sure the vertices snapped to the grid.

    </div><!-- .qtm-Case_Content -->
    <aside class="qtm-Case_Aside">
      <figure>
        <picture class="qtm-Case_Picture">
          <img src="/assets/images/case-qatium/icon-pixel-snap.png"
          alt=""
          width="336" height="640">
        </picture>
        <figcaption>
          <p>Icon vertices aligned to pixel grid</p>
        </figcaption>
      </figure>
    </aside>
  </div><!-- .case-grid -->
</div><!-- .cst-Case_GridWrapper -->

#### Color palette optimization

We had a **grayscale with 14 steps** (including black and white) &mdash;which seem enough&mdash; although the app was **using only a few** of them. That resulted in a dark and smudgy UI which lacked contrast between the GUI panels and the map underneath.


<figure>
  <picture class="qtm-Case_Picture">
    <img src="/assets/images/case-qatium/grayscale.png"
    alt=""
    width="582" height="416">
  </picture>
  <figcaption>
    <p>That is a lot of grays!</p>
  </figcaption>
</figure>

So I **iterated some alternatives** to reduce the number of grays to a more reasonable amount and **increase the contrast** between steps while keeping the look and feel of the software almost intact.

<div class="layout-FullWidth">
  <div class="cst-ScreenshotComparison">
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/grayscale-original.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Grayscale &mdash; Before</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/grayscale-update.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Grayscale &mdash; After</p>
      </figcaption>
    </figure>
  </div>
</div>

#### Making use of the laws of simplicity

Every product suffers from [feature creep](https://en.wikipedia.org/wiki/Feature_creep) when growing up. To some people, **it seems that adding is the only way forward**. That causes a **crowded GUI**, worsening the user experience. To mitigate this you can take advantage of the first two laws from [The laws of simplicity](http://lawsofsimplicity.com/) from [John Maeda](https://en.wikipedia.org/wiki/John_Maeda). To this day it still impresses me how **powerful changes can emerge from simple principles**:

1. **Reduce**: take away anything redundant or superfluous; bearing in mind that **explicit wins over implicit**.
2. **Organize**: clever organization and display of information reduces the cognitive load. You have to be careful because it **involves tweaking different articulated parts**, meaning **a bigger number of people in the team needs to be coordinated and aware** of the changes

##### Workspace preset manager

The app was growing big and complex; but it also needed to appeal to a wide range of people with different backgrounds and levels of expertise. That's why we **proposed a workspace preset manager** that would adapt the GUI to their task. And since a big part of successful design involves getting into politics and persuading the colleagues affected by your proposals &mdash;basically the entire team&mdash; that was no small feat. I'm actually **happier about the management of the situation than the design solution**.

Among other things, we conducted card sorting exercises to understand how different people associated features to one are or another.

<div class="layout-FullWidth">
  <div class="cst-ScreenshotComparison">
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/card-sorting-a.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium card sorting &mdash; user A</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/card-sorting-b.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium card sorting &mdash; user B</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/card-sorting-c.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium card sorting &mdash; user C</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/card-sorting-d.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium card sorting &mdash; user D</p>
      </figcaption>
    </figure>
  </div>
</div>

##### GUI rearrangement

My last proposal for rearranging the most visible parts of the GUI consisted in moving some outdated information and new controls. The main goal was to remove as much blank space as possible, maximizing the interactive area.

##### Light theme

Users were requesting a light theme from some time. It would've been easy and quick to develop using CSS's `light-dark` scheme. I created mockups for it, and even others mixing the it with the previous GUI rearrangements.

<div class="layout-FullWidth">
  <div class="cst-ScreenshotComparison">
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/rearrange-original.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium at 2024 &mdash; Before</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/rearrange-light-theme.png"
        alt=""
        width="1140" height="768">
      </picture>
      <figcaption>
        <p>Qatium proposal &mdash; After (light theme)</p>
      </figcaption>
    </figure>
  </div>
</div>

#### Tons of small fixes to the GUI

Pairing has been a great experience at Qatium. I hope to do more in the future. It makes it easier for the designers to warn the programmers of design inconsistencies or inaccuracies.

However, designers were multitasking giving input to several pair-teams. Because of this, some visual issues could even reach production. So from time to time, in what the team called "slack time", I combed the application looking for this kind of quirks and fixed them.

This may seem trivial but this **lack of polish is perceived by the users as a lack of quality**.


<div class="cst-ScreenshotComparison">
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/tweaks-with-badge-before.png"
      alt=""
      width="292" height="480">
    </picture>
    <figcaption>
      <p>Card &mdash; Before</p>
    </figcaption>
  </figure>
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/tweaks-with-badge-after.png"
      alt=""
      width="292" height="480">
    </picture>
    <figcaption>
      <p>Card &mdash; After</p>
    </figcaption>
  </figure>
</div>


<div class="layout-FullWidth">
  <div class="cst-ScreenshotComparison">
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/alignment-before.png"
        alt=""
        width="292" height="480">
      </picture>
      <figcaption>
        <p>Button alignment &mdash; Before</p>
      </figcaption>
    </figure>
    <figure>
      <picture class="cst-Case_Picture">
        <img src="/assets/images/case-qatium/alignment-after.png"
        alt=""
        width="292" height="480">
      </picture>
      <figcaption>
        <p>Button alignment &mdash; After</p>
      </figcaption>
    </figure>
  </div>
</div>

### GUI engineering

#### Retrofit responsive design

The software was desktop-first. It was a reasonable approach since it had lots of visual data: huge networks of pipes, different layers of data presentation, lots of different panels, and so on. So why bother cramming all of this in a mobile view? Especially when we were told "most of our users use it on desktop". This affirmation was proved to be mistaken, as we had newer feedback about our users needing to use the app on the field.

In "slack time", I quietly studied how to reorganize the GUI for a mobile device; and eventually implemented it. The before and after screenshots spoke for themselves.

<div class="cst-ScreenshotComparison">
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/responsive-retrofit-iphone-before.png"
      alt=""
      width="292" height="800">
    </picture>
    <figcaption>
      <p>Qatium mobile &mdash; Before</p>
    </figcaption>
  </figure>
  <figure>
    <picture class="cst-Case_Picture">
      <img src="/assets/images/case-qatium/responsive-retrofit-iphone-after.png"
      alt=""
      width="292" height="800">
    </picture>
    <figcaption>
      <p>Qatium mobile &mdash; After</p>
    </figcaption>
  </figure>
</div>

We left more quality improvements for future iterations: increasing font sizes, interactive target areas (controls), or even adopting design paradigms more suited for mobile devices.

#### Tokenize variables

When you start a project, every programmer involved is familiarized with almost everything in the source code, including which color is used for borders or secondary texts; specially when you're pairing with a designer.

Yet a proper organization is due when:

- The team starts growing.
- Third parties start getting involved in the development of external plugins.
- You start thinking about theming.

The best solution for this is tokenization, instead of just trusting the use of hard-coded hexadecimal values copied from a Figma file.

This makes it **easier to update the applications colors**, since you don't need to do a massive replacement each time there's a color change in the design. You just need to tweak a value in the palette, or the assigned variable in the tokens list.


#### Customize 3rd party tools

Working with so-called customizable 3rd party tools can be a pain in the neck. You are sometimes very limited to what you can actually do; other times you are directly asked to "hack" it with unorthodox practices to achieve your branding of the tool.

Still, once you beat the challenge of working with such limitations, the results feel rewarding.

#### Branded billing

Reading through the `#sales` channel I bumped into a billing document which looked odd. It was somewhat branded, but presented some quirks that caught my attention. After asking the person in charge of it, he told me he had made it with Google Docs.

Before I talked about fixing the lack of polish. Those can be overlooked in a free(mium) software but, **once you start charging your customers, you can't give them a sloppy-looking billing**.

I don't know if they had in mind using a professional receipt management software but, until then, I built him an HTML+CSS template. Once he had updated the billing data, he'd just need to print the document as PDF and send it to the customer.

## The team

Last but not least, I want to acknowledge all the people with whom I've worked for almost 3 years. What a ride! What a team!

I have learnt a lot from them, regardless of their seniority. Apart from knowing a lot about their craft, they are clever, insightful, and focused (most of us worked for 6h a day, but the results yielded like the classic 8h!)

I can't finish this case study without mentioning the ones with whom I worked the most.

### Design and Copywriting

[Ale](https://linkedin.com/in/bomberstudios), [Nora](https://linkedin.com/in/noragonzalezdwyer), [Sofía](https://linkedin.com/in/sof%C3%ADaroldanjohnson), [Cristina](https://linkedin.com/in/cristinaapr), [Katerina](https://linkedin.com/in/katerina-s-67752528).

### Programmers

[César](https://linkedin.com/in/cesar-gonzalez-segura), [Dani](https://linkedin.com/in/daniriera), [Elena](https://linkedin.com/in/emelgil), [Javi](https://linkedin.com/in/jacarma), [Helena](https://linkedin.com/in/helena-recasens-5bb612201), [Murta](https://linkedin.com/in/murtasanjuan), [Sandra](https://linkedin.com/in/ssaornil), [Vicente](https://linkedin.com/in/vibaiher).

### Hydraulics and other

[Aitor](https://linkedin.com/in/aitor-sanz-55a72126), [David](https://linkedin.com/in/monteirod), [Jorge](https://linkedin.com/in/jorge-munoz), [Luke](https://linkedin.com/in/lukepbutler), [Natalie](https://linkedin.com/in/nataliegref), [Nico](https://linkedin.com/in/nicolae-cosmin-popa-4a1ba467).

To all of you: thank you! I couldn't be more proud of you and the work we achieved together!

    {% include footer_post %}
  </div><!-- .cst-LayoutArea_Content -->
</div><!-- .cst-LayoutArea -->
