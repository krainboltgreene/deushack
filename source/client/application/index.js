/* eslint-disable import/no-namespace */
import mapValues from "@unction/mapvalues"
import signals from "@internal/signals"
import {navigation} from "@internal/core"
import {data} from "@internal/core"
import {presentation} from "@internal/core"
import {model} from "@internal/core"

export default function application (sources) {
  return {
    DOM: mapValues(presentation)(model(signals(sources))),
    storage: mapValues(data)(model(signals(sources))),
    history: mapValues(navigation)(model(signals(sources))),
  }
}
