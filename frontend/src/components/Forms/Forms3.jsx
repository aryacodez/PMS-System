import React, { useState,useEffect } from 'react'


const Forms1 = () => {

    const [id, setId] = useState("");
    const [cname, setCname] = useState("");
    const [comp, setComp] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isPending, setisPending] = useState(false);


    const storedValue= Number(localStorage.getItem('count2'));
    const [count2,setCount2]=useState(Number.isInteger(storedValue)?storedValue:1);
    useEffect(()=>{
        localStorage.setItem('count2',String(count2));
    },[count2]);

    let handleSubmit = (e) => {
        e.preventDefault();
        const pms = { id, cname, comp, num, email };
        setisPending(true);
        fetch('http://localhost:4000/client', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pms)
        }).then(()=>{            
            setCount2(c=>c+1);
            const c= {count2};
            fetch('http://localhost:4000/clientCount/1',{
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(c)     
            }).then(()=>{
                console.log("Incremented Successfully");
            })
        }).then(()=>{
            setId("");
            setCname("");
            setComp("");
            setNum("");
            setEmail("");
            setMsg("Client Added Successfully");
            console.log("Client Added Successfully ")
            setisPending(false);
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1200)
        })
    }

    

    return (
        <div className='main'>
            <form  onSubmit={handleSubmit} className='proforms'>
                <h1 style={{color:'#494e56'}}>Add New Client</h1>
                <p>Mandatory(<span>*</span>)</p>
                <label>Client ID<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                /><br></br>
                <label>Client Name<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={cname}
                    name="client_name"
                    onChange={(e)=>setCname(e.target.value)}
                /><br></br>
                <label>Company Name</label><br></br>
                <input                    
                    type='text'
                    value={comp}
                    onChange={(e)=>setComp(e.target.value)}
                /><br></br>
                <label>Mobile Number</label><br></br>
                <input                    
                    type='text'
                    value={num}
                    maxLength='10'
                    onChange={(e)=>setNum(e.target.value)}
                /><br></br>
                <label>Email ID<span> *</span></label><br></br>
                <input
                    required
                    type='email'
                    value={email}
                    name="to_email"
                    onChange={(e)=>setEmail(e.target.value)}
                /><br></br>
                <div className='buttonshadow'>
                    {!isPending && <button type='submit'>Add Client</button>}
                    {isPending && <button disabled>Add Client...</button>}
                </div>

                <div className='msgg'>{msg ? <p>{msg}</p> : null}</div>
            </form>
        
        </div>
    )
}

export default Forms1
