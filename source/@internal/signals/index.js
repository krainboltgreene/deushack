import mergeAllRight from "@unction/mergeallright"

import domActions from "./domActions"

export default function signals (sources) {
  return mergeAllRight(
    [
      domActions(sources),
    ]
  ).debug("signals")
}
