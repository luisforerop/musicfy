(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{44:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[artist]",function(){return r(2464)}])},2464:function(n,t,r){"use strict";r.r(t);var e=r(5893),i=r(726);r(7294);t.default=function(){return(0,e.jsx)(i.On,{})}},726:function(n,t,r){"use strict";r.d(t,{dp:function(){return b},On:function(){return m},SK:function(){return j}});var e=r(5893),i=r(444),s=r(3485),u=r(1163),a=r(145),o=r.n(a);function l(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function c(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),e.forEach((function(t){l(n,t,r[t])}))}return n}var d=o().albumsContainer,f=o().albumContainer,m=function(){var n=(0,u.useRouter)().query.artist,t=null===n||void 0===n?void 0:n.replace(/-/g," ");t="AC DC"===t?"AC/DC":t;var r=(0,s.RT)(),a=r.artists,o=r.albums,l=null===a||void 0===a?void 0:a.find((function(n){return n.name===t})),m=o?o[t]:[];return l?(0,e.jsxs)("div",{style:{padding:"0 200px"},children:[(0,e.jsx)(i.Ig,c({},l)),(0,e.jsx)("ul",{className:d,children:null===m||void 0===m?void 0:m.map((function(n){return(0,e.jsx)("li",{className:f,children:(0,e.jsx)(i.rf,c({},n))},n.id)}))})]}):null},v=r(9567),b=function(){var n=(0,u.useRouter)().query,t=n.artist,r=n.album,a="AC-DC"===t?"AC/DC":null===t||void 0===t?void 0:t.replace(/-/g," "),o=null===r||void 0===r?void 0:r.replace(/_/g," ").replace(/qst/g,"?"),l=(0,s.RT)().albums,c=l?l[a]:null,d=(null===c||void 0===c?void 0:c.find((function(n){return n.name===o})))||{},f=d.artist,m=d.image,b=d.name,p=d.id,j=(0,v.ir)({by:"ALBUM",artist:a,albumId:p});return(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"30% 70%"},children:[(0,e.jsx)(i.Iw,{image:null!==m&&void 0!==m?m:""}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i.yz,{artist:t,name:b}),(0,e.jsx)(i.UV,{albumArtist:f,artist:t,songs:j})]})]})},p=r(7294),j=function(){var n=(0,s.RT)().artists,t=(0,p.useState)([]),r=t[0],u=t[1];return(0,p.useEffect)((function(){n&&u(n)}),[n]),(0,e.jsxs)("div",{children:[(0,e.jsx)("header",{children:(0,e.jsx)("h1",{children:"MUSICFY"})}),(0,e.jsx)(i.$0,{title:"Tus favoritos",Container:i.IT,itemsList:[]}),(0,e.jsx)(i.$0,{title:"Artistas",Container:i.IT,itemsList:r,showLoaders:!0,CardForSearchBar:i.ok,propToLookingFor:"name"}),(0,e.jsx)(i.$0,{title:"Tus listas de reproducci\xf3n",Container:i.IT,itemsList:[]})]})}},145:function(n){n.exports={albumsContainer:"Artist_albumsContainer__en7OS",albumContainer:"Artist_albumContainer__ai_AY"}},1163:function(n,t,r){n.exports=r(880)}},function(n){n.O(0,[774,888,179],(function(){return t=44,n(n.s=t);var t}));var t=n.O();_N_E=t}]);