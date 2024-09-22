import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import NavBar from './NavBar';
const CreateEmployee = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("")
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState()
    let [designation, setDesignation] = useState()
    let [gender, setGender] = useState("")
    let [course, setCourse] = useState([])
    let [image, setImage] = useState()

    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            name: name,
            email: email,
            phone: phone,
            image: image,
            designation: designation,
            gender: gender,
            course: course
        }

        if (!name || !email || !phone || !designation || !gender || !course || !image) {
            alert("To Create Employee Fill all the fields..!")
        }
        else {
            axios.post("http://localhost:4001/employees", payload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((e) => { alert(e.data) })
                .catch(() => { console.log("can not register"); })

        }
    }

    let handleCourseChange = (e) => {
        const course1 = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setCourse(course.concat(course1));
        }
        else {
            setCourse(course.filter(item => item !== course1));
        }
    };

    return (
        <div>
            <NavBar />
        
            <div className='container'>
                <h2 className='text-center'>Create New Employee</h2>
                <br></br>
                <div class="row g-3 ">
                    <div class="col-md-6">
                        <label for="Name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="Name"   value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputphone" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="inputphone"  value={phone} onChange={(e) => { setPhone(e.target.value) }}/>
                    </div>
                    <div class="col-md-6 pt-2">
                        <label >Designation</label>
                        <select  onChange={(e) => { setDesignation(e.target.value); }} name='designation' required  class="form-select" aria-label="Default select example">
                            <option selected value="HR">HR</option>
                            <option value="Manager">Manager</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                    <label >Geneder : </label><br />
                        <div class="form-check">
                            <input class="form-check-input" value={gender} onChange={(e) => { setGender("Male") }} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input"  value={gender} onChange={(e) => { setGender("female") }} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label class="form-check-label" for="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label>Course : &nbsp;</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" checked={course.includes('BCA')} onChange={handleCourseChange}  value="BCA"/>
                            <label class="form-check-label" for="inlineCheckbox1">BCA</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked={course.includes('BSC')} onChange={handleCourseChange}  value="BSC"/>
                            <label class="form-check-label" for="inlineCheckbox2">BSC</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3"  checked={course.includes('MCA')} onChange={handleCourseChange}  value="MCA" />
                            <label class="form-check-label" for="inlineCheckbox3">MCA</label>
                        </div>
                    </div>
                    <div>
                    <div class="mb-3">
                        <div></div>
                            <label for="formFileMultiple" class="form-label">Upload Photo</label>
                            <input accept="image/jpeg, image/png" name='image' onChange={(e) => { setImage(e.target.files[0]) }}  class="form-control" type="file" id="formFileMultiple" />
                        </div>
                    </div>

                    <div class="col-12  text-center">
                        <button type="submit" class="btn btn-success w-100" onClick={formHandle}>Register New User</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateEmployee