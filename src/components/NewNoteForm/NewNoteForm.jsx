// import { useState } from "react";
// import * as noteAPI from '../../utilities/notes-api';
// import { useNavigate } from "react-router-dom";

// const NewNoteForm = () => {
//   const navigate = useNavigate();

//   const [note, setNote] = useState({text: ""});
  
//   function handleChange(evt) {
//     setNote({text: evt.target.value});
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     if (note) {
//       await noteAPI.createNote(note);
//     }
//     setNote({text: evt.target.value});
//     navigate('/');
//   }
//   return ( 
//     <>
//       <form action="" className="new-note-form" onSubmit={ handleSubmit }>
//         <textarea name="new-note" id="new-note" cols="30" rows="10" value={ note.text }
//         onChange={ handleChange }
//         ></textarea>
//         <button type="submit">Add Note</button>
//       </form>
//     </>
//    );
// }
 
// export default NewNoteForm;