import mergeAllRight from "@unction/mergeallright"
import inflateTree from "@unction/inflatetree"
import mapValues from "@unction/mapvalues"
import recordFromEntity from "@unction/recordfromentity"

import fromDOMAttributes from "@unction/fromdomattributes"

export default function eventAsAction (event) {
  return {
    event,
    ...onlySignal(
      inflateTree(
        "-"
      )(
        mergeAllRight(
          mapValues(
            fromDOMAttributes
          )(
            sliceDOMAttributes(event.target)
          )
        )
      )
    ),
  }
}
