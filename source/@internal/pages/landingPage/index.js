import {form} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {updateInput} from "@internal/signals"

export default function landingPage () {
  return form({
    children: [
      signaling({
        onChange: [
          updateInput(),
        ],
      })(
        input({})
      ),
    ],
  })
}
