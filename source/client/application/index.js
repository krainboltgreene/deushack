/* eslint-disable import/no-namespace */
import {channel} from "cycle-channel"
import {dataDriver} from "cycle-channel"
import {stateDriver} from "cycle-channel"
import {viewEventSignals} from "cycle-channel-dom"
import {render} from "@internal/core"
import * as reactions from "@internal/reactions"
import {periodic} from "most"
import {constant} from "most"
// import * as transformers from "@internal/transformers"

import initialState from "./initialState"

export default function application ({view: viewIn}) {
  return channel({
    signals: [
      constant(
        {
          name: "heartbeat",
          payload: {},
        },
        periodic(10000)
      ),
      viewEventSignals(viewIn),
    ],
    initialState: initialState(),
    reactions,
    transformers: {},
    drains: {view: stateDriver(render)},
    vents: {
      network: dataDriver(),
      storage: dataDriver(),
    },
  })
}
