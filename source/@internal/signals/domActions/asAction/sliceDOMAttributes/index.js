export default function sliceDOMAttributes (element) {
  return Reflect.apply(
    Array.prototype.slice,
    element.attributes,
    [
    ]
  )
}
