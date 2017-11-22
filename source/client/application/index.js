/* eslint-disable import/no-namespace */
import mapValues from "@unction/mapvalues"
import recordFrom from "@unction/recordfrom"
import cycleState from "cycle-state"
import {infuse} from "snabbdom-view"
import {shell} from "@internal/ui"
import * as intents from "@internal/intents"
import signals from "@internal/signals"
import {navigation} from "@internal/router"

import initialState from "./initialState"

export default function application (sources) {
  const state = cycleState(
    intents
  )(
    initialState()
  )(
    signals(sources)
  )

  return {
    DOM: state.map(infuse(shell())),
    storage: state.map(recordFrom("state")),
    history: state.map(navigation),
  }
}
