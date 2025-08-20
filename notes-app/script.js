const addBtn = document.getElementById('add');
const noteList = document.getElementById('notes');

const notes = JSON.parse(localStorage.getItem('notes'));

const addNewNote = (text = '') => {
  const note = document.createElement('article');
  note.classList.add('note');
  if (!text) note.classList.add('editmode');

  note.innerHTML = `
    <div class="note-tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="note-content"></div>
    <textarea class="note-input"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const noteContent = note.querySelector('.note-content');
  const deleteBtn = note.querySelector('.delete');
  const textArea = note.querySelector('.note-input');

  noteList.appendChild(note);

  textArea.value = text;
  noteContent.innerHTML = marked.parse(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  editBtn.addEventListener('click', () => note.classList.toggle('editmode'));

  textArea.addEventListener('input', (e) => {
    noteContent.innerHTML = marked.parse(e.target.value);
    updateLS();
  });

  if (!text) textArea.focus();
};

const updateLS = () => {
  const notesText = document.querySelectorAll('textarea');

  const notes = [];
  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
};

addBtn.addEventListener('click', () => addNewNote(''));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}
