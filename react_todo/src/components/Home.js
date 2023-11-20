import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {
  const [task, setTask] = useState({'body': ''})
  const [taskList, setTaskList] = useState([])
  


  useEffect(()=>{
     axios.get('http://127.0.0.1:8000/api/')
     .then((response)=>
     {
      setTaskList(response.data)
     })
     .catch(error => console.log(error))
     
  },[taskList])

  const handleAdd = ()=>{
    axios.post('http://127.0.0.1:8000/api/add_note/', task)
    .then(response => {
      console.log("Note added successfully!")
      setTask({'body': ''})
    })
  }

  //onChange
  const handleChange = (e) =>{
    setTask( prev => ({
      ...prev, 
      'body' : e.target.value
    }))
  }
  
  return (
    <div>
      <div className="Home">
      <h1>Simple todo</h1>
      <div className='taskSectionOne'>
      <input type ="text" name="body"
      placeholder="add a task..."
       onChange={handleChange}
       value={task.body}
       onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                       handleAdd();
                    }
                }}
                />
      <button className='addBtn' onClick={handleAdd}>Add</button>
      </div>
      <hr/>
      <div className='taskSectionTwo'>
        <h2>Tasks  {'   '}  <span>({taskList.length})</span></h2>
        
        {
          taskList ? 
          taskList.map((item, key)=>{
            return (
              <Task item ={item} key={key}/>
            )
          }) 
          : <p>Add Tasks</p>
}
        </div>
    </div>
    </div>
  )
}

export default Home