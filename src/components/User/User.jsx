import React,{useState} from 'react'
import './user.scss'
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
const User = () => {
    const [files,setFiles]=useState("");
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [desg,setDesg]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [num,setNum]=useState("");
    const [work,setWork]=useState("");
    const [isPending,setisPending]=useState(false);
    const [msg,setMsg]=useState("");

    let handleSubmit=(e)=>{
        e.preventDefault();
        const user = {id,name,address,desg,email,password,num,work,files};
        console.log(files);
        setisPending(true);
        fetch('http://localhost:4000/profile',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)     
        }).then(()=>{         
            setMsg("Profile Updated Successfully!!!");
            console.log('Profile Updated  Sucessfully');
            setisPending(false);
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1500)
        })
    }

  return (
    <div className='user'>        
        <div className='top'>
            <h1>User Profile</h1>
        </div>
        <div className='bottom'>
            <div className='left'>
                <img 
                    src={files?URL.createObjectURL(files):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
                    alt=""
                    
                />                
            </div>
            <div className='right'>
                <form onSubmit={handleSubmit}>
                    <div className='formInput'>
                        <label htmlFor="file">
                            Image: <CloudUploadRoundedIcon className='icon'/>
                        </label>
                        <input 
                            type="file"                             
                            id='file'                                                       
                            onChange={(e)=>setFiles(URL.createObjectURL(e.target.files[0]))}
                            style={{display: 'none'}}
                        />
                    </div>
                    <div className='formInput'>
                        <label>User ID</label>
                        <input 
                            required
                            type="text" 
                            value={id}
                            placeholder="123"
                            onChange={(e)=>setId(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Name with Surname</label>
                        <input 
                            required
                            type="text" 
                            value={name}
                            placeholder="Arya Sarkar"
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Address</label>
                        <input 
                            type="text" 
                            value={address}
                            placeholder="E tall road"
                            onChange={(e)=>setAddress(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Designation</label>
                        <input 
                            type="text" 
                            value={desg}
                            placeholder="Analyst"
                            onChange={(e)=>setDesg(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Mobile Number</label>
                        <input 
                            type="text" 
                            value={num}
                            placeholder="14256378965"
                            onChange={(e)=>setNum(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Email</label>
                        <input 
                            type="text" 
                            value={email}
                            placeholder="arya@ebco.in"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Working At</label>
                        <input 
                            type="text" 
                            value={work}
                            placeholder="EBCO"
                            onChange={(e)=>setWork(e.target.value)}
                        />
                    </div>
                    <div className='formInput'>
                        <label>Password</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>   
                    <div className='buttontop'>
                        <button type='submit'>Submit</button>     
                    </div>
                    <div className='msgg'>{msg?<p>{msg}</p>:null}</div>          
                </form>
            </div>
        </div>
    </div>
  )
}

export default User;