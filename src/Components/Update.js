import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../cardSlice/cardSlice';

function Update() {

  const params = useParams();
  console.log('params', params);
  const dispatch = useDispatch();
  const user = useSelector(state => state.users);
  const navigate = useNavigate();
  const existingUser = user.filter(user => user.id === params.id);
  const {name, email} = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  })

  const handleSubmit=(e) => {
    e.preventDefault();
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navigate("/");
  }
  return (
    <div>
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

export default Update
