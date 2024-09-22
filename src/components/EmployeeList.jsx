
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import imageConstant from '../Image/tofulelo.jpeg'


//  getting data from the DB to React

const EmployeeList = () => {
  let [infoFromDB, setinfoFromDB] = useState([])
  let [reload, setReload] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:4001/employee-list")
      .then((e) => {
        setinfoFromDB(e.data)
      })
      .catch((e) => {
        console.log("error from EmployeeList useEffect");
      })
    setReload(1)

  }, [reload])
  let deleteUser = (e) => {
    axios.delete(`http://localhost:4001/employee-list/${e}`)
    setReload(2)
  }

  return (
    <div className='w-screen'>
      <NavBar />

      <p>Total Count : {infoFromDB.length}</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Unique Id	</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Designation</th>
            <th scope="col">Gender</th>
            <th scope="col">Course</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {infoFromDB.map((item, i) => (
            <tr key={item.id}>
              <th scope="row">{i + 1}</th>
              <td><img width={50}  src={imageConstant} alt='demo' /></td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.designation}</td>
              <td>{item.gender}</td>
              <td>{item.course}</td>
              <td>
                
                <a type="button"  class="btn btn-sm btn-outline-warning" href={`/${item._id}/edit-employee/`}>&nbsp; Edit &nbsp;</a>&nbsp;
                <button type="button"  onClick={() => { deleteUser(item._id) }} class="btn btn-sm btn-outline-danger">Delete</button>
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList