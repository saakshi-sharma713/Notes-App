import { NotesContext } from "../Context/Notes";
import Input from "./Input"
import Note from "./Note"
import { useContext } from "react";
function Container(){
    const {notes} = useContext(NotesContext)
    return <>
    <Input/>
      <div  className='w-full h-full flex flex-wrap justify-evenly '>
      {notes.map((val, idx) => {
  return (
    <Note 
      key={val.id} 
      title={val.title} 
      id={val.id} 
      index={idx} 
      content={typeof val.content === "object" ? JSON.stringify(val.content) : val.content} 
    />
    
  );
})}
      </div>
          </>
}
export default Container;