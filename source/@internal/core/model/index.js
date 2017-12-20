import {cycleState} from "cycle-state"
import {domSignals} from "cycle-state"
import mergeAllRight from "@unction/mergeallright"
import * as reactions from "@internal/reactions"

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
    reactions
  )(
    initialState()
  )(
    mergeAllRight([
      domSignals(eventTypes)(sources),
    ])
  ).debug("state")
}
