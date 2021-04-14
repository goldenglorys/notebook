(self.webpackChunk_goldenglorys_notebook=self.webpackChunk_goldenglorys_notebook||[]).push([[591],{4951:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return l}});var a=n(9756),i=(n(7294),n(4983)),o=n(4311),r={},s={_frontmatter:r};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Windy City Hacks Newsletters"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"https://windyhacks.com/"},"Windy City Hacks"),", I wanted to send out custom HTML newsletters, entirely from my iPad. The process I came up with isn’t necessarily ",(0,i.kt)("em",{parentName:"p"},"good"),", but here’s how I did it."),(0,i.kt)("p",null,"Note: This will require significant customization if you’re intending to use a similar process. Also, be prepared to spend several hours per newsletter, start to finish."),(0,i.kt)("p",null,"I started by using a ",(0,i.kt)("a",{parentName:"p",href:"https://zurb.com/playground/responsive-email-templates"},"Zurb responsive email template"),", because CSS + emails is a horrible combination. I spent several hours updating the design to the Windy brand, testing in various clients, etc."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://2019-site.windyhacks.com/newsletters/first.html"},(0,i.kt)("strong",{parentName:"a"},"Check out a sample newsletter"))),(0,i.kt)("h2",null,"Writing a newsletter"),(0,i.kt)("h3",null,"Apps I used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shortcuts"),(0,i.kt)("li",{parentName:"ul"},"Drafts"),(0,i.kt)("li",{parentName:"ul"},"Working Copy"),(0,i.kt)("li",{parentName:"ul"},"Numbers")),(0,i.kt)("h3",null,"Shortcuts I made"),(0,i.kt)(o.KS,{mdxType:"ShortcutsList"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.icloud.com/shortcuts/fb0d8b55d9014266812942c83b6fbc97"},"Compose Newsletter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.icloud.com/shortcuts/af62700c88d7409ab231aa37beebcfd4"},"Newsletter HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.icloud.com/shortcuts/21225bcd5b494ad8acf0b3272ee3dbb1"},"Make Plain Text Newsletter")))),(0,i.kt)("p",null,"I started by composing the newsletters (with ",(0,i.kt)("a",{parentName:"p",href:"https://matthewstanciu.me"},"Matthew"),"), focusing just on what we wanted to say. (Apple Notes works great here.) Remember, the content matters a whole lot more than the formatting :)"),(0,i.kt)("h3",null,"Composing the HTML"),(0,i.kt)("p",null,"I then ran the ",(0,i.kt)("inlineCode",{parentName:"p"},"Compose Newsletter")," Shortcut, which creates a new file in Working Copy at the correct path with the basic template."),(0,i.kt)("p",null,"If you plug your iPad into an external display (USB-C → HDMI adapter if your monitor isn’t directly supported), Working Copy renders a preview of the HTML on the external display, & the code on your iPad. Fab!"),(0,i.kt)("p",null,"I’d set up Split View with Working Copy next to Shortcuts, & Notes in Slide Over."),(0,i.kt)("p",null,"The next part was always super painful, because of the need to generate HTML with inline styles. For each line of text, I’d run the ",(0,i.kt)("inlineCode",{parentName:"p"},"Newsletter HTML")," Shortcut, fill out whatever options, & paste into the Working Copy editor. Inline formatting like bold or links must be handled individually."),(0,i.kt)("h3",null,"Generating a plain text copy"),(0,i.kt)("p",null,"Sending plain text alongside your HTML email is good form. Unfortunately, I couldn’t just use the original text, because I’d always edit it while making the HTML version/reading it in my client."),(0,i.kt)("p",null,"Select all the HTML in the Working Copy editor, Share → Shortcuts → Make Plain Text Newsletter, then edit in Drafts."),(0,i.kt)("h2",null,"Sending a newsletter"),(0,i.kt)("p",null,"If you’re using ",(0,i.kt)("a",{parentName:"p",href:"https://hackclub.com/bank/"},"Hack Club Bank"),", Hack Club has an installation of ",(0,i.kt)("a",{parentName:"p",href:"https://sendy.co"},"Sendy"),", which is honestly the best newsletter software I’ve ever used. Highly recommend it over MailChimp & friends."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: I’ve previously tried TinyLetter for a hackathon, but if anyone replies to your email with an attachment (like their signed waiver form), you can’t see the attachment. This is a big no.")),(0,i.kt)("h3",null,"Generating the recipient list"),(0,i.kt)("p",null,"Our attendees were stored in Airtable, so I did whatever relevant filtering there, then exported a CSV. (This is only available via the website because Airtable’s iPad app sucks, but the website is becoming more usable via iPadOS). Then I’d open the CSV in Numbers to manipulate the columns (renaming the emergency contact name to ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", deleting unused columns, etc), re-export as CSV, & upload the list to Sendy."),(0,i.kt)("p",null,"This is super tiresome, but there wasn’t a clear pattern to automate, & CSV is rough to automate in Shortcuts."),(0,i.kt)("h3",null,"Sending it out"),(0,i.kt)("p",null,"This part is pretty simple! Paste the plain text & HTML into Sendy’s editor. They’ve got options for scheduling, sending test emails, etc."),(0,i.kt)("h3",null,"Test your newsletter. Always!"),(0,i.kt)("p",null,"Never, ever send out a newsletter without sending yourself a test copy, sometimes several, first. I would undoubtedly discover a typo, need to make an edit, find a bug, etc."),(0,i.kt)("p",null,"I hope this was somewhat useful. It’s not a recommendation to use this system, merely documentation of what I did if you wanted to recreate it for your own hackathon, club, etc."),(0,i.kt)("p",null,"Happy emailing! 💌"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2019-09-05-windy-city-hacks-newsletters-mdx-7db3df89a274c804c751.js.map