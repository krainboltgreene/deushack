/* eslint-disable import/no-anonymous-default-export */
import {makeDOMDriver} from "@cycle/dom"
import storageDriver from "@cycle/storage"
import {makeHistoryDriver} from "@cycle/history"
import {makeHTTPDriver} from "@cycle/http"
import {makeNotificationDriver} from "@cycle/notification"
import {makeCookieDriver} from "cyclejs-cookie"

export default {
  view: makeDOMDriver("main#application"),
  storage: storageDriver,
  history: makeHistoryDriver(),
  http: makeHTTPDriver(),
  notification: makeNotificationDriver(),
  cookies: makeCookieDriver(),
}
