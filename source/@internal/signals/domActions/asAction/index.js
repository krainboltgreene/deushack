import mergeAllRight from "@unction/mergeallright"
import inflateTree from "@unction/inflatetree"
import mapValues from "@unction/mapvalues"
import flattenTree from "@unction/flattenTree"

import onlySignal from "./onlySignal"
import sliceDOMAttributes from "./sliceDOMAttributes"

export default function asAction (event) {
  return {
    event,
    ...onlySignal(
      inflateTree(
        "-"
      )(
        mergeAllRight(
          mapValues(
            flattenTree
          )(
            sliceDOMAttributes(event.target)
          )
        )
      )
    ),
  }
}
