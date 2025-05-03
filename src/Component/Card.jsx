import { useContext, useState } from "react";
import { NotesContext } from "../Context/Notes";

function Card(){
  const[heading,setheading]=useState("");
  const[contentdata,setcontentdata]=useState("");
  const{addNote,status,setstatus} = useContext(NotesContext);
  
   function AddNote(){

    if(contentdata!="" && heading!=""){
      addNote({title:heading,content:contentdata,id:Date.now(),status:"Created on"});
      setnote(" ");
      
  }
   }
   
    return<> 
    <div className="abc w-screen h-screen overlay">
    <form id="noteForm" class="modal-body" className=" modal h-120 flex w-120 flex-col justify-around items-center p-6 bg-amber-50 rounded ">
    <div className="flex justify-between w-full"><h2 className=" text-gray-400 font-bold text-2xl self-start">Add Notes</h2> 
    <button onClick={()=>{
      setstatus(false);
    }}>close</button></div>
             <div class="form-group" className="w-full  items-start flex flex-col">
               <label for="noteTitle" class="form-label" className=" text-gray-400 font-bold">Title</label>
               <input type="text" id="noteTitle" className="border-1 w-full mt-4 h-10 rounded"
               value={heading} onChange={(e)=>{
                setheading(e.target.value);
               }} required /> 
             </div>
             <div class="form-group" className="w-full   flex flex-col items-start ">
               <label for="noteContent" class="form-label" className=" text-gray-400 font-bold"> Content </label>
               <textarea
               className="abcc  !h-40 !border border-gray-300 p-2 !rounded-md !w-full !focus:outline-none focus:ring-2 focus:ring-blue-400 !resize:none"

               value={contentdata}
               onChange={(e)=>{
                setcontentdata(e.target.value)}}
                 class="form-input form-textarea"
                 required
               ></textarea>
             </div>
           
             
             <button type="submit" class="submit-btn" className="bg-green-600 mt-0 flex-nowrap w-4/4 h-10 rounded text-white"
             onClick={()=>{
              AddNote();
             }}>Save Note</button>
           </form>
         
 </div>
    </>
}
export default Card;