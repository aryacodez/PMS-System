import React, { useState,useMemo } from 'react'
import './form1.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom'
import userId from '../../Generator/userId'

const Form1 = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const user_id = useMemo(() => '#' + userId.generateId(), []);

    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        await fetch('/api/v1/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uniqueid:user_id,
                name,
                email,
                password
            })
        }).then(res => res.json())
        .then(data => {
            alert('Registration Successful');
            console.log(data)
            if(data.success) {
                navigate('/signin')
            }else{
                setError("Error")
            }
            setId("");
            setName("");
            setEmail("");
            setPassword("");
        })
        .catch((err) => console.log(err))
        const newUserId =  '#' + userId.generateId();
        setId(newUserId);

    }

    return (
        <>
            <div className='container d-flex justify-content-evenly align-items-center vh-100 '>
                <div className='row pt-5 position-relative '>
                    
                    <div className='col-md-6 bg-white p-5 flex-fill rounded shadow' style={{ width: '25em' }}>
                        <p className="h1 text-center">Signup</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-3'>
                                <label className='mb-2'>User Id</label>
                                <input
                                    type='text'
                                    className='form-control mt-4 pb-3 text-start'
                                    placeholder='14758'
                                    id='user_idss'
                                    value={id || user_id}
                                    onChange={(e) => setId(e.target.value)}
                                    readOnly
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label className='mb-2'>Name</label>
                                <input
                                    type='text'
                                    placeholder='John Doe'
                                    className="form-control"
                                    id='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label className='mb-2'>Email ID</label>
                                <input
                                    type='email'
                                    placeholder='xyz@gmail.com'
                                    className="form-control"
                                    id='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label className='mb-2'>Password</label>
                                <input
                                    type='password'
                                    placeholder=''
                                    className="form-control"
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="checkbox" />
                                <label className="form-check-label">I agree to <span style={{ 'color': 'blue' }}>Register</span></label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form1