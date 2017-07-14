import {join} from "path"
import requireEnvironmentVariables from "require-environment-variables"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"

import {logger} from "./remote"

requireEnvironmentVariables([
  "PORT",
  "NODE_ENV",
])

const application = express()

application.use(cors())
application.use(morgan("dev"))
application.use(compression())
application.use(helmet())
application.use(express.static(join(__dirname, "..", "client")))

// Application.get("*", function get (request, response) {
//   Const html = "<p>Test</p>"
//
//   Return response.send(html)
// })

application.listen(
  process.env.PORT,
  () => logger.info(`Listening to ${process.env.PORT}`)
)
