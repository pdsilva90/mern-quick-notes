import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import { useState } from 'react';
import * as notesService from "../../utilities/notes-service"
import { useNavigate } from "react-router-dom";

export default function NewNotePage() {
  const [note, setNote] = useState({text:''});
  const navigate = useNavigate();
  function handleChange(evt) {
    setNote({text: evt.target.value});
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const createdNote = await notesService.createNote(note);
    console.log(createdNote);
    setNote({text:''});
    navigate('/notes');
  }


  return (

    <>
      <h1>Add a note</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text" name="text" id="text" onChange={handleChange} value={note.text}/>
        </label>
        <input type="submit" value="Add Note" />
      </form>
    </>
  );
}