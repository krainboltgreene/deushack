import snabbdomToHtml from "snabbdom-to-html"
import {render} from "@internal/core"
import initialState from "./initialState"

export default function application (request, response) {
  return response
    .send(
      `<!DOCTYPE html>${snabbdomToHtml(render(initialState(request)))}`
    )
}
