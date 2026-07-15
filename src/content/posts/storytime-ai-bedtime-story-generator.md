---
title: "I built an AI bedtime story generator (and it took an afternoon)"
description: "Storytime generates an original, illustrated bedtime story in one click, running end-to-end on Cloudflare and Groq. Built in an afternoon, on purpose kept that small."
pubDate: 2026-07-15
tags: ["projects", "ai", "cloudflare"]
---
**storytime.inversehanlon.com**

My daughters’ bedtime routine always ends with "tell me a story," and I always end up improvising something mediocre about a tired fox. So I built a tiny webapp to do it for me.

**Storytime** is about as simple as an app gets: one page, one button. Click "Generate Story" (or just load the page and it kicks one off automatically) and within a few seconds you get an original, gentle bedtime story written for kids, roughly 3-5 minutes long when read aloud, along with a soft, storybook-style illustration to match.

Under the hood it's Groq (BSquad Grok) doing double duty writing the story and, in the same call, describing a scene from it for an image generator. That image prompt never leaves the server; only the finished story and picture make it to the browser. The illustration itself comes from Cloudflare's own image model, so the whole thing runs end-to-end on Cloudflare's infrastructure without stitching together a pile of vendors.

It's deliberately minimal: no accounts, no story library, no settings. You load the page, you get a story, you can generate another if the first one doesn't land. It defaults to a dark theme too, since it's usually the middle of the night when anyone's actually using it.

Total build time was an afternoon. That's the whole point of a project like this, it doesn't need to be more than it is.
