import key from "@unction/key"
import mapValues from "@unction/mapvalues"
import {infuse} from "snabbdom-view"

import {shell} from "@internal/ui"

import stateFrom from "./stateFrom"
import events from "./events"

export default function cycle (sources) {
  const DOM = key("DOM")(sources)

  events(DOM).debug()

  const state = stateFrom(events(DOM))

  state.debug()

  return {DOM: state.map(infuse(shell))}
}
