---
title: 'Privacy and Security Series: Part I'
date: '2019-01-20T11:09:32.008Z'
description: Use this bash function to quickly switch between SSH and HTTPS for your GitHub repo remotes.
published: false
---

I've been wanting to write a blog series on personal internet security for a while now. There's never a bad time to talk about security, and I've got some interesting topics ranging from protecting your privacy to protecting your identity and your character. We might casually think of security breaches and leaks as happening only to large, faceless organizations, but that's simply not true. There are steps you can and should take to secure your privacy. Let's begin.

# 2019: Year of the Password Manager

Seriously, it's 2019 and if you aren't using a password manager, it's my humble opinion that you're setting yourself up for a bag of hurt. Security breaches happen every day, some detected and others not. You must assume any credential to any web service could be leaked. To mitigate this risk, you need to

- use random, complicated passwords;
- and never reuse a password

so that any leaked credentials can't be used to access other accounts. How do you accomplish this? A password manager. Recent changes in Apple's iOS and Google's Android have made it easier than ever to use password managers. You can read more about password managers here, but really you should stop questioning it. Again, if you use the internet, you are at risk.

## How to do it right

It's not enough to just store your passwords in a password manager. Here's how to properly use a password manager:

1. your master password must be completely unique.

   It can't be related to anything else. There can be no chance of it leaking because it can only live in your head. It can't be easy for someone to figure out. It can't be birthdays, it can't be pet names, it can't be family.

2. always generate passwords with as much variation as possible.

   you'll often find certain websites, like government, medical, and finance websites, that can't support a wide range of characters for the password, or can't support a long password. that's shitty, but a password manager will help you make the best of this situation. a good password manager will have an entropy meter which will help you determine the strongest password you can fit into limited password requirements.

   now of course, whenever you CAN generate complicated passwords, you should. Most modern websites will support long and complex alphanumeric passwords.

   the more complicated it looks, the better. you're not going to remember it, your password manager is!

3. audit your passwords.

   As we talked about, Leaks Happen. So, you need to be notified when your passwords have leaked online. First, go to [haveibeenpwned.com](http://haveibeenpwned.com) to check your different email addresses, and then sign up for their email alerts. Have you been pwned? (Me too, there's no shame in it. It's just random! Really, if you've used the internet, you've probably been pwned.) If so, it's time to change some passwords.

   You also can never have a duplicate password. Having a duplicate password is a really bad scenario, because then a single leak leaves you vulnerable in multiple places. Password managers generally will alert you to and discourage you from using duplicate passwords.

   Also, look for your credit providers to offer email alerts. There are some vendors that will search parts of the dark web to look for your information in leaks.

   Also also, were you part of the Marriott Leak? If so, sign up for the identity protection services they're paying for. It's the least you could do. And don't ever use a non-randomized password for anything ever again.
