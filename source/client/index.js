/* eslint-disable import/no-unassigned-import, immutable/no-mutation */
import "babel-polyfill"

import {run} from "@cycle/most-run"
import application from "./application"
import drivers from "./drivers"
import environment from "./environment"

global.window.env = environment()

run(application, drivers)
