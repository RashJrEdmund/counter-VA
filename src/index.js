import "../src/styles/style.css"

import { displayValue } from './data.js'

const subtractBtn = document.querySelector('.btn1')
export const output = document.querySelector('.number')
const addBtn = document.querySelector('.btn2')

/* assuming you exported using using the default export, you'll have to import as such
  import data fromm './data.js' and when using it, you'll call it like when calling and objebt, 
  i.e data.displayvalue */

let data = 0

export const getCurrentValue = (val) => {
  return val
}

addBtn.addEventListener('click', () => {
  displayValue(data += 1)
})

subtractBtn.addEventListener('click', () => {
  displayValue(data -= 1)
})
