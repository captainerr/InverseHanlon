---
title: "BIP-110: The Threshold Is the Tell"
description: "BIP-110 needs 55% to change Bitcoin's consensus rules; SegWit and Taproot needed 95%. That gap is not a rounding error. It's a decision about how many people you're willing to strand."
pubDate: 2026-07-21
tags: ["bitcoin", "bip-110", "governance", "soft-fork", "uasf", "consensus", "incentives"]
draft: false
---

# The Threshold Is the Tell

*What exactly does a soft fork optimizes for?*

BIP-110 asks you to hold two ideas at once. 

1. Bitcoin's monetary integrity is under such threat that it justifies a consensus change. 
 
2. The change is so modest, so obviously correct, that it only needs 55% of miners to signal before nodes start orphaning everyone who didn't.

Pick one. Urgency and modesty don’t travel together. When a proposal insists on both the move is to stop reading the manifesto and start reading the mechanism.

## The benefit of Doubt

Let me give the steelman its due, because this is where most maximalists already live. Inscriptions turned a monetary ledger into an overpriced pastebin. OP_RETURN payloads and arbitrary data burden node operators who never signed up to host someone's JPEG. "Bitcoin is money not a hard drive" is not a slogan I need to be talked into.

If BIP-110 were only a values statement, it would be uncontroversial. It is neither. It ships an activation client, and the activation client is where intentions get expensive.

## Reading the Mechanism

BIP-110 is a one year temporary soft fork. Formerly known as BIP-444 it shipped as a fork of Bitcoin Knots. It activates as a UASF: nodes running the client reject blocks from miners who have not signaled, rather than miners rejecting invalid blocks among themselves. The lock-in threshold is 55%.

Segwit and Taproot on the other (changes with vastly broader buy in) used a 95% signaling threshold under BIP9. 95% percent is what you require when your priority is nobody meaningful gets left on the wrong side of the chain. 55%  is what you require when your priority is winning.

The gap between those two numbers is not a rounding error. It is a decision about how many people you are willing to strand. At 95%, a split is a rounding error. At 55%, a 45% minority can keep mining a chain that your nodes now refuse and a chain split stops being a risk you tolerate and instead becomes the shape you designed.

## I’m not buying it

The charitable read is that this is naive process design by earnest people who want cleaner blocks. A buggy first client, overwhelmingly negative developer review, and a pseudonymous author; string those together and you get a story of incompetence.

I do not buy the incompetence story, because incompetence does not reliably produce a threshold this precise. A 55% UASF that orphans non signaling blocks is not caution. It is a loaded coordination weapon. The people who set the trigger weight knew the difference between 55 and 95. When a mechanisms most notable feature is that it maximizes leverage while minimizing the coalition required to pull it, assume that *leverage* was the purpose.

That is the inversion. Do not attribute to sloppy governance what is better explained by a malicious faction that would rather win a fork on its own terms than lose a vote on everyone else’s.

## Cloudy With a Chance of Asterisks

The people cheering this are, in many cases, the same people who spent the fork wars of 2017 warning that contentious forks are how you get scammed into a splinter chain with no replay protection. SegWit2X got within roughly 1 month of splitting the network before it was called off. The lesson everyone claimed to learn was that you do not force a contested change through a low bar and hope the minority folds.

Apparently that lesson had an asterisk: it only applies when the cause is impure. Dress the same maneuver in "sound money" and the chain-split hawks become chain-split doves overnight. The tell is not that they changed their minds on forks. The tell is that they never minded forks; they only cared about which fork.

## What to actually watch

Ignore the vibes and the 66KB protest images. Watch three things:

- Whether the threshold moves. A number chosen for consensus can be raised toward consensus. A number chosen for leverage will be defended.
 
- Who declines to run it. The largest pools sitting out are not apathetic; they’re reading the split risk and are the people with the most to lose.
 
- What does "temporary" mean after month twelve? Temporary powers are the ones institutions least like to return.

A soft fork's stated purpose lives in its announcement. But I unstated (real) purpose is in its activation threshold. When the two disagree, look at the threshold.
