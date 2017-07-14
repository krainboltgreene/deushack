import {section} from "snabbdom-helpers"
import {values} from "ramda"
import {path} from "ramda"
import {indexBy} from "ramda"
import mapValues from "@unction/mapvalues"
import applicators from "@unction/applicators"
import zip from "@unction/zip"
import mergeDeepRight from "@unction/mergedeepright"
import nestedObjOf from "@unction/nestedobjof"

import node from "./node"
import bridge from "./bridge"
import locations from "./locations"

const MAXIMUM_SCREEN_SIZE = 1000

const px = (value) => `${value}px`

export default function visuals (state) {
  const nodes = values(state.resources.nodes)
  const bridges = values(state.resources.bridges)
  const tops = locations(nodes)
  const bottoms = locations(nodes)
  const positions = zip(tops)(bottoms)
  const positionedNodes = applicators(
    mapValues(mergeDeepRight)(mapValues(nestedObjOf(["meta", "position"]))(positions))
  )(
    nodes
  )

  return section({
    selector: "#visuals",
    style: {"background-color": "#8e8e8e"},
    inner: [
      section({
        selector: "#nodes",
        style: {
          "width": px(MAXIMUM_SCREEN_SIZE),
          "height": px(MAXIMUM_SCREEN_SIZE),
          "background-color": "#8e8e8e",
          "position": "relative",
        },
        inner: [
          ...mapValues(
            node
          )(
            positionedNodes
          ),
          ...mapValues(
            bridge(
              indexBy(
                path(["id"])
              )(
                positionedNodes
              )
            )
          )(
            bridges
          ),
        ],
      }),
    ],
  })
}
