import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm = () => {
        let payload = {
            name, email, cnfPassword
        }
        if (!name || !email || !cnfPassword) {
            alert("To register Fill all the fields..!")
        }
        else {
            if (password === cnfPassword) {
                axios.post('http://localhost:4001/register', payload)
                    .then((e) => {
                        alert(e.data);
                        navigate("/")
                    })
                    .catch((e) => {
                        alert("problem in sending data to the Backend.!");
                    })
            }
            else {
                alert("both password should be matched..")
            }

        }
    }

    return (
        
            <div className='container-sm  items-center justify-center w-auto h-full'>
                <div class="row g-3 pt-5 mt-5">
                    <div class="col-md-6">
                        <label for="Name" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="Name"  value={name} onChange={(e) => { setName(e.target.value) }} required  />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"  value={password} onChange={(e) => { setPassword(e.target.value) }}/>
                    </div>
                    <div class="col-md-6">
                        <label for="ConfirminputPassword4" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="ConfirminputPassword4"value={cnfPassword} onChange={(e) => { setCnfPassword(e.target.value) }} />
                    </div>

                    <div class="  text-center">
                        <button type="submit" class="btn btn-primary w-100" onClick={submitForm}>Register New User</button>
                    </div>
                    <div class=" text-center">
                    <a type="button" href='http://localhost:3000/' class="btn btn-secondary w-100" variant="outlined" >Login</a>
                    </div>
                </div>
            </div>
    )


}

export default Registration