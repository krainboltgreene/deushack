/* eslint-disable import/no-namespace */
import mapValues from "@unction/mapvalues"
import cycleState from "cycle-state"
import {infuse} from "snabbdom-view"
import {shell} from "@internal/ui"
import * as intents from "@internal/intents"
import signals from "@internal/signals"
import initialState from "./initialState"

export default function application (sources) {
  const state = cycleState(
    intents
  )(
    initialState()
  )(
    signals(sources)
  )

  return {DOM: mapValues(infuse(shell))(state)}
}
