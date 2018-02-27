import mergeDeepRight from "@unction/mergedeepright"
import keyChain from "@unction/keychain"
import groupBy from "@unction/groupby"
import indexBy from "@unction/indexby"
import treeify from "@unction/treeify"

const transformers = [
  groupBy(keyChain([
    "type",
  ])),
  indexBy(keyChain([
    "id",
  ])),
]

export default function mergeResources (state) {
  return ({data}) => {
    return mergeDeepRight(
      state
    )(
      {resources: treeify(transformers)(data)}
    )
  }
}
