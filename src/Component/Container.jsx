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
  ) : <>
    
  <div className="flex flex-col  mt-50">
  <i class="fas fa-notes-medical"></i>
    <p className=" text-2xl text-gray-400 font-bold ">No Notes </p><br></br>
    <p className=" text-2xl text-gray-400 font-light mt-0">Add your first note by clicking the "Add" button </p>
</div>
  </>}
</div>
          </>
}
export default Container;