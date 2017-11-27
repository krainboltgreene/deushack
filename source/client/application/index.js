/* eslint-disable import/no-namespace */
import mapValues from "@unction/mapvalues"
import {navigation} from "@internal/core"
import {data} from "@internal/core"
import {presentation} from "@internal/core"
import {model} from "@internal/core"

export default function application (sources) {
  return {
    DOM: mapValues(presentation)(model(sources)),
    storage: mapValues(data)(model(sources)),
    history: mapValues(navigation)(model(sources)),
  }
}
