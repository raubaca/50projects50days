const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const li = document.createElement('li')
    li.classList.add('tag')
    li.textContent = tag
    tagsEl.appendChild(li)
  })
}

const randomSelect = () => {
  const tags = document.querySelectorAll('.tag')
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag(tags)
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag(tags)
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

const pickRandomTag = (tags) => tags[Math.floor(Math.random() * tags.length)]
const highlightTag = (tag) => tag.classList.add('highlight')
const unHighlightTag = (tag) => tag.classList.remove('highlight')
