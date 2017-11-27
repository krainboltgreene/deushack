import {section} from "snabbdom-helpers"
import {h1} from "snabbdom-helpers"

import distance from "./distance"
import slope from "./slope"
import midpoint from "./midpoint"

const px = (value) => `${value}px`
const rotate = (value) => `rotate(${value}deg)`

const NODE_DIAMETER = 100
const NODE_RADIUS = NODE_DIAMETER / 2
const HEIGHT = 10

export default function bridge (nodes) {
  return function bridgeNode (instance) {
    const to = nodes[instance.relationships.to.data.id]
    const from = nodes[instance.relationships.from.data.id]
    const toPosition = to.meta.position
    const fromPosition = from.meta.position
    const [
      x,
      y,
    ] = midpoint([
      toPosition,
      fromPosition,
    ])
    const length = distance([
      toPosition,
      fromPosition,
    ])
    const width = length - NODE_DIAMETER
    const top = x - HEIGHT / 2
    const left = y - width / 2

    return section({
      style: {
        "height": px(HEIGHT),
        "width": px(width),
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "flex-direction": "column",
        "color": "#000000",
        "background-color": "#373737",
        "position": "absolute",
        "top": px(top),
        "left": px(left),
        "transform": rotate(slope([
          toPosition,
          fromPosition,
        ])),
        "transform-origin": "center",
      },
      data: {
        ...instance,
        x,
        y,
      },
      children: h1({children: `(${instance.attributes.level})`}),
    })
  }
}
