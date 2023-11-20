import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Form from 'react-bootstrap/Form';

const EditTask = ({show, setShow, item}) => {
    const [task, setTask] = useState({
      'body':''
    })

    const handleClose = () => setShow(false)

  const handleChange =(e) => {
    setTask(item)
    setTask( prev => ({
      ...prev,
      'body' : e.target.value
    }))
  }
    const updateNote=(id, value)=>{
    axios.put(`http://127.0.0.1:8000/api/update_note/${id}/`,
    value)
    .then((res)=>{
      console.log('updated')
      })
      .catch((err)=>console.log(err))
  }

  const handleSave=()=>{
    updateNote(task.id, task)
  }
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="task">Task</Form.Label>
      <Form.Control
        type="text"
        id="task"
        onChange={handleChange } value={task.body}
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
 
   );
 }
 export default EditTask

