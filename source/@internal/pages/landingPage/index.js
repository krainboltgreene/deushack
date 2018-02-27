import {form} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {updateFormField} from "@internal/intents"
import {broadView} from "snabbdom-view"
import keyChain from "@unction/keychain"

export default function landingPage () {
  return broadView((state) => {
    return form({
      children: [
        input(
          updateFormField({
            form: "search",
            field: "query",
          })(
            {selector: "#search"}
          )
        ),
        keyChain([
          "ephemeral",
          "forms",
          "search",
          "fields",
          "query",
        ])(state),
      ],
    })
  })
}
