import { useState,useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NotesContext } from "../Context/Notes";
function Pages (){
const {id} = useParams(); // get the index of the following note from the url
const { notes,UpdateNote } = useContext(NotesContext); // Access context values
const message = notes[id].content;
const title = notes[id].title;
const note = notes[id];
console.log(note)
const [val, setVal] = useState(message); // State for the input value
const[heading,setheading]=useState("");
function Update(){
      UpdateNote(note.id,val,heading)
}

return <>
        <div className="flex justify-around items-start">
            {/* Input field with state binding and onChange handler */}
            <div className="flex flex-col w-3/4">
            <input 
            placeholder="Add a title"
            value={heading}
            onChange={(e)=>{
                setheading(e.target.value)
            }}
            className=" w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 input h-15"
            ></input>
            <textarea
                className="text-4xl w-full h-96 mt-5"
                value={val}
                onChange={(e) => setVal(e.target.value)} // Updates state on input change
            />
       
            </div>
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