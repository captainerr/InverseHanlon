---
title: "Hacking Is Dead, Long Live Hacking"
description: "The most devastating breaches of the decade required almost no hacking. It's a return to hacking's original social and adolescent form. And this time it came back with a body count."
pubDate: 2026-07-21
tags: ["cybersecurity", "hacking", "social-engineering", "the-com", "scattered-spider", "history"]
draft: false
---

# Hacking Is Dead, Long Live Hacking

*Why The Com is hacking's return to type.*

---

In the spring of 2024 someone walked out of one of the largest telecom companies in America with phone call and sms records of [nearly every customer it had](https://www.cybersecuritydive.com/news/att-cyberattack-snowflake-environment/721235/), around 110 million people. The metadata of a hundred million conversations: who called who, when, and for how long. They carried a map of the nation's private life detailed enough to reconstruct affairs, and other dirty secrets, from the shape of the traffic. When the extortion demand came, AT&T paid a [$370,000 ransom in Bitcoin](https://www.hackthebox.com/blog/snowflake-breach-attack-anatomy) for a promise to delete it. There is, of course, no way to verify anyone deleted anything.

**I know what you're imagining:**

- A darkened room
- A progress bar
- A wall of green text yielding to a keyboard played like an instrument
- A computer nerd against the firewall

**Except it was nothing like that.**

There was no zero day vulnerability or cryptographic breakthrough. No elegant exploit threading a flaw no one had noticed. The cloud platform that held the data was never broken into. [Stolen login credentials](https://www.cybersecuritydive.com/news/att-cyberattack-snowflake-environment/721235/) harvested by infostealer malware on someone else's machine walked right through the front door because nobody had bothered to turn on two-factor authentication. In the parallel campaigns that defined the year the method was even flatter: a phone call to a helpdesk and a confident voice on the other line. The code is read aloud by an employee doing exactly what they were trained to do.

This is what people mean when they say hacking is dead: the most devastating breaches of the decade required almost no hacking. At least, not in the sense any of us were taught to imagine hacking.

We are watching hacking die and, in the same breath, be reborn in the shape of its roots.

## The myth we bought

For thirty years we were sold a story about what hacking is, and we bought every word of it.

The story goes like this. Somewhere out there is a computer nerd, almost always imagined as a man, sitting hunched over a glowing screen in the dark. He's fluent in a language you will never understand and no one really speaks. He's at war with a wall made of digital fire. On one side the firewall is cold, mathematical, nearly unbreakable code. On the other side is him. The whole thing is technical. Skill vs. defense. Whoever writes the better code wins.

It is a great story. It sold movies and more importantly: it sold products.

Because if hacking is a code fight, then defense is a code fight too, and a code fight is a thing you can buy your way out of. So we bought. Firewalls, and then next-generation firewalls. Endpoint detection, threat feeds, a security operations center to read them. We stood up bug bounties and paid strangers to find the holes before the geniuses did. An entire industry grew up around the premise that the war was technical and the budget should be too. Today it runs [north of a quarter of a trillion dollars a year](https://www.fortunebusinessinsights.com/industry-reports/cyber-security-market-101165), an arms race measured in dollars and CVEs.

And it worked; more or less... We got very good at winning the fight we'd imagined.

The people robbing us were never fighting that fight.

Here's what the story leaves out: the part where inverting Hanlon's razor gives us real vision. We didn't armor the wall and leave the door open because we were stupid. We did it because the wall is the part you can put on a purchase order.

A firewall is a line item. "We retrained the helpdesk to distrust a friendly voice" is not. One of them shows up in a board deck as a number that went up. The other shows up as a rude call center and a vague hope that nothing happens this quarter. The fix for the real problem is cheap in dollars and ruinously expensive in the one currency nobody wants to spend: attention, repetition, and the awkward work of telling your own employees that being helpful is now a liability. Guess which one gets funded?

So we built a fortress with a magnificent gate and a receptionist who will buzz in anyone who sounds like they work here. Then we acted surprised when every record breaking heist of the last decade walked straight in through the lobby.

They were not smarter than our wall. They knocked on the door, and we opened it.

## But this is how it always was

The story about the lone computer nerd has one problem. It never described the first hackers, and it doesn't describe the best ones. Strip away the movie lighting and hacking has always been the same move: understand a system better than the people who run it, then talk your way through the gap.

Start at the beginning.

Before there was a keyboard to hunch over, there was a whistle. In the early 1970s a man named John Draper discovered that [a toy whistle packaged in boxes of Cap'n Crunch cereal](https://www.atlasobscura.com/articles/capn-crunch-whistle) produced a tone at 2600 hertz, the exact frequency AT&T's long-distance network used to signal an open trunk line. Blow the whistle into the receiver and the system handed you the keys to the country's phone lines. No code, no screen, just a man who understood the network's own language better than the network did. The kids who took this furthest built little boxes to make the tones on demand and sold them around the dorms. Two of them were named Steve Wozniak and Steve Jobs, and Jobs said later that [he doubted Apple would have existed without blue-boxing](https://www.atlasobscura.com/articles/capn-crunch-whistle) first. The point is smaller and stranger than the legend: the founding act of Silicon Valley cool was a phone scam.

By 1983 the phone had become the modem, and the hackers had become teenagers. A cluster of them in Milwaukee called themselves the 414s, after their area code, and over dial-up they [wandered into a nuclear weapons lab, a cancer hospital in Manhattan, and a bank in California](https://en.wikipedia.org/wiki/The_414s), Los Alamos, Sloan-Kettering, and Security Pacific. They were not breaking encryption. They were guessing default passwords and trying accounts nobody had bothered to lock. One of them, [seventeen years old, ended up on the cover of Newsweek](https://www.edn.com/hacker-is-used-by-mainstream-media-september-5-1983/) and then in a chair in front of Congress. The template was already finished: young, unglamorous in method, spectacular in press. America met "the hacker," and he turned out to be a bored kid with a modem and nothing to do after school.

By the end of the decade the kids had formed crews, and the crews had beef. In New York a group calling itself the Masters of Deception went to war with the older, Texas-rooted Legion of Doom, a running feud the press would later dress up as the [Great Hacker War](https://en.wikipedia.org/wiki/Great_Hacker_War). The battlefield was the telephone switch. The weapon of choice was not malware but manipulation: call the phone company, put on the voice of a technician, and ask a real employee to read back the thing you needed. The prize was never money. It was standing. Who owned which switch, who could prove it, who was better. If you want to understand The Com's hunger for reputation, start here. The clout economy was already running, decades before anyone had the word for it.

And presiding over all of it, the patron saint of the whole idea: Kevin Mitnick. For years the most wanted hacker in America, hunted by the FBI, mythologized into a supervillain who could supposedly launch a nuclear missile by whistling into a payphone. The truth was quieter and more damning. Mitnick's gift was not code. It was the con. He talked employees out of their passwords, talked his way into buildings, talked companies into mailing him their own source code. He said it plainly for the rest of his life: [it's easier to manipulate people than technology](https://brandongaille.com/40-mind-blowing-kevin-mitnick-quotes/). The machine was never the weak point. We were.

Every element we now file under "new" was here already, fully formed, before most of The Com was born. The youth. The crews. The feuds. The addiction to notoriety. The quiet knowledge that the fastest way past a wall is to convince a human to open it. Hacking's supposedly modern face is its oldest one, wearing a hoodie the marketing department picked out.

So if all of this is original equipment, the real question is not why it came back.

It is why we ever believed it left.

## The twenty years we forgot

Then for about two decades hacking grew up and moved out.

The kids didn't disappear, they got buried in the noise. Starting in the early 2000s the center of gravity shifted east and up: east toward the Russian speaking underworld that turned cybercrime into a supply chain and up toward governments that had noticed a good intrusion was cheaper than a cruise missile.

The carding forums and botnet operators of the 2000s were not bored teenagers chasing status. They were businesses with escrow, customer service, and reputation systems. The hackers moved stolen cards and network access credentials by the thousands. That model matured into the ransomware economy: crews running affiliate programs, splitting revenue, and posting their victims on leak sites like any other franchise publishing quarterly numbers. In May 2021, one of them, a Russia-based outfit called [DarkSide](https://www.energy.gov/ceser/colonial-pipeline-cyber-incident), froze the largest fuel pipeline on the American East Coast for five days and made the evening news, and the company paid a [$4.4 million ransom](https://insurica.com/blog/colonial-pipeline-ransomware-attack/) to get it running again. This was not a kid in a bedroom. This was organized crime with a help desk.

Above the criminals sat the states. In 2010 a piece of malware called Stuxnet, widely attributed to the United States and Israel, physically wrecked the centrifuges inside an Iranian nuclear facility, and the world learned that code could break things made of metal. The age of the Advanced Persistent Threat arrived with its own zoo of names, Fancy Bear and Cozy Bear and a numbered legion of state teams patient enough to live inside a network for years. North Korea gutted a Hollywood studio in 2014. Russia slipped a backdoor into a routine software update in 2020, rode it into [roughly nine U.S. federal agencies](https://redtape.substack.com/p/us-agencies-blame-solarwinds-hack), and sat inside those networks, some reports said, for the better part of a year before anyone noticed. Somewhere in the same stretch a company was quietly selling governments a phone exploit clean enough to read a dissident's messages without him ever tapping a link.

This is the era that wrote the mental model most people still carry. The hacker stopped being a teenager and became a funded pro: foreign, technical, and probably working for someone with a flag and a military budget. Security funding grew up to match him. Every dollar of that quarter-trillion-dollar industry was, sensibly enough, aimed at the sophisticated adversary the headlines kept describing.

And it was aimed correctly, as far as it went. The professionals were real. The threats were real. The defenses were necessary. But while the industry armored itself against the funded specialist, it quietly forgot the oldest attacker of all: the one who doesn't beat your technology because he never touches it. The social, adolescent, con-artist strain of hacking did not die during these twenty years. It went dormant in the culture's memory, crowded out of the story by scarier and more expensive villains.

We stopped watching the door because we were busy reinforcing the wall against people who, as it turned out, were not the ones coming for us.

And then the door opened, and the kids walked back in.

## Long live hacking

Meet The Com.

The Com is not a gang. There's no boss, no headquarters, and no roster. When the [FBI finally put out a stack of warnings about it in 2025](https://www.ic3.gov/PSA/2025/PSA250723-3), the word it reached for was "ecosystem," which is bureaucratic but honest. The Com, short for "The Community," is a sprawling mostly English-speaking network of young would be hackers, thousands of them scattered across Discord servers and Telegram channels, mostly between age [eleven and twenty-five years old](https://www.ic3.gov/PSA/2025/PSA250723-3). There's no membership card. There is only whether the others know your handle.

If that sounds familiar, it should. We've already met them. They're the 414s with better tooling.

The bored kid with a modem is now the bored kid with a Discord handle, and he has been busy. The crews that grew out of The Com have names like: Scattered Spider and Lapsus$ and ShinyHunters. They've spent the last few years walking straight through some of the largest companies on earth. In September 2023 a member of Scattered Spider [spent about ten minutes on the phone with MGM Resorts' IT help desk](https://nhimg.org/mgm-resorts-breach-2023-scattered-spider-social-engineers-okta-access), impersonating an employee, and walked away with access that froze casino floors and hotel key cards for over a week and cost the company more than [$100 million](https://cyberscoop.com/las-vegas-teenager-arrested-casino-attacks-scattered-spider/). The public met "the hacker" all over again and once again he was a teenager whose most advanced technique was sounding like he worked there. Lapsus$, who humiliated Microsoft, Nvidia, and Okta (the company that guards the logins for a good slice of the internet), had at its center a [17-year-old from Oxford](https://www.theregister.com/2023/12/21/lapsus_teens_sentenced/) who kept hacking companies from a hotel room while out on bail. Their method was also not sophisticated.

And the clout economy that MOD and LOD ran by hand in 1990 is now fully industrialized. Status inside The Com is denominated in two currencies: skill and stolen money. Members screen share their break-ins for an audience. They brag in real time about balances that sometimes climb into the millions, exactly the way an earlier generation traded which switch they owned. The crews splinter, merge, and feud. They turn on each other, dox each other, and swat each other, sending armed police to a rival's house over a slight or a bragged-about wallet. The Great Hacker War never ended. It just got a leaderboard and now the losers get a tactical unit at the door instead of a rude post on a message board.

But strip all of it down and you land back on "The Mitnick"; the one move that has outlived every era intact. The Com does not beat your security. It calls your security and asks it to step aside. The signature play of the whole ecosystem is the vishing call: a confident voice, a plausible story, an employee on the other end who wants to be helpful. Where Mitnick had to do his own impressions, the current version can borrow an AI to clone a familiar voice, so the person you think you are helping sounds exactly like someone you trust. The technology got better. The target did not change. It is still a human being, and the human being is still the door.

Which brings us back to where we started. That AT&T breach, a hundred million conversations carried out the front door for the price of a phone call, was not a glitch in how hacking works now. It was hacking working the way it worked in 1972, and 1983, and 1990, and 1995, changed only in scale. No zero-day, because none was ever needed. Just a young person who understood the system better than the people running it, and talked their way through the gap.

Hacking did not die. It went home, put on the face it started with, and let itself in.

## But it came back wrong

Here is where the nostalgia curdles like milk left out in the sun.

The old scene had a ceiling and the ceiling was the mercy. Draper stole phone calls. The 414s embarrassed a bank. MOD and LOD fought over switches that belonged to neither of them. Even Mitnick, the supervillain of his generation, never hurt anyone: his crimes were property crimes dressed up as a manhunt. The whole culture topped out at mischief, humiliation, and theft. You could lose your data, your dignity, or your afternoon. You could not lose your child.

The Com kept everything about the old scene except the ceiling. The same youth, the same crew, the same addiction to status, and the same con. Then it took the one thing the old hackers never had: a willingness to reach out of the screen and into the physical world, and then they turned that into a product.

Swatting is the gateway. It began as a prank: a fraudulent emergency call that sends an armed police team to someone's front door became The Com's preferred instrument of discipline. Pointed at rivals, marks who won't pay, at researchers who name them, and sometimes at their families. It's cheap, it's deniable, and it puts loaded weapons in a stranger's living room on command. [People have died](https://www.ksn.com/news/local/city-of-wichita-approves-5m-settlement-in-andrew-finchs-shooting-death/) this way, killed by police responding to an address that had nothing to do with them.

Swatting is the mild end. One branch of The Com, the one the FBI files under IRL Com, sells violence the way the hacking crews sell access. Assault, robbery, arson, kidnapping, and worse are offered with menus and pricing tiers. Jobs are taken on commission by teenagers for cash or for standing in the group. Violence-as-a-service. The clout economy, having run low on digital items to brag about, expanded into flesh.

And then there's the part that kills the nostalgia for real.

The same ecosystem that produced the kids who phoned a casino help desk also produced [764](https://www.aol.com/news/leaders-global-online-extortion-exploitation-190524399.html) and the networks around it. These are not hackers. They are extortion rings that hunt children. They find isolated minors on the same platforms your own kids use, groom them with attention and affection, extract one compromising image, and then use that image as a leash. Coercing the victim into producing more, into self-harm, into [carving a group's name into their own skin](https://www.adl.org/resources/backgrounder/764) for the camera, and into recruiting the next child down the line. It's a torture operation run as a franchise, its currency, like everything else in The Com, is proof and status.

Here is the structural fact that matters, that you can't unsee once you've seen it. These branches aren't separate companies. The [Department of Justice itself describes 764 as one of a number of networks](https://www.aol.com/news/leaders-global-online-extortion-exploitation-190524399.html) operating within the broader Com, sharing servers, slang, recruiters, and in some cases the same people moving fluidly between spheres. A member can slide from stealing crypto, to swatting a rival, to something unspeakable, because the culture carrying him along that path is one continuous funnel. The thing being optimized at every stage is the same thing the 414s wanted in 1983: to be known, to be feared, to matter to the only audience that counts.

That is why the nostalgia is a trap. The charm of the old scene, the bored computer nerd, the teenage crew, and the almost harmless game of status was never harmless. It was low stakes. We mistook a small blast radius for a benign one. Nothing about the psychology changed. What changed is what it can now reach: targets the old hackers would have called untouchable.

## The wall and the door

So where does that leave the quarter-trillion dollars?

Aimed, mostly, at the wrong thing. We spent two decades and a fortune building defenses against the professional: the funded specialist, the state team, the exploit nobody had seen. Those defenses work. They are also guarding a wall that almost nobody bothers to climb anymore because the door is unlocked and the door is a person.

You can't patch a person. There's no signature update for a receptionist who wants to be helpful and no firewall that sits between an employee and their own good manners. The thing that keeps getting exploited is not a flaw in the code. It's a feature of the human being. The same feature the phone company's operators had in 1972 and the casino's help desk had in 2023: the instinct to trust a confident voice that sounds like it belongs.

And here is the incentive trap we walked right into. Defending the wall is legible. It has vendors, dashboards, and a number you can show to the board members. But defending the door is not legible. It looks like paying senior people to sit through the same dull training every quarter, telling your friendliest employees that their friendliness is now a liability, and accepting that the fix will never appear as a line on a chart. So we keep funding the wall and keep losing at the door. We keep calling it a "sophisticated attack" because "they called and we told them" is too embarrassing to write in the incident report.

None of this is an accident. Assume incentive, not incompetence: we built exactly the defense that was easiest to buy and hardest to argue with. They built exactly the offense that walks right in. Both sides are behaving rationally and only one is winning.

Hacking is dead: the computer nerd at the keyboard, the wall of green text, the war of code. This was always mostly a story, and that story is over. What replaced it is older than the myth we are mourning: a kid with a phone, a plausible voice, and the oldest vulnerability in the system: you.

Long live hacking. The king we are mourning was never on the throne. The real one just came of age.
