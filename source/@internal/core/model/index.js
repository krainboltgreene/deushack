import cycleState from "cycle-state"
import * as intents from "@internal/intents"

import initialState from "./initialState"

export default function model (signals) {
  return cycleState(
    intents
  )(
    initialState()
  )(
    signals
  ).debug("state")
}
