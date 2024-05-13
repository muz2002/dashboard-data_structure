/**
    The pxToRem function helps to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
    return `${number / baseNumber}rem`;
}

export default pxToRem;