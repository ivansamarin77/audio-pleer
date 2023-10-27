function createAnalitycs(): object {
  let counter = 0
  let destroyed = false

  const listener = () => counter++

  window.document.addEventListener('click', listener)

  return {
    destroy() {
      window.document.removeEventListener('click', listener)
      destroyed = true
    },

    click() {
      if (destroyed) {
        return `Analitycs is destroyed& Total clicks: ${counter}`
      }
    },
  }
}

window['analytics'] = createAnalitycs()
