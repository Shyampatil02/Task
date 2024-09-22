import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';

const Login = () => {
    
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status === "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status === "fail"){
                alert("wrong password")
            }
            else if(e.data.status === "noUser"){
                alert("Invalid Email")
            }
        })
    }
    return (
        <div className=' container-sm flex items-center justify-center w-auto h-full'>
                <div class="row g-3 pt-5 mt-5 pb-5  border-red-600 ">
                    <div class=" col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div class=" text-center">
                        <button type="submit" class="btn btn-secondary w-100 "   variant="outlined" onClick={login} >Login</button>
                    </div>
                    <div class="text-center">
                        <a type="button" href='http://localhost:3000/register' class="btn btn-primary w-100 " variant="outlined" >Register</a>
                    </div>
                </div>
                
        </div>
    )
}

export default Login