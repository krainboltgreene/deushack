/* eslint-disable max-statements */

import key from "@unction/key"
import keyChain from "@unction/keychain"
import {isNil} from "ramda"
import {pascal} from "case"
import uriTemplates from "uri-templates"

import * as pages from "@internal/pages"

const template = uriTemplates("/{slug}{/id}")
const sessionKey = keyChain(
  [
    "ephemeral",
    "session",
  ]
)
const pathnameKey = keyChain(
  [
    "ephemeral",
    "location",
    "pathname",
  ]
)

const {pageNotFound} = pages
const {landingPage} = pages
// const {loadingScreen} = pages
// const {authenticationRequired} = pages

export default function route (state) {
  // const session = sessionKey(state)
  const pathname = pathnameKey(state)

  if (pathname === "/" || pathname === "") {
    return landingPage()
  }
  const {slug} = template.fromUri(pathname)
  const name = pascal(slug)
  const component = key(name)(pages)

  if (isNil(component)) {
    return pageNotFound()
  }

  // if (component.clientSide && !global.window) {
  //   return loadingScreen
  // }
  //
  // if (component.authenticate && isNil(session)) {
  //   return authenticationRequired
  // }

  return component
}
