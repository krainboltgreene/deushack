import mergeDeepRight from "@unction/mergedeepright"

export default function updateFormField (state) {
  return ({form, field, event}) => {
    return mergeDeepRight(
      state
    )({ephemeral: {forms: {[form]: {fields: {[field]: event.target.value}}}}})
  }
}
