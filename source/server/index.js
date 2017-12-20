/* eslint-disable import/max-dependencies */
import {join} from "path"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import bugsnag from "bugsnag"

import logger from "@internal/logger"

import application from "./application"

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

const server = express()

server.use(cors())
server.use(morgan("dev"))
server.use(compression())
server.use(helmet())
server.use(express.static(join("tmp", "client")))
server.get("*", application)

server.listen(
  process.env.PORT,
  () => logger.info(`Listening to ${process.env.PORT}`)
)
