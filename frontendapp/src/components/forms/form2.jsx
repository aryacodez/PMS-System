import React,{useState} from 'react'
import './form2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
const Form2 = () => {
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await fetch('/api/v1/login',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data =>{
            
            console.log(data);
            if(data.success){
                alert("Login Successful");
                navigate('/dashboard');
            }else{
                alert('Credentials Wrong');
                setError("Error");
            }
            setEmail("");
            setPassword("");
        }).catch(err=>{            
            console.log(err)})
    }
    return (
        <>
            <div className='container d-flex justify-content-evenly align-items-center vh-100'>
                <div className='row pt-5 position-relative'>                   
                        <div className='col-md-6 bg-white p-5 flex-fill rounded shawdow' style={{width:'25em'}}>
                            <p className="h1 text-center">Signin</p>
                            <form onSubmit={handleSubmit}>                                
                                <div className='form-group mb-3'>
                                    <label className='mb-2'>Email ID</label>
                                    <input 
                                    type='email' 
                                    placeholder='xyz@gmail.com' 
                                    className="form-control" 
                                    id='email' 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
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
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    {/* </div>                    */}
                </div>
            </div>
        </>
    )
}

export default Form2