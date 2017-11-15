import {noscript} from "snabbdom-helpers"
import {iframe} from "snabbdom-helpers"

export default function googleTagManager () {
  return noscript({
    content: iframe({
      src: "https://www.googletagmanager.com/ns.html?id=GTM-5GBMRT5",
      height: 0,
      width: 0,
      style: {
        display: "none",
        visibility: "hidden",
      },
    }),
  })
}
