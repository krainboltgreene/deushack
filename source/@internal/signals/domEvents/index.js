import key from "@unction/key"
import mapValues from "@unction/mapvalues"
import domEventsMany from "@unction/domeventsmany"

import asAction from "./asAction"

export default function domEvents (sources) {
  return mapValues(
    asAction
  )(
    domEventsMany(
      {}
    )(
      [
        "click",
        "hover",
        "input",
        "submit",
        "change",
      ]
    )(
      key("DOM")(sources)
    )
  )
}
