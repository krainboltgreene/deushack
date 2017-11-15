import {without} from "ramda"
import {range} from "ramda"
import {flatten} from "ramda"
import upTo from "@unction/upto"
import sample from "@unction/sample"
import reduceValues from "@unction/reducevalues"
import mapValues from "@unction/mapvalues"

const MAXIMUM_SCREEN_SIZE = 1000
const NODE_DIAMETER = MAXIMUM_SCREEN_SIZE / 10
const NODE_RADIUS = NODE_DIAMETER / 2
const PADDING = 10
const possiblePositions = range(
  NODE_DIAMETER + PADDING
)(
  MAXIMUM_SCREEN_SIZE - NODE_DIAMETER - NODE_RADIUS - PADDING
)

export default function locations (nodes) {
  // Return reduceValues((centers) => () => {
  //   Return [
  //     Sample(without(flatten(mapValues((value) => range(value - NODE_DIAMETER)(value + NODE_DIAMETER))(centers)))(possiblePositions)),
  //     ...centers,
  //   ]
  // })(
  //   []
  // )(
  //   UpTo(nodes.length)
  // )
  return [
    250,
    500,
    750,
  ]
}
