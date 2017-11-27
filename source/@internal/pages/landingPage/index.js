import {p} from "snabbdom-helpers"

export default function landingPage () {
  return p({
    children: "This is the landing page.",
    data: {created: new Date()},
  })
}
