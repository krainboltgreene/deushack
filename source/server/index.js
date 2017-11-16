/* eslint-disable import/max-dependencies */
import {join} from "path"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import bugsnag from "bugsnag"
import snabbdomToHtml from "snabbdom-to-html"

import logger from "@internal/logger"
import {shell} from "@internal/ui"

if (process.env.NODE_ENV === "production") {
  requireEnvironmentVariables([
    "BUGSNAG_API_PRIVATE",
  ])
  bugsnag.register(process.env.BUGSNAG_API_PRIVATE)
}

requireEnvironmentVariables([
  "PORT",
  "NODE_ENV",
  "ORIGIN_LOCATION",
])

const application = express()

application.use(cors())
application.use(morgan("dev"))
application.use(compression())
application.use(helmet())
application.use(express.static(join(__dirname, "..", "client")))

application.get("*", (request, response) => {
  return response.send(`<!DOCTYPE html>${snabbdomToHtml(shell())}`)
})

application.listen(
  process.env.PORT,
  () => logger.info(`Listening to ${process.env.PORT}`)
)
