/**
    The boxShadow function helps to create a box shadow for an element
 */

import rgba from "assets/theme/functions/rgba.js";
import pxToRem from "assets/theme/functions/pxToRem.js";

function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
}

export default boxShadow;
