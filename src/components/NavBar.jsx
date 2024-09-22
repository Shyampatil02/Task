import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function NavBar() {
  let [Username, setUsername] = useState('');
  let ID = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4001/user/${ID.ID}`)
      .then((response) => {
        setUsername(response.data.name);
      })
      .catch(() => {
        console.log('Unable to fetch data in Edit comp');
      });
  }, []);

  let LogoutHandler = () => {
    navigate('/');
  };

  return (
    <div>
      <nav id="Navibar" class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="navbar-brand">MERN</div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href={`/dashbord/${ID.ID}e`}
                >
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href={`/${ID.ID}/create-employee`}
                >
                  Create Employee
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href={`/${ID.ID}/employee-list`}
                >
                  Employee list
                </a>
              </li>
            </ul>
            <span class="navbar-text d-flex">
              <div>{Username}&nbsp;&nbsp;</div>
              <button
                type="button"
                onClick={LogoutHandler}
                class="btn btn-sm btn-outline-danger"
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </nav>
      <br></br>
    </div>
  );
}

export default NavBar;

