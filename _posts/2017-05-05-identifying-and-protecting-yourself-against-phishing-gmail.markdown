---
layout: post
comments: true
permalink: /blog/:title/

title: What to do when you think your Gmail was hacked.
date: 2017-05-05

image: /images/posts/hacking.jpg
thumbnail: /images/posts/thumbs/hacking.jpg
alt: Email Hacker Image

excerpt:

  As we move into an increasingly technology-dependent era, unfortunately, "hacked" email accounts have become increasingly more common. If you think you've been affected, don't worry, you're not alone.

categories: misc

tags:

 - email
 - tips & tricks
 - phishing

author: Derek Dinsmore
---
As we move into an increasingly technology-dependent era, unfortunately, "hacked" email accounts have become increasingly more common. If you think you've been affected, don't worry, you're not alone.

The most common way of hacking your email account is called [phishing](https://en.wikipedia.org/wiki/Phishing "Read the Wikipedia article on Phishing"), or "the fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information, such as passwords and credit card numbers." While phishing is always a threat, in light of a recent nation-wide attack on Gmail, we've put together a quick guide on how to identify and protect yourself against phishing scams.

An example of a phishing email is shown below:

![Screenshot of phishing scam](/images/posts/phishing/phishing_top.png "Screenshot of phishing scam")

### How to spot a phishing email ###
*(And how to protect yourself from future attacks)*

Hackers are becoming more sophisticated in their efforts; it can be difficult to distinguish a legitimate email from a fake one, especially if it's coming from a person you know. While phishing scams usually start with a random sender, as soon as your account is compromised by clicking the link contained within it, the hacker will log into your account and distribute the email, **as you**, to everyone on your contacts list.

Many times, the email can look legitimate, by disguising itself as someone sharing a Google Doc with you, or sending a survey for you to take. In other cases, they may use a linked URL that looks to go to a legitimate web address, but actually, goes to a different location than specified (like in the image below).

![Screenshot of Google Docs phishing scam](/images/posts/phishing/phishing1.png "Screenshot of Google Docs phishing scam")

Above, is a screenshot of an actual phishing scam that recently affected Gmail users. While it appears to be potentially legitimate because of the styling of the button, take a look at an actual email Google would send you with a shared Google Doc below:

![Real shared Google Docs email](/images/posts/phishing/phishing2.png "Real shared Google Docs email")

As you'll see, the original email had a lot missing. However, that's not to say that you'll never see a phishing scam that looks exactly like what a company like Google would send you; it **can** happen. After all, they did identically copy the "Open in Docs" button.

While simply looking at the email and seeing that something looks phishy (ha, see what I did there!?) is usually a great first indicator, the best way to tell if an email is legitimate or not is by inspecting the actual links within the email.

*It's important to note that, simply opening an email containing a phishing scam **does not** mean your account was immediately infected. You have to physically click a button or link and (usually) enter some kind of information or give permission to something in order for your account to be compromised.*

#### How to inspect the links of an email for legitimate URLs ####
*(This is actually more simple than you'd think!)*

**If you're on a desktop or laptop computer...**

Hover your mouse over the button or link and look in the bottom left-hand corner of your browser's page. The URL of the link will display here. In the real example above, hovering over the button shows the following URL on the bottom left of the screen:

![Example URL when hovering over link](/images/posts/phishing/phishing3.png "Example URL when hovering over link")

If your browser doesn't support this feature, you can alternatively right-click the link and select "Copy Link Address" (this title may be different depending on your browser) and then paste it into a text editor to check where you're navigating to:

![Right clicking a link to select copy link address](/images/posts/phishing/phishing4.png "Right clicking a link to select copy link address")

**If you're on a mobile device...**

Place your finger over the link and long-hold until a popup opens. On Android, this will display the link's truncated URL and give you the ability to copy it, so you can paste it somewhere else to view the entire address. The function is very similar on iOS devices:

![Screenshot of URL on Android](/images/posts/phishing/phishing5.png "Screenshot of URL on Android")

In both of these instances, you're inspecting the address to see if it looks legitimate. **The URL should go to a web address you recognize.** In this case, the URL **starts with** google.com, a website we recognize and trust.

**If you're in doubt, don't click it!** Contact the person who sent you the message and ask if it's legitimate, or delete the email if it's not important.

### I've already clicked the link, my account is hacked! ###
*(Don't worry, it'll be okay! Take a deep breath and follow the directions below.)*

#### Step 1: Reset your password ####

If your account has been compromised, the first step you need to take is to change your Google password.

1. Sign into your My Account page
2. In the "Sign-in & security" section, select **Signing in to Google > Password**.
3. Type your current password and your new password.
4. Select **Change password**.

Here's a [direct link](https://www.google.com/settings/passwordchange "Change your Google password"), if you're already signed in.

#### Step 2: Revoke account permission to unknown apps ####

Navigate to https://myaccount.google.com/permissions and inspect the permissions associated with your Google account. If you notice any apps you don't remember giving permissions to, click "Revoke".

![Google App Permissions](/images/posts/phishing/phishing11.png "Google App Permissions")

#### Step 3: Sign out other web sessions ####

Inside your email's inbox, scroll to the bottom of the page, you should see in the bottom right-hand corner a link that says "Open in ___ other location: Details" (the ___ would be the number of locations your email is currently signed in from). Click the **Details** link:

![Details link at bottom right hand corner of Inbox](/images/posts/phishing/phishing12.png "Details link at bottom right hand corner of Inbox")

A new window will open. If anything is listed under "Concurrent Session Information", click the button below it that says "**Sign out all other web sessions**":

![Sign out all other web sessions](/images/posts/phishing/phishing10.png "Sign out all other web sessions")

#### Step 4: Remove unwanted device access ####

Navigate to https://myaccount.google.com/device-activity and inspect the listed devices on your account. If a device is listed that you don't recognize, click on it in the list and select "**Remove**":

![Google Device Activity](/images/posts/phishing/phishing8.png "Google Device Activity")

#### Step 5: Remove unwanted email filters ####

When logged into your email, click the gear icon at the top right, then go to Settings:

![Settings dropdown in Gmail](/images/posts/phishing/phishing6.png "Settings dropdown in Gmail")

Next, navigate to the Filters and Blocked Addresses tabs. If there's anything listed that you didn't enter in yourself, delete it (if you've never created an email filter, this list should be blank):

![Gmail Filters](/images/posts/phishing/phishing7.png "Gmail Filters")

**Questions?** Let us know in the comments!
