import {html} from "snabbdom-helpers"
import {script} from "snabbdom-helpers"
import {body} from "snabbdom-helpers"
import {main} from "snabbdom-helpers"

import router from "./router"
import metadata from "./metadata"
import alternativeGoogleTagManager from "./alternativeGoogleTagManager"
import javascriptDisabledWarning from "./javascriptDisabledWarning"

export default function shell () {
  if (global.window) {
    return router()
  }

  return html({
    attributes: {lang: "en"},
    children: [
      metadata(),
      body({
        children: [
          main({
            selector: "#application",
            data: {createdAt: new Date()},
            children: [
              router(),
            ],
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
