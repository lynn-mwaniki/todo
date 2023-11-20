import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
const navigate = useNavigate()
  return (
    <div className='notFound'>
      <h1>404</h1>
      <h5>Page not found</h5>
      <p style={{color:'gray'}}> The page you are looking for is currently unavailable</p>
      < button onClick={()=> navigate("/")} 
      className=' notFoundBtn'>Go To Homepage</button>
    </div>
  )
}

export default NotFound