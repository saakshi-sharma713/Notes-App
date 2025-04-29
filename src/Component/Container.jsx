import { NotesContext } from "../Context/Notes";
import Input from "./Input"
import Note from "./Note"
import { useContext } from "react";
function Container(){
    const {notes} = useContext(NotesContext)
    return <>
    <Input/>
    <div className="w-full h-full flex flex-wrap justify-evenly">
  {notes.length > 0 ? (
    notes.map((val, idx) => (
      <Note 
        key={val.id} 
        title={val.title} 
        id={val.id} 
        index={idx} 
        status={val.status}
        content={typeof val.content === "object" ? JSON.stringify(val.content) : val.content} 
      />
    ))
  ) : (
    <p className="mt-50 text-5xl text-gray-400 font-light">Add notes +</p>
  )}
</div>
          </>
}
export default Container;