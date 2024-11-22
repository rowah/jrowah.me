const markdownCopyHooks = {}

markdownCopyHooks.Markdown = {
  mounted() {
    const codeBlocks = document.querySelectorAll('.autumn-hl')
    const copyIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          `
    const copiedIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          `
    codeBlocks.forEach((block) => {
      // Wrap code block in a div
      const wrapper = document.createElement('div')
      wrapper.className = 'copy-wrapper'
      block.parentNode.insertBefore(wrapper, block)
      wrapper.appendChild(block)

      // Add copy button
      const button = document.createElement('button')
      button.className = 'copy-button'
      button.innerHTML = copyIcon

      button.addEventListener('click', async () => {
        const code = block.textContent
        await navigator.clipboard.writeText(code)

        // Visual feedback
        button.innerHTML = copiedIcon

        setTimeout(() => {
          button.innerHTML = copyIcon
        }, 1000)
      })

      wrapper.appendChild(button)
    })
  },
}

export default markdownCopyHooks
