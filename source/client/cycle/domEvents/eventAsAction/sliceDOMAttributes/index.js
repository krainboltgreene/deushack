import keyChain from "@unction/keychain"

export default function sliceDOMAttributes (element) {
  return Reflect.apply(
    Array.prototype.slice,
    keyChain([
      "attributes",
    ])(element),
    [
    ]
  )
}
