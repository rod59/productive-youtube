(this["webpackJsonpproductive-youtube"]=this["webpackJsonpproductive-youtube"]||[]).push([[0],[,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACN0lEQVRYhbXXzW8NURjH8U9f0gYhXiPSUFSjShGRiEiIRS2wkbD1D9iQiFggsfEP+AOaWBKxEBWR2EssRK0QoQuplxZRXK7eWsxMMvf2zsyZ5t5f8mzOnOf5/s5zz5w5l/LqRRXzDVGNn5VS5yIMDKG7yXg3drTSwPoM0HBOTrNnPRgoYwq24h2eYjA1vhq3LGx/EnewMTV/BM8xjb2h8G2YTBWdxXmM4W8OPIka7uI6Kqnxz7GhXI3gYwBksfEV+7PgA/jQRngSU1J7Ir0Jp/C9qEUt0EzMaqoR/Na+1f/CriKH10oU/BlH6PyrjbBm58CWAoPfcAmbsCyOflxW/BMOFjy3Cn9kr2AiBmdpM17m5FextjGpM17BKG7mJE8XwNMmZnLqjOGUqBtdhG+6CwHwRBcDa1YETqxhQwkDfYF150MNfCoBT/QlpHbo57i2CANzoRNDOvBP9IaEak1soGUd6MLpEgbOCLzsdIhewSHRMTyKYxlz32OP4sNmJV6ovxekNY77eBVHnfrkt+4RlufAV+BxTn5NwO3oXk6BebzGWSxJ5SyNx94U5I4XwYkOnJCN+UPU6gnRrSkk50YRfHuJYouJKg5mwXvwrI3wJN6K9soC7VZ/iWxXVHAgqwujoltLu+CzOJwFT3SioRNzos/0kxKgB7jSsJgKjhfBG01M4mhqfCdu54Afqr9RDYv+mJSCJzqk+fl/MsfAuSbze7GvLDxP/TkGjrQSlKUO0fegmYF1ZYv9B6tg2r8/gLvoAAAAAElFTkSuQmCC"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(6),o=n.n(s),r=(n(13),n(14),n(1)),l=n(2),c=n(3),u=n(4),h=n(7),d=n.n(h),g=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={searchIn:"",settingsMarginTop:""},e}return Object(l.a)(n,[{key:"update",value:function(e){var t=e.target.value;this.setState({searchIn:t})}},{key:"checkEnter",value:function(e){13==e.keyCode&&this.search()}},{key:"search",value:function(){var e=this,t="https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=".concat(this.state.searchIn,"&key=").concat("AIzaSyA4yxU7ZfYFMuTlJ4Wgl97LeO3Z6wthZLg");fetch(t).then((function(e){return e.json()})).then((function(t){e.props.onSearch(t.items)}))}},{key:"fixSlightButtonOffset",value:function(){return{marginTop:-5}}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{value:this.state.searchIn,onChange:this.update.bind(this),onKeyDown:this.checkEnter.bind(this)}),a.a.createElement("button",{className:"btn btn-danger btn-sm",style:this.fixSlightButtonOffset(),onClick:this.search.bind(this)},"Search"),a.a.createElement("button",{className:"btn btn-light btn-sm",style:this.fixSlightButtonOffset(),onClick:this.props.onClear},"Clear"),a.a.createElement("div",{className:"float-right clickable",onClick:this.props.onSettings},a.a.createElement("img",{src:d.a,width:"20"})))}}]),n}(i.Component),m=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"addThumbnail",value:function(e){return a.a.createElement("img",{src:this.props.video.snippet.thumbnails.default.url})}},{key:"oneResult",value:function(e){var t="clickable text-center";return e%2&&(t+=" dangerColor"),t}},{key:"render",value:function(){return a.a.createElement("div",{className:this.oneResult(this.props.id),style:{width:"100%"},onClick:this.props.onVideoSelect},this.props.children,this.addThumbnail(this.props.video),a.a.createElement("br",null),a.a.createElement("br",null))}}]),n}(i.Component),p=(n(15),!1),f=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:"",videoId:"",resultList:[],settingsShowing:!1},e}return Object(l.a)(n,[{key:"updateResultList",value:function(e){this.setState({resultList:e})}},{key:"clearResultList",value:function(){this.setState({resultList:[]})}},{key:"showHideSettings",value:function(){var e=!this.state.settingsShowing;this.setState({settingsShowing:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:{width:"100%"}},a.a.createElement("right",{id:"settings",style:this.slideSettings()},a.a.createElement("input",{type:"checkbox",onClick:this.loopCheck.bind(this)}),"Loop",a.a.createElement("input",{type:"checkbox",onClick:this.hideVideo.bind(this)}),"Only Audio",a.a.createElement("setting-warning",null,"\u26a0\ufe0f",a.a.createElement("b",null,"Warning:"),"Changing settings will reload the current video")),a.a.createElement("right",{className:"websiteName"},a.a.createElement("h1",null,"Productive YT")),a.a.createElement("left",null,a.a.createElement(g,{onSearch:this.updateResultList.bind(this),onClear:this.clearResultList.bind(this),onSettings:this.showHideSettings.bind(this)})),a.a.createElement("right",null,a.a.createElement("iframe",{id:"myFrame",style:this.doesVideoExist(),width:"100%",height:"auto",src:this.state.nowPlaying,frameBorder:"1",allowFullScreen:!0})),a.a.createElement("left",null,this.state.resultList.map((function(t){return a.a.createElement(m,{onVideoSelect:e.updateNowPlaying.bind(e,t.id.videoId),key:e.state.resultList.indexOf(t),id:e.state.resultList.indexOf(t),video:t},a.a.createElement("p",null,e.videoTitleFix(t)))}))))}},{key:"updateNowPlaying",value:function(e){var t="https://www.youtube.com/embed/",n=e;t+=n,t+="?modestbranding=1&rel=0 ",p&&(t+="&playlist="+n+"&loop=1"),this.setState({nowPlaying:t}),this.setState({videoId:n})}},{key:"slideSettings",value:function(){return this.state.settingsShowing?{marginTop:0}:{marginTop:-90}}},{key:"loopCheck",value:function(){p=!p,""!=this.state.nowPlaying&&this.updateNowPlaying(this.state.videoId)}},{key:"hideVideo",value:function(){}},{key:"videoTitleFix",value:function(e){return(new DOMParser).parseFromString(e.snippet.title,"text/html").body.innerText}},{key:"doesVideoExist",value:function(){return""==this.state.nowPlaying?{display:"none"}:{display:"inherit"}}}]),n}(i.Component);n(16);var v=function(){return a.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8625e7fd.chunk.js.map