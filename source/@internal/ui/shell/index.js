import {html} from "snabbdom-helpers"
import {script} from "snabbdom-helpers"
import {body} from "snabbdom-helpers"
import {main} from "snabbdom-helpers"
import {broadView} from "snabbdom-view"
import {route} from "@internal/router"

import metadata from "./metadata"
import alternativeGoogleTagManager from "./alternativeGoogleTagManager"
import javascriptDisabledWarning from "./javascriptDisabledWarning"

export default function shell () {
  return broadView(
    (state) => {
      if (global.window) {
        return route(state)
      }

      return html({
        attributes: {lang: "en"},
        inner: [
          metadata(),
          body({
            inner: [
              main({
                selector: "application",
                inner: route(state),
              }),
              javascriptDisabledWarning(),
              alternativeGoogleTagManager(),
              script({
                attributes: {
                  type: "text/javascript",
                  src: "babel-helpers.js",
                },
              }),
              script({
                attributes: {
                  type: "text/javascript",
                  src: "index.js",
                },
              }),
            ],
          }),
        ],
      })
    }
  )
}
