(self.webpackChunk_goldenglorys_notebook=self.webpackChunk_goldenglorys_notebook||[]).push([[888],{4969:function(e,t,r){"use strict";var n=r(7294),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.url,r=e.width,o=e.height,i=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["url","width","height"]),l=t.replace("//music.apple.com","//embed.music.apple.com");return n.createElement("iframe",a({},i,{allow:"autoplay *; encrypted-media *;",frameBorder:"0",height:o,style:a({width:"100%",maxWidth:r,overflow:"hidden",background:"transparent"},i.style),sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation",src:l}))}}]),t}(n.Component);u.defaultProps={width:512,height:150,url:"https://music.apple.com/us/album/ultralife/1440894720?i=1222147721"},t.Z=u},8837:function(e,t,r){"use strict";var n=r(7294),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){return n.createElement("iframe",a({width:"100%",frameBorder:0,allowFullScreen:!0,sandbox:"allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"},e))},s=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.url,r=e.height,o=e.dark,i=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["url","height","dark"]),l="number"==typeof r&&r>230,s="https://embed.song.link/?url="+encodeURIComponent(t);return!0===o&&(s+="&theme=dark"),l?n.createElement("div",{style:{maxWidth:"100%;"}},n.createElement("div",{style:{position:"relative",paddingBottom:"calc(56.25% + 52px)",height:0}},n.createElement(u,a({},i,{height:r,src:s,style:{position:"absolute",top:0,left:0}})))):n.createElement(u,a({},i,{height:r,src:s}))}}]),t}(n.Component);s.defaultProps={url:"https://song.link/i/1396292353",height:150,dark:!1},t.Z=s},1818:function(e,t,r){"use strict";r.r(t),r.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=r(9756),o=(r(7294),r(4983)),i=r(8837),a=r(4969),l={},u={_frontmatter:l};function s(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",Object.assign({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Music roundup, December 2020"),(0,o.kt)(i.Z,{url:"https://song.link/us/i/1543996306",mdxType:"Embed"}),(0,o.kt)(i.Z,{url:"https://song.link/us/i/1540687696",mdxType:"Embed"}),(0,o.kt)(i.Z,{url:"https://song.link/us/i/1543048684",mdxType:"Embed"}),(0,o.kt)(i.Z,{url:"https://song.link/us/i/1450550346",mdxType:"Embed"}),(0,o.kt)(i.Z,{url:"https://song.link/us/i/1544268336",mdxType:"Embed"}),(0,o.kt)("h2",null,"Bonus: Christmastime playlist"),(0,o.kt)(a.Z,{url:"https://music.apple.com/us/playlist/christmastime/pl.u-ke2LivW2P5K",mdxType:"Music"}))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-2020-12-16-music-roundup-december-2020-mdx-3a5eb690a82539e619ee.js.map