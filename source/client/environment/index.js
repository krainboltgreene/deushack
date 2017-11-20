import reduceValues from "@unction/reducevalues"

export default function envronment () {
  return reduceValues(
    (previous) => (element) => {
      if (element.getAttribute("type") !== "environment") {
        return previous
      }

      return {
        ...previous,
        [element.getAttribute("name")]: element.getAttribute("content"),
      }
    }
  )(
    {}
  )(
    [
      ...document.querySelectorAll("meta[type='environment']"),
    ]
  )
}
