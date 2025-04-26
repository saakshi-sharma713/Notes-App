import { useState,useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NotesContext } from "../Context/Notes";
function Pages (){
const {id} = useParams(); // get the index of the following note from the url
const { notes,UpdateNote } = useContext(NotesContext); // Access context values
const message = notes[id].content;
const note = notes[id];
const [val, setVal] = useState(message); // State for the input value

function Update(){
      UpdateNote(note.id,val)
}

return <>
        <div className="flex justify-around items-start">
            {/* Input field with state binding and onChange handler */}
            <textarea
                className="text-4xl w-full h-96"
                value={val}
                onChange={(e) => setVal(e.target.value)} // Updates state on input change
            />
       
            
            <button onClick={()=>{
                Update()
            }}>
                <Link to="/" aria-label="Go back to home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path
                            d="M20 6L9 17l-5-5"
                            stroke="green"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </Link>
            </button>
            
        </div>
    </>
}
export default Pages;