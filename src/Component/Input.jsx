import { useState,useContext } from "react";
import { NotesContext } from "../Context/Notes";
import Card from "../Component/Card"
function input(){
    const[note,setnote]=useState("");
    const {addNote,status,setstatus} = useContext(NotesContext);
    const[val,setval]=useState(false);
    function addTask(e){
        e.preventDefault();
        setnote(" ");
        setstatus(true);
    
      }
      

    return <>
     <form  className="flex" onSubmit={(e)=>{
            addTask(e);
        }}>
            <input
               value={note}
                type="text"
                placeholder="Write a note..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>{
                   setnote(e.target.value)
                }}
            />
            
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    </>
}
export default input;