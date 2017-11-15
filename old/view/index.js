import {html} from "snabbdom-helpers"
import {head} from "snabbdom-helpers"
import {body} from "snabbdom-helpers"
import {main} from "snabbdom-helpers"
import {header} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"
import mapValues from "@unction/mapvalues"
import {values} from "ramda"

import {program} from "@deushack/ui"
import {visuals} from "@deushack/ui"

export default function view (state) {
  if (global.window) {
    return main({
      style: {
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
      },
      inner: [
        visuals(state),
        section({
          selector: "#taskbar",
          inner: [
            header({
              inner: [
                h1({inner: "Taskbar"}),
              ],
            }),
            section({
              selector: "#programs",
              styles: {},
              inner: mapValues(
                program
              )(
                values(state.resources.programs)
              ),
            }),
          ],
        }),
      ],
    })
  }

  return html({
    inner: [
      head(),
      body({style: {"background-color": "black"}}),
    ],
  })
}
