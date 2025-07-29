const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentStep = 0
const MAX = progress.max

next.addEventListener('click', (e) => update(e.target.id))
prev.addEventListener('click', (e) => update(e.target.id))

const update = (action) => {
  action == 'next' ? currentStep++ : currentStep--
  progress.value = currentStep

  circles.forEach((circle, i) => {
    if (i <= currentStep) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  next.disabled = currentStep === MAX
  prev.disabled = currentStep === 0
}
