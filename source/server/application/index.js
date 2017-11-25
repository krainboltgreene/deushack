import snabbdomToHtml from "snabbdom-to-html"
import {infuse} from "snabbdom-view"
import {shell} from "@internal/ui"
import initialState from "./initialState"

export default function application (request, response) {
  return response.send(`<!DOCTYPE html>${snabbdomToHtml(infuse(shell())(initialState(request)))}`)
}
