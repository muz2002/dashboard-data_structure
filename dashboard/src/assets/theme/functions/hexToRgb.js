/**
    The hexToRgb function is used to convert a hex color to an rgb color using chroma-js library.
 */

import chroma from 'chroma-js';

function hexToRgb(color) {
  return chroma(color).rgb().join(',');
}   

export default hexToRgb;