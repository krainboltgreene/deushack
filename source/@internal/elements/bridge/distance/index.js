/* eslint-disable no-magic-numbers, no-mixed-operators, no-extra-parens */

export default function distance ([[x1, y1], [x2, y2]]) {
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
}
