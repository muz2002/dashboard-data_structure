/**
    The tripleLinearGradient function is used to create a linear gradient background color.
 */

function tripleLinearGradient(color, colorState, colorStateSecondary, angle) {
    if (angle === undefined) {
        angle = 310;
    }
    return `linear-gradient(${angle}deg, ${color}, ${colorState}, ${colorStateSecondary})`
}

export default tripleLinearGradient;