import {section} from "snabbdom-helpers"
import {p} from "snabbdom-helpers"
import {icon} from "@deushack/elements"
const px = (value) => `${value}px`

const NODE_DIAMETER = 100
const X_POSITION = 0
const Y_POSITION = 1

export default function node (instance) {
  const top = instance.meta.position[X_POSITION] - NODE_DIAMETER
  const left = instance.meta.position[Y_POSITION] - NODE_DIAMETER

  return section({
    style: {
      "width": px(NODE_DIAMETER),
      "height": px(NODE_DIAMETER),
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "flex-direction": "column",
      "color": "#000000",
      "background-color": "#f48fb1",
      "border-radius": "50%",
      "position": "absolute",
      "top": px(top),
      "left": px(left),
    },
    data: instance,
    inner: [
      icon(instance.attributes.icon),
      p({inner: `(${instance.attributes.role})`}),
    ],
  })
}
