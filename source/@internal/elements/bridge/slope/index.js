/* eslint-disable no-magic-numbers, no-mixed-operators, no-extra-parens */

export default function slope ([[x1, y1], [x2, y2]]) {
  return Math.atan2((y2 - y1), (x2 - x1)) * (180 / Math.PI) + 360
}
