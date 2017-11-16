import cycleState from "cycle-state"
import * as intents from "@internal/intents"

import initialState from "./initialState"

export default cycleState(intents)(initialState())
