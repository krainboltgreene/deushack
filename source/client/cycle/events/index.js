import domEventsMany from "@unction/domeventsmany"
import mapValues from "@unction/mapvalues"
import pipe from "@unction/pipe"

import eventAsAction from "./eventAsAction"

const EVENTS = [
  "click",
  "hover",
  "input",
  "submit",
  "change",
]

export default pipe(
  [
    domEventsMany(
      {}
    )(
      EVENTS
    ),
    mapValues(eventAsAction),
  ]
)
