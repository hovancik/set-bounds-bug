// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const bounds = require('@electron/remote').getCurrentWindow().getBounds()
  console.log(bounds)

  document.querySelector('#one').onclick = event => {
    console.log(bounds.y)
    require('@electron/remote').getCurrentWindow().setBounds({ height: 500 })
    // Workaround-ish require('@electron/remote').getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 500 })
    console.log(require('@electron/remote').getCurrentWindow().getBounds())
  }

  document.querySelector('#two').onclick = event => {
    console.log(bounds.y)
    require('@electron/remote').getCurrentWindow().setBounds({ height: 400 })
    // Workaround-ish require('@electron/remote').getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 400 })
    console.log(require('@electron/remote').getCurrentWindow().getBounds())
  }

  document.querySelector('#three').onclick = event => {
    console.log(bounds.y)
    require('@electron/remote').getCurrentWindow().setBounds({ height: 300 })
    // Workaround-ish require('@electron/remote').getCurrentWindow().setBounds({ x: bounds.x, y: bounds.y, width: bounds.width, height: 300 })
    console.log(require('@electron/remote').getCurrentWindow().getBounds())
  }
})
