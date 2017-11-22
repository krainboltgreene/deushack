import key from "@unction/key"
import mapValues from "@unction/mapvalues"
import domEventsMany from "@unction/domeventsmany"

import asAction from "./asAction"

export default function domActions (sources) {
  return domEventsMany(
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
  ).map(asAction)
}
