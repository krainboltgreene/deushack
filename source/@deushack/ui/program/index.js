import {section} from "snabbdom-helpers"
import {h2} from "snabbdom-helpers"
import {h3} from "snabbdom-helpers"
import {icon} from "@deushack/elements"

export default function program (instance) {
  return section({
    data: instance,
    inner: [
      h2({inner: icon(instance.attributes.icon)}),
      h3({inner: `${instance.attributes.name} (${instance.attributes.uses})`}),
    ],
  })
}
