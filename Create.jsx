import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let [data,setData] = useState({
     name:"",
     email:"",
     place:"",
     mobile:""
  })
  let navigate = useNavigate()
  let {name,email,place,mobile} = data

  let handleChange = (e)=>{
    //  console.log(e)
     let {name,value}=e.target
    setData({...data,[name]:value})
  }
  let handleSubmit=(e)=>{
     e.preventDefault()
     axios.post("http://localhost:3000/users",data)
     navigate("/")
  }
  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"  value={name} onChange={handleChange}/>
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"  value={email} onChange={handleChange}/>
        <br /><br />
        <label htmlFor="place">Place:</label>
        <input type="text" name="place" id="place"  value={place} onChange={handleChange}/>
        <br /><br />
        <label htmlFor="mobile">Mobile:</label>
        <input type="tel" name="mobile" id="mobile" value={mobile}  onChange={handleChange}/>
        <br /><br />
        <input type="submit" value="Register" />
      </form>
    </>
  )
}

export default Create