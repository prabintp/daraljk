---
layout: post
comments: true
permalink: /blog/:title/

title: Web Accessibility for Dummies
date: 2017-05-16

image: /images/posts/accessibility.jpg
thumbnail: /images/posts/thumbs/accessibility.jpg
alt: Web Accessibility Logo

excerpt:

  Accessibility is a very important concept that's often overlooked by developers. As technology becomes more widely-used, making sure the websites you build are accessible to all visitors should be number one on your list!

categories: development

tags:

 - development
 - tips & tricks
 - SEO
 - accessibility

author: Derek Dinsmore
---

I'll be the first to admit it, I was **terrible** at designing websites to be accessible in the beginning. One might be thinking to themselves, "*But Derek, my website looks great to me, why should I care about making it accessible if I don't have any visually-impaired clients?"* I know, it's hard to think about others who might have trouble viewing or using your website when you don't have any disabilities yourself, but you're really doing your users a disservice by not thinking about everyone who could potentially come across your URL. Just because you don't currently have any users affected by poor accessibility, doesn't mean it's not worth delving into. In fact, many concepts associated with accessibility actually help boost your site's SEO rankings, because search engine bots can't see your website, either, they can only read it!

#### Hold on a second. What is accessibility, again? #####

I'll go ahead and defer to [Adobe](http://www.adobe.com/accessibility/gettingstarted.html "Adobe's Accessibility Guide")'s own definition here, as I feel like they explain it pretty well:

> Accessibility involves two key issues: how users with disabilities access electronic information and how web content designers and developers enable web pages to function with assistive devices used by individuals with disabilities. For the user with a disability, the challenge is to identify tools that provide the most convenient access to web-based and other electronic information. For the web content designer/developer, the challenge is to remove the obstacles that prevent accessibility tools from functioning effectively. In many cases, these challenges are relatively simple to overcome, but sometimes the solutions require some additional thought and effort.

#### WCAG 2.0 and why you should care about accessibility ####

W3C's Web Content Accessibility Guidelines [(WCAG)](https://www.w3.org/WAI/intro/wcag "Visit WCAG website") were developed with individuals and organizations around the world to provide standards for web accessibility. As developers, these are the standards and tools we utilize to build accessible websites across the web.

[WC3](https://www.w3.org/standards/webdesign/accessibility "Visit WC3 Accessibility website") defines the purpose of the WCAG guidelines as:

> It is essential that the Web be accessible in order to provide equal access and equal opportunity to people with diverse abilities. Indeed, the UN Convention on the Rights of Persons with Disabilities recognizes access to information and communications technologies, including the Web, **as a basic human right.**

They go on by saying:

"**Accessibility supports social inclusion** for people with disabilities as well as others, such as older people, people in rural areas, and people in developing countries.

**There is also a strong business case for accessibility.** Accessibility overlaps with other best practices such as mobile web design, device independence, multi-modal interaction, usability, design for older users, and search engine optimization (SEO). Case studies show that accessible websites have better search results, reduced maintenance costs, and increased audience reach, among other benefits. Developing a Web Accessibility Business Case for Your Organization details the social, technical, financial, and legal benefits of web accessibility."

You should be developing towards their AA standards, at a minimum.

#### How do I test if my site is accessible? ####

Unless your site is really simple in its content, it's pretty unlikely it'll be *fully* accessible from the get-go, but the easiest way to check your site is by refreshing your page and using the keyboard to fully navigate your website utilizing the Tab, Space, Enter and arrow keys. You'll also want to use a screen reader to make sure your content is read in the correct order by your computer. If you're using Mac, their [VoiceOver](https://www.apple.com/accessibility/mac/vision/ "Visit the Mac VoiceOver website") tool is a great start. For Windows, the free [NVDA](https://www.nvaccess.org/ "Visit the NV Access website") suite is worth checking out, plus the industry-standard, [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS "Visit Job Access With Speech - JAWS - website").

Using your keyboard and a screen reader to navigate and read your page can be a real eye-opener for developers who don't usually build sites for disabled users. Don't worry, thankfully accessibility has come a long way in the past few years and many standards have emerged that make it even easier to build an accessible website. Keep in mind, this guide is a crash-course on accessibility and the topic can get very dense, the more complex your application is.

#### Accessibility: The Basics ####

Fortunately, accessibility really isn't that hard once you start to develop with it in mind. From a general sense, it really boils down to a few main elements:

1. Making sure your images and links both contain proper "alt" and "title" attributes with **descriptive** messages
2. Textual elements provide adequate contrast with their background elements
3. Items that should be clickable are focusable by the keyboard and provide visual cues to the reader when they are selected
4. Form elements like checkboxes and radio buttons are selectable by keyboard actions
5. JavaScript interactions are controllable by the keyboard

#### 1. Properly adding descriptions to images and anchors ####

If you've ever done SEO for a website, you know how important it is to add *alt* descriptions to images and *titles* to anchor tags, but what you probably didn't realize is, you're actually making your website more accessible to visually-impaired readers, too! Think about it: when Google indexes your website, it can't actually see what's rendered on a screen, it just reads your markup. That's exactly how a screenreader works and it's simple to fix if you haven't already.

**The alt Attribute:**

The "alt" attribute of an `<img>` tag provides alternative information for an image if a user cannot view it. Not only does this display in place of an image with a broken link, but it's also read by screen readers and search engines, so they know what the image is.

You should try to be as descriptive in your text as possible, ie:

`<img src="cats.jpg" alt="Cats playing outside">`

Try to avoid using images containing large amounts of text, but if your image does contain text, enter it in the alt description:

`<img src="jobpost.jpg" alt="Wanted: Talented Drupal Developers!">`

**The title Attribute:**

When using the title attribute you should be providing information about where you're sending the user. You should not duplicate the anchor text in a title tag (unless you're truncating the text within it), as it's redundant. Use a title tag to support the content within the anchor:

`<a href="/portfolio" title="Check out our portfolio to view more of our work"> See more </a>`

#### 2. Testing the contrast of your page's content ####

Contrast is concerned with the size, weight and color of your textual elements over their background content. WCAG 2.0 AA standards require a contrast ratio of 4.5:1 for normal text and 3:1 for large text. Thankfully, you don't really need to know how to do this, as WebAIM has developed an awesome tool for this! Contrast Checker provides a great resource to verify that your color choice provides a proper contrast ratio, which you can [check out here](http://webaim.org/resources/contrastchecker/ "Visit ContrastChecker's webpage"). Just enter in your background's color value and the foreground value and it'll tell you whether you're compliant or not! **How's that for easy?**

**Note:** While not ideal, if your branding requires you to use a certain font color for anchor tags that can't be changed, a good workaround is giving your link a dark border-bottom that allows your users to easily distinguish the text as a link.

#### 3. Testing for properly focusable items ####

This test is easy enough, simply navigate your page and start tabbing! You'll know pretty quickly what is and isn't focusable, which will give you a good starting point on where to look in your code. It's also important to make sure your content is highlighted in the correct order. Avoid using too many absolutely-positioned elements, as this can really mess up the order your page is read in. Keep in mind, a screenreader usually reads your content in the order it's placed in your HTML. If your items are tabbing in the wrong order, you'll want to check your markup!

**tabindex Attribute:** If you run into issues with tabbing that just can't seem to be fixed in your regular markup, the `tabindex=""` HTML attribute is here to help. WebAIM cautions that you should only use this attribute, however, if:

1. The default tab order is not ideal, and
2. The tab order cannot be changed by rearranging items in the content and/or by altering the stylesheet to reflect the best visual arrangement.

Learn more about the tabindex attribute [at WebAIM's website](http://webaim.org/techniques/keyboard/tabindex "WebAIM on tabindex").

**Note on Focused Elements:** Many beginning developers disable the built-in `:focus` CSS outline that browsers assign. This is a **big no-no** when making your site accessible! **Embrace the outline!** It makes it easier for your readers to see where they're clicking on the page.

#### 4. Making your form elements accessible ####

This could easily be a topic in itself, so I won't go into a lot of detail here. More recently, it's become common practice for developers to use custom styling on checkboxes and radio buttons, because you cannot directly style the default HTML `<input type="checkbox">` or `<input type="radio">`. Unfortunately, these solutions are rarely ever keyboard accessible and I strongly caution users who don't already have a strong background in developing accessible websites to stay away from them. The default HTML form elements are accessible by nature.

If you *have* to have custom checkboxes or radios, check out this [tutorial by Manuel Strehl](http://www.manuel-strehl.de/dev/on_replacing_checkboxes_with_CSS3.en.html "Accessible custom checkbox tutorial").

#### 5. Accessible JavaScript ####

Many people developing web pages believe that using JavaScript makes the page inaccessible, but that's just not true. Using JavaScript **does not** mean that your page is inaccessible, in fact, with modern screen readers allowing full support of the language, JS is actually a benefit to accessibility in many cases. However, this topic is very vast and requires more advanced knowledge, so I'll leave this for another time. However, custom JavaScript is often where people run into issues with accessibility on more complex sites. Building a complex menu system that's fully accessible can be pretty tricky, as well as sliders and other interactive elements.

WebAIM's [article on accessible JavaScript](http://webaim.org/techniques/javascript/ "Learn about accessible JavaScript from WebAIM") is a great start for those of you wanting to learn more, but for beginners, I'd suggest starting with an accessible CSS/JS framework and make it easier on yourself. While most other frameworks definitely keep accessibility in mind, [Foundation 6 for Sites](http://foundation.zurb.com/sites/docs/accessibility.html "Foundation 6's accessibility documentation") is currently the only fully-accessible CSS and JavaScript framework on the market... and it's totally free!

#### Advanced Readings: ####

[Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA "Learn about ARIA from the Mozilla Developer Network") - a set of special accessibility attributes which can be added to any markup, but is especially suited to HTML.

[WebAIM's Intro to Web Accessibility](http://webaim.org/intro/ "Read the Intro to Web Accessibility") - A quick overview to web accessibility and its development throughout the years.

[Udacity Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891 "Take the free web accessibility course by Google on Udacity") - A free course developed by Google for the Udacity platform.

---

**Have a question or a favorite resource for accessibility? Let us know in the comments!**
