const React = require("react")

// Pre-hydration theme bootstrap: applies the stored (or system preferred)
// light/dark class to <body> before React hydrates, avoiding theme flash.
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: {
        __html:
          "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.body.className+=((document.body.className?' ':'')+'theme-apply '+t+' '+(t==='dark'?'dark':'light'));}catch(e){}})()",
      },
    }),
  ])
}
