import {link} from "snabbdom-helpers"
import mapValues from "@unction/mapvalues"

export default mapValues(
  (attributes) => link({attributes})
)
