import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import {deleteUser} from "../cardSlice/cardSlice"

function Home() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handledelete = (id) => {
        dispatch(deleteUser({id}))
    }
    return (
        <div class="card w-50">
        <Link to="/create" className='btn btn-primary'>Create</Link>
        {
            users.map((user, index) => (
            <div class="card-body" key={index}>
                <h5 class="card-title">{user.name}</h5>
                <p class="card-text">{user.email}</p>
                <Link to={`/update/${user.id}`} class="btn btn-primary">Update</Link>
                <button class="btn btn-danger" onClick={() => handledelete(user.id)}>Delete</button>
            </div>
            ))
        }
        </div>
    )
}

export default Home
