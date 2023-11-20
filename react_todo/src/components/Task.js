import React, {useState} from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from '../modal/EditTask';

const Task = ({item, key}) => {
const [show, setShow] = useState(false);

const handleShow = () => setShow(true);

  const handleDelete = (id) =>{
    axios.delete(`http://127.0.0.1:8000/api/delete_note/${id}/`)
    .then(response => console.log("deleted"))
  }
  return (
    <div>
      <ul key ={key}>
                
          <li className="taskList"> 
            {item.body}
            <p>
              {
                <>
              
                   <EditIcon onClick={handleShow}/>
                <EditTask  show={show} setShow={setShow} item={item}/>
                </>
               
               
              }
              </p> 
            <button 
          className="deleteBtn" onClick= {()=> {handleDelete(item.id)}}> <DeleteIcon/></button></li>
        </ul>


    </div>
  )
}

export default Task