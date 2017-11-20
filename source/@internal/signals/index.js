import mergeAllRight from "@unction/mergeallright"

import domEvents from "./domEvents"

export default function signals (sources) {
  return mergeAllRight(
    [
      domEvents(sources),
    ]
  )
}
