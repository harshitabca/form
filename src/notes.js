// import React, { useState, useEffect } from "react";

// function NotesApp() {
//   const [task, setTask] = useState("");
//   const [Notes, setNotes] = useState([
//     "Pooja",
//     "Harshita",
//     "Lajja",
//     "Preet",
//     "Bhavesh",
//     "Rehan",
//     "Karan"
//   ]);

//   function createNote(event) {
//     event.preventDefault();
//     setTask("");
//     setNotes((OldNotes) => {
//       return [...OldNotes, task];
//     });
//   }

//   // function enterKeyCheck(e) {
//   //   console.log("event", e);
//   //   if (e.KeyCode === 13)
//   //   createNote();
//   // }

//   return (
//     <div>
//       <h1>Notes App</h1>
//       <form onSubmit={createNote}>
//         <input
//           // onKeyDown={enterKeyCheck}
//           type="text"
//           value={task}
//           onChange={(event) => {
//             setTask(event.target.value);
//           }}
//         />
//         <button onClick={createNote}>Add</button>
//       </form>
//       <ul>
//         {Notes.map((Note, index) => {
//           return <li key={index}>{Note}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default NotesApp;

import React, { useState, useEffect } from "react";

let gID = 0;
function NotesApp() {
  const [task, setTask] = useState("");
  const [Notes, setNotes] = useState([]);

  function createNote(event) {
    event.preventDefault();
    setTask("");
    setNotes((OldNotes) => {
      return [...OldNotes, { Note: task, id: gID++ }];
    });
  }

  function deleteItem(itemID) {
    setNotes((OldNotes) => OldNotes.filter((item) => item.id !== itemID));
  }

  function enterKeyCheck(e) {
    console.log("event", e);
    if (e.KeyCode === 13) createNote();
  }

  return (
    <div class="Notesform">
      <h1 id="form">Notes App</h1>
      <form id="Notes" onSubmit={createNote}>
        <input
          onKeyDown={enterKeyCheck}
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button onClick={createNote}>Add</button>
      </form>
      <ul id="form">
        {Notes.map((item, index) => {
          return (
            <div key={item.id}>
              <li>
                {item.Note} ({item.id}){" "}
                <button id="delete" onClick={() => deleteItem(item.id)}>
                  ❌️
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default NotesApp;
