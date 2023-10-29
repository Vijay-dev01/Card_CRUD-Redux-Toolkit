import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../cardSlice/cardSlice';
import { v4 as uuidv4 } from 'uuid';

function Create() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name : "",
    email : ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ name: "", email: ""});
    dispatch(addUser({
    id:  uuidv4(),
    name: values.name,
    email: values.email
  }));
  navigate("/")

  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputname">Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="exampleInputname" 
          aria-describedby="emailHelp" 
          placeholder="Enter Username" 
          name='name'
          value={values.name}
          onChange={(e) => setValues({...values, name: e.target.value})}  
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter email" 
          value={values.email}
          onChange={(e) => setValues({...values, email: e.target.value})} 
          />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        {/* <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div> */}
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Create
