import cycleState from "cycle-state"
import {domSignals} from "cycle-signal"
import mergeAllRight from "@unction/mergeallright"
import * as intents from "@internal/intents"

import initialState from "./initialState"

const eventTypes = [
  "click",
  "hover",
  "input",
  "submit",
  "change",
]

export default function model (sources) {
  return cycleState(
    intents
  )(
    initialState()
  )(
    mergeAllRight([
      domSignals(eventTypes)(sources),
    ])
  ).debug("state")
}
