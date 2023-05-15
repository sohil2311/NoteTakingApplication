// Array to store notes
let notes = [];

// Function to render notes
function renderNotes() {
  const notesList = document.getElementById('notes');
  notesList.innerHTML = '';

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const noteItem = document.createElement('li');
    noteItem.classList.add('note-item');
    noteItem.textContent = note.content;
    notesList.appendChild(noteItem);
  }
}

// Function to handle save button click
function handleSaveNote() {
  const noteContent = document.getElementById('note-content').value;
  const note = {
    content: noteContent
  };
  notes.push(note);
  renderNotes();
  document.getElementById('note-content').value = '';
}

// Event listeners
document.getElementById('save-btn').addEventListener('click', handleSaveNote);
