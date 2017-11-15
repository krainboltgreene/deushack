import {prop} from "ramda"
import {isNil} from "ramda"
import {pascal} from "case"
import uriTemplates from "uri-templates"

import * as pages from "@internal/pages"

const template = uriTemplates("/{component}{/id}")

export default function route ({pathname, session}) {
  const component = prop(pascal(template.fromUri(pathname).component), pages)

  if (isNil(component)) {
    return pages.pageNotFound
  }

  if (component.clientSide && !global.window) {
    return pages.loadingScreen
  }

  if (component.authenticate && isNil(session)) {
    return pages.authenticationRequired
  }

  if (pathname === "/") {
    return pages.landingPage
  }

  return component
}
