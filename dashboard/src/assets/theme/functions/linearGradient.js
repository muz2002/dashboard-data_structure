/**
    The linearGradient function is used to create a linear gradient background color.
 */

function linearGradient(color, colorState, angle = 310) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;