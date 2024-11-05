// let typingEffectHooks = {}

// typingEffectHooks.TypeSkillSet = {
//   mounted() {
//     console.log('MOUNTED')
//     let element = this.el
//     let fullText = this.el.dataset.text
//     let currentIndex = 0

//     const typeWriter = () => {
//       // Check for newline character
//       if (fullText.charAt(currentIndex) === '\n') {
//         element.innerHTML += '<br>' // Insert line break
//       } else {
//         element.innerHTML += fullText.charAt(currentIndex)
//       }
//       currentIndex++

//       if (currentIndex < fullText.length) {
//         setTimeout(typeWriter, 100) // Typing speed
//       }
//     }
//     typeWriter() // Start the typing effect when the component is mounted
//   },
// }

// export default typingEffectHooks
