import {getCurrentValue, output} from './index.js'

export const displayValue = (text = getCurrentValue()) => { // data is not defined here, i'll use this fxn
  output.innerHTML = text
}
