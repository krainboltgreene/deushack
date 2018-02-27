import intent from "snabbdom-intent"

export default function updateFormField ({form, field}) {
  return intent({
    form,
    field,
  })({
    input: [
      "updateFormField",
    ],
  })
}
