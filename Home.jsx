import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  let [users,setUsers] = useState(null)
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((val)=>{
      setUsers(val.data)
    })
  },[])

let handleDelete = (id)=>{
  axios.delete(`http://localhost:3000/users/${id}`)
  window.location.reload()
}
  return (
    <>
  <Link to="/create"><button>ADD</button></Link>
      <table>
        <thead>
           <th>ID</th>
           <th>NAME</th>
           <th>EMAIL</th>
           <th>PLACE</th>
           <th>MOBILE</th>
        </thead>

          {
            users == null ? "Loading.....":users.map((values)=>{
              return (
                <tbody key={values.id}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.email}</td>
                  <td>{values.place}</td>
                  <td>{values.mobile}</td>
                  <td><Link to={`/read/${values.id}`}><button>READ</button></Link></td>
                  <td><Link to={`/update/${values.id}`}><button>EDIT</button></Link></td>
                  <td><button onClick={()=>handleDelete(values.id)}>DELETE</button></td>
          
                </tbody>
              )
            })
          }
    
      </table>
    </>
  )

}



export default Home