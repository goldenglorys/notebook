(self.webpackChunk_goldenglorys_notebook=self.webpackChunk_goldenglorys_notebook||[]).push([[2646],{4876:function(e,t,o){"use strict";o.r(t),o.d(t,{_frontmatter:function(){return r},default:function(){return p}});var i=o(9756),n=(o(7294),o(4983)),a=o(1566),s=o(4311),r={},l={_frontmatter:r};function p(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",Object.assign({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"Real web development on iPad"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d2wkqk610zk1ag.cloudfront.net/items/1N0Z3L3A1a0s0I0W1b3e/iVBORw0KGgoAAAANSUhEUgAAC50AAAjwCAYAAAAKgq9xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAM-2.PNG",alt:"My setup, shown on iPad"})),(0,n.kt)("p",null,"As a web designer-developer, I’ve been doing all my work from a MacBook Pro since the beginning. But as a student carrying & using my iPad Pro for 95% of my work, I wanted a portable coding setup I could use from my iPad."),(0,n.kt)("p",null,"(If you’re getting started with development, I absolutely recommend a Mac instead of a more complicated setup like the one I’m about to describe. Focus on learning the tools, not your setup for using them.)"),(0,n.kt)("h2",null,"Historical context"),(0,n.kt)("p",null,"Though in the past ",(0,n.kt)("a",{parentName:"p",href:"https://notebook.lachlanjc.me/2019-09-12_ipad_coding_with_glitch/"},"I’ve heavily used Glitch")," for coding on iPad, I’ve begun to reach its limitations. My Notebook site is big enough (!) that developing it maxes out the memory limits of Glitch, which forces the app to hang, restart, rebuild, and generally slows my development workflow down enormously. I love Glitch, but as of right now it’s just not well-suited enough for serious web development. Perhaps that ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/anildash/status/1178018904708456448?s=21"},"will change soon"),"."),(0,n.kt)("p",null,"There’s also hardware solutions ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/jxnblk/status/1147555688933154816?s=21"},"like @jxnblk’s"),", but when the entire premise of coding on iPad is portability, they don’t fit the bill for me."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://link.medium.com/aehMI5yHn1"},"Online-hosted VSCode")," is another exciting new option opening up, which is being officially embraced by Microsoft with this week’s launch of ",(0,n.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/services/visual-studio-online/"},"Visual Studio Online"),". I haven’t tried either yet, but ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/bitandbang/status/1191370550788206592?s=20"},"Tierney Cyren has some details on Twitter"),"."),(0,n.kt)("h2",null,"My VPS setup"),(0,n.kt)("p",null,"I’ve now set up a VPS on ",(0,n.kt)("a",{parentName:"p",href:"https://digitalocean.com"},"DigitalOcean")," for running my coding setup from. While there are many similar services (Linode, AWS, etc), I’ve been really happy with DigitalOcean’s service."),(0,n.kt)("p",null,"Here’s a referral link, if you’re interested: (I’ll get credit too!)"),(0,n.kt)(a.zx,{as:"a",href:"https://m.do.co/c/5df20347f8ef",mdxType:"Button"},"Get $50 on DigitalOcean"),(0,n.kt)("p",null,"(Huge shoutout also the ",(0,n.kt)("a",{parentName:"p",href:"http://education.github.com/pack"},"GitHub Student Developer Pack"),", which provides discounts on tons of great developer services, including DigitalOcean!)"),(0,n.kt)("h3",null,"DigitalOcean droplet"),(0,n.kt)("p",null,"For getting started, I set up a minimum droplet on Ubuntu (with backups enabled) in NYC. Nothing special here."),(0,n.kt)("p",null,"Big thanks to ",(0,n.kt)("a",{parentName:"p",href:"https://tmb.sh"},"Theo Bleier")," for helping me out here—servers are not at all my forté & he walked me through setting up a user, Linux basics, Tmux, etc. I couldn’t have done it without the assistance :)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d2wkqk610zk1ag.cloudfront.net/items/1c1X110r0e1t2o1k0d1L/IMG_0971.jpg",alt:"DigitalOcean dashboard"})),(0,n.kt)("h3",null,"Termius"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://termius.com"},"Termius")," is a great SSH client ",(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/termius-ssh-client/id549039908"},"available free on the App Store"),". I added my server and everything worked just as expected."),(0,n.kt)("p",null,"(Termius Pro is also available through the Student Developer Pack, so make sure to enable that, so you use their longer background sessions.)"),(0,n.kt)("h3",null,"Vim"),(0,n.kt)("p",null,"Using a command-line editor is the biggest change from Glitch/VSCode.\nI’m already well-versed in Vim, and use it inside VSCode normally, but it’s an adjustment nonetheless."),(0,n.kt)("p",null,"If you’re looking to start learning it, ",(0,n.kt)("a",{parentName:"p",href:"https://mrmrs.cc"},"Adam Morse")," provided my original inspiration & learning resources. Here"),(0,n.kt)(s.Mc,{mdxType:"LinkList"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mrmrs.cc/writing/vim-as-a-design-tool/"},"Vim as a design tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://mrmrs.cc/writing/common-vim/"},"Common Vim")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://designbytyping.com/2013/12/24/vim-project-setup/"},"Screencast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://vimgifs.com"},"Vimgifs")))),(0,n.kt)("h4",null,"Setting up Vim"),(0,n.kt)("p",null,"On my Mac I have an incredibly long ",(0,n.kt)("inlineCode",{parentName:"p"},".vimrc"),", but I wanted to start out fresh on the server. You too will probably want to change a bunch of defaults (such as to show line numbers, set your indentation preference, etc), so here are some Vim setups to check out:"),(0,n.kt)(s.Mc,{mdxType:"LinkList"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thesephist/dotfiles/blob/master/remote/.vimrc"},"@thesephist")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/jxnblk/d7228fa1b1249ccc3e8d74433d3277c5"},"@jxnblk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mrmrs/vimrc/blob/master/.vimrc"},"@mrmrs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/thoughtbot/dotfiles/blob/master/vimrc"},"@thoughtbot")))),(0,n.kt)("h3",null,"Tmux"),(0,n.kt)("p",null,"I’ve heard about Tmux for awhile but had never used it, so I took the plunge. It’s basically a glorified command-line version of using multiple terminal tabs, except you can hide tabs, close & re-open windows, and do other fancy things."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://thoughtbot.com/blog/a-tmux-crash-course"},"Thoughtbot’s Crash Course")," was super useful for understanding the basics. I haven’t been using Tmux for long enough yet to have opinions on setting it up, but Thoughtbot has a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thoughtbot/dotfiles/blob/master/tmux.conf"},"dotfile for that"),"."),(0,n.kt)("h3",null,"Frontend development on iPad: the web inspector"),(0,n.kt)("p",null,"The lack of devtools in iOS Safari has long frustrated me. I’ve tried a number of apps in the past and made my own failed attempts to bundle Chrome’s devtools, but I’ve finally found a solution: ",(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/inspect-browser/id1203594958"},"Inspect"),". While not being quite as sophisticated as Safari or Chrome’s desktop devtools, it has the vast majority of what I need, such as tap to inspect, style editing, responsive design testing, viewing source & network requests, etc. I’ve never seen another iOS solution nearly as good—if you’re a frontend web developer with an iPad, you should check it out."),(0,n.kt)("p",null,"Here’s what my setup looks like with Vim inside Termius in Split View with Inspect:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d2wkqk610zk1ag.cloudfront.net/items/29131Y330C0w3e1J211n/IMG_0992.PNG",alt:"Termius/Vim + Inspect"})),(0,n.kt)("h3",null,"What about localhost:3000?"),(0,n.kt)("p",null,"Because your code isn’t running on the device directly, ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost")," isn’t how you’ll access it. While each DigitalOcean droplet comes with a publicly-accessible IP address, it’s ugly & the default setup only allows using one port at a time."),(0,n.kt)("p",null,"While ",(0,n.kt)("a",{parentName:"p",href:"http://ngrok.com"},"ngrok")," is well-known & works great, using anything but its random subdomains requires a costly subscription. While I’m not at all against paying for great tools, it seemed unnecessary for getting started."),(0,n.kt)("p",null,"I found ",(0,n.kt)("a",{parentName:"p",href:"https://serveo.net"},"serveo.net"),", which offers nearly the same functionality. You can super easily set your own subdomain (like your username or the project name), run it in the background via Tmux, and it worked pretty flawlessly for me."),(0,n.kt)("h2",null,"Integrating with iOS Files"),(0,n.kt)("p",null,"Although at first I tried ",(0,n.kt)("a",{parentName:"p",href:"https://tutorials.ubuntu.com/tutorial/install-and-configure-samba"},"setting up SMB filesharing")," on my server to use the new ",(0,n.kt)("a",{parentName:"p",href:"https://www.macstories.net/stories/ios-and-ipados-13-the-macstories-review/7/#usb-drives-and-smb-servers"},"Connect to Server feature in iPadOS’ Files"),", it didn’t work for me, probably due to my complete lack of understanding of such backend topics."),(0,n.kt)("p",null,"I only then noticed that Termius has an integration with iOS Files by default! In fact, Termius’ integration is pretty solid, allowing you to browse, edit, and ",(0,n.kt)("a",{parentName:"p",href:"https://www.macstories.net/stories/beyond-the-tablet/3/#open-in-place-and-file-bookmarks"},"open files in place"),". If you’re looking to just have access on iOS Files, Termius’ built-in capabilities should suffice."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d2wkqk610zk1ag.cloudfront.net/items/3O1l3Q2n0v0h050J1O2A/h9cruzwcr81ncgd901ypey1cx33khwr1.png",alt:"Browsing the server filesystem via Termius in iOS Files"})),(0,n.kt)("p",null,"While the file provider works great as it is, it offers no automation features. I installed the ",(0,n.kt)("a",{parentName:"p",href:"https://secureshellfish.app"},"Secure ShellFish")," app (by the developer of the unparalleled iOS Git client ",(0,n.kt)("a",{parentName:"p",href:"https://workingcopyapp.com"},"Working Copy"),", and it’s free!). It facilitates a similar iOS File Provider:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://d2wkqk610zk1ag.cloudfront.net/items/0M0f020a3G2O3F2j1g0E/u4tb62m11g7kag7bytz1db051uvbfpx9.png",alt:"Browsing the server filesystem via Secure ShellFish in iOS Files"})),(0,n.kt)("p",null,"But Secure ShellFish opens up lots more possibilities of automation…"),(0,n.kt)("h2",null,"iOS Automation"),(0,n.kt)("p",null,"Going from server to iOS Shortcuts was inevitable here, no?"),(0,n.kt)("p",null,"Though Termius’ file provider works nicely, the app provides only a single shortcut for automation on iOS, ”Connect to,” and has no filesystem shortcuts (uploading or querying files, namely)."),(0,n.kt)("p",null,"Secure ShellFish includes a wide array of shortcuts, based on ",(0,n.kt)("a",{parentName:"p",href:"https://thesweetsetup.com/all-the-new-things-in-shortcuts-for-ios-13/"},"iOS 13 Shortcuts’ parameters"),". ",(0,n.kt)("a",{parentName:"p",href:"https://scriptable.app"},"Scriptable")," is another app that should be shouted-out here, since it supports the ",(0,n.kt)("a",{parentName:"p",href:"https://www.macstories.net/stories/beyond-the-tablet/9/#file-bookmarks"},"Files bookmarks API"),", which allows for JavaScript-based automation of the filesystem. These scripts can be run in the background via Shortcuts/Siri. I’ve yet to use Scriptable significantly, but I suspect I will soon."),(0,n.kt)("h3",null,"Publishing to my Notebook"),(0,n.kt)("p",null,"In the past, I published on this site by making a new file on Glitch, pasting in the text, confirming the page rendered correctly, & exporting to GitHub. (Netlify automatically deploys the site based on GitHub.) Without Glitch, I have more flexibility, but need to set up my own system."),(0,n.kt)("p",null,"For now, I’m using a very simple workflow: write in ",(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/drafts/id1236254471"},"Drafts"),", save the post to a new file in ",(0,n.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/working-copy-git-client/id896694807"},"Working Copy"),", commit, push. Though I can write in any text editor & save to Working Copy, this workflow doesn’t allow me to preview or develop anything custom before the post goes live."),(0,n.kt)("p",null,"Considering the ",(0,n.kt)("a",{parentName:"p",href:"https://www.macstories.net/reviews/drafts-15-review-multiwindow-shortcuts-and-more/"},"new automation features of Drafts 15"),", I may also consider a publishing workflow directly from Drafts using Shortcuts and/or Secure ShellFish/Scriptable."),(0,n.kt)("p",null,"Shortcuts also supports ",(0,n.kt)("a",{parentName:"p",href:"https://rosemaryorchard.com/blog/workflow-upload-blog-post-via-ssh/"},"running Bash scripts over SSH"),". A more complex, but more flexible, publishing shortcut could upload via ShellFish and run a script over SSH: Secure ShellFish’s upload shortcuts would allow saving the MDX file at the correct path, then I could use Shortcuts’ Bash scripting to either enable Serveo and open Inspect (which does not support Shortcuts, unfortunately) or just directly ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit && git push"),"."),(0,n.kt)("p",null,"These automated directions are to explore over upcoming days/weeks, so for now I’m publishing via Working Copy without previewing or using Vim over SSH (like an animal)."),(0,n.kt)("h2",null,"Conclusion"),(0,n.kt)("p",null,"Full-stack web development on iPad comes with many constraints, but it enables creating all kinds of custom workflows fairly simply. If you embark on this journey and discover improvements to the workflow I’ve outlined here, please ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/lachlanjc"},"let me know on Twitter"),". Until then, happy coding!"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2019-11-05-real-web-development-on-ipad-mdx-e9e7bf252c0a8560c383.js.map