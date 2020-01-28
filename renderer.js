// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { remote } = require('electron')

const bounds = remote.getCurrentWindow().getBounds()
console.log(bounds)


document.querySelector('#one').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ height: 500 })
  // Workaround-ish remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 500 })
  console.log(remote.getCurrentWindow().getBounds())
}

document.querySelector('#two').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ height: 400 })
  // Workaround-ish remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 400 })
  console.log(remote.getCurrentWindow().getBounds())
}

document.querySelector('#three').onclick = event => {
  console.log(bounds.y)
  remote.getCurrentWindow().setBounds({ height: 300 })
  // Workaround-ish remote.getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 300 })
  console.log(remote.getCurrentWindow().getBounds())
}
