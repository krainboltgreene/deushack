import key from "@unction/key"
import mapValues from "@unction/mapvalues"
import {infuse} from "snabbdom-view"

import {shell} from "@internal/ui"

import stateFrom from "./stateFrom"
import domEvents from "./domEvents"

export default function cycle (sources) {
  const DOM = key("DOM")(sources)

  const state = stateFrom(domEvents(DOM))

  return {DOM: mapValues(infuse(shell))(state)}
}
