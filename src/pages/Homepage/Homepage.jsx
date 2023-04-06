import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';


export default function Homepage() {
  const [notes, setNotes] = useState([]);
  useEffect(function() {
    async function getNotes() {
      const myNotes = await notesAPI.getNotes();
      setNotes(myNotes);
    }
    getNotes();
  }, []);

  async function handleDelete(id) {
    const updatedNotes = await notesAPI.deleteNote(id);
    setNotes(updatedNotes);
  }

  return (
    <div className='homepage-div'>
      {
        notes.map((note, idx) => (
          <div className='div-notes flex-row' key={idx}>
            <div className="flex-col notes-description">
              <span>{new Date(note.createdAt).toLocaleString()}</span>
             <h4>{note.text}</h4>
            </div>
            <button onClick={ () => handleDelete(note._id) }>Del</button>
          </div>
          
        ))
      }
    </div>
  );
}