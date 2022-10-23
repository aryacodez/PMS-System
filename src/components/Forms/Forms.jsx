import React,{useState} from 'react'
import './forms.scss'
const Forms = () => {
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [msg,setMsg]=useState("");
    const [isPending,setisPending]=useState(false);

    let handleSubmit=(e)=>{
        e.preventDefault();         
        const pms={id,name,desc,start,end};        
        setisPending(true);
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pms)            
        }).then(()=>{
            setId("");
            setName("");
            setDesc("");
            setStart("");
            setEnd("");
            setMsg("Data Added Successfully!!!");
            console.log('Data Added Sucessfully');
            setisPending(false);
        })
    };

  return (
    <div className='main'>        
        <form onSubmit={handleSubmit} className='proforms'>
            <h1>Add New Project</h1>
            <label>Project ID</label><br></br>
            <input
                required
                type='text'
                value={id}
                onChange={(e)=>setId(e.target.value)}
            /><br></br>
            <label>Project Name</label><br></br>
            <input
                required
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            /><br></br>
            <label>Description</label><br></br>
            <input
                className='brief'
                type='text'
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
            /><br></br>
            <label>Start Date</label><br></br>
            <input
                type='date'
                value={start}
                onChange={(e)=>setStart(e.target.value)}
            /><br></br>
            <label>End Date</label><br></br>
            <input
                type='date'
                value={end}
                onChange={(e)=>setEnd(e.target.value)}
            /><br></br>
            <div className='buttonshadow'>
               {!isPending  && <button type='submit'>Create</button>}
               {isPending  && <button disabled>Create...</button>}
            </div>

            <div className='msgg'>{msg?<p>{msg}</p>:null}</div>
            
        </form>
    </div>
  )
}

export default Forms;