import React, { useContext, useState } from "react";
import { NotesContext } from "../Context/Notes";
import { Link } from "react-router-dom";

function Note(props) {
  const [title, setTitle] = useState("");
  const { DeleteNote } = useContext(NotesContext);

  function RemoveNote() {
    if (props.id) {
      DeleteNote(props.id);
    } else {
      console.error("Invalid note ID");
    }
  }

  return (
    <div style={styles.note}>
      <input
        type="text"
        
        placeholder="Add a title "
        className="input outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <p style={styles.content}>{props.content}</p>
      <button style={styles.deleteButton} onClick={()=> RemoveNote()}>
        Delete Note
      </button>
      <button style={styles.edit}>
        <Link to={`/${props.index}`}>Edit</Link>
      </button>
    </div>
  );
}

const styles = {
  note: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "25px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    height: "220px",
  },
  content: {
    margin: "8px 0",
    fontSize: "16px",
    color: "#333",
    height: "100px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "5px",
  },
  edit: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "5px",
    marginLeft: "5px",
  },
};

export default Note;