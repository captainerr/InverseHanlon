---
title: "How to read a breach notification"
description: "A field guide to the passive voice, the abundance of caution, and other load-bearing phrases of incident PR."
pubDate: 2026-07-14
tags: ["security", "incentives"]
---

Breach notifications are a genre, and like any genre they have conventions. Once you learn them, you can extract more truth from what a notification *avoids saying* than from what it says. A translation guide:

## "We recently became aware"

The word doing the work here is *aware*. Not "it recently happened" — they became aware. The gap between those two dates is where the story lives, and its absence from the notification is rarely an oversight. If the intrusion window mattered less than the discovery date, they would have led with it.

## "A sophisticated threat actor"

Sometimes true. But note that this phrase serves the company regardless of whether it's true: nobody blames you for losing to a nation-state. When the eventual technical report says the initial access vector was a VPN appliance with a CVE from two years ago and no MFA, "sophisticated" was doing reputational work, not descriptive work.

## "Out of an abundance of caution"

This phrase precedes actions that were legally required, contractually required, or forced by a journalist's deadline, approximately always. Genuine abundance-of-caution actions — rotating credentials that probably weren't touched, notifying users who probably weren't affected — are real, but the phrase has been so thoroughly strip-mined by incident PR that it now signals the opposite of what it says.

## "No evidence that data was misused"

The most honest-dishonest sentence in the genre. It is usually literally true, because *evidence of misuse* requires logging you didn't have, monitoring you didn't do, and time that hasn't passed yet. "We have no evidence" from an organization that just demonstrated it doesn't collect evidence is not reassurance. It's a tautology wearing a suit.

---

The inverse-Hanlon point here is not that every notification is a lie. It's that breach notifications are written by counsel, reviewed by comms, and optimized to minimize liability — which means every ambiguity you notice was *chosen*. Read them the way you'd read a contract from someone who drafted it: the omissions are the content.
