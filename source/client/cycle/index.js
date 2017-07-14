import xs from "xstream"
import view from "@deushack/view"

import initialState from "./initialState"

const state$ = xs.of(initialState())

export default function cycle () {
  return {DOM: state$.map(view)}
}
