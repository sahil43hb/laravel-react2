import React, { useEffect, useState } from 'react'
import http from '../http';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetchAllUsers();
  },[])
  const fetchAllUsers=()=>{
     http.get('/users').then(res=>{
     setUsers(res.data);
 })
}
const deleteUser=(User)=>{
http.delete('users/'+User).then(res=>{
    fetchAllUsers();
    })
}

  return (
    <div className='container'>
        <h1>User Listing ....</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
       <tr>
       <th scope="row">{index}</th>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td>
        <Link className='btn btn-primary mx-1' to={{pathname:'/edit/'+user.id}}>Edit</Link>
        <Link className='btn btn-success mx-1' to={{pathname:'/view/'+user.id}}>View</Link>
        <button className='btn btn-danger' onClick={()=>{deleteUser(user.id)}} >Delete</button>
       </td>
     </tr> 
    ))}
    
  </tbody>
</table>
    </div>
  )
}

export default Home