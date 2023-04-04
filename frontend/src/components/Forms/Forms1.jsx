import React, { useState, useRef, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Forms1 = () => {

    const [id, setId] = useState("");
    const [mname, setMname] = useState("");
    const [desg, setDesg] = useState("");
    const [projname, setProjname] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [isPending, setisPending] = useState(false);
    const [table, setTable] = useState([]);
    

    const form = useRef();

    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET'
        })
            .then((users) => users.json())
            .then((users) => setTable(users))
    }, [])
    
    const tab = table;
    console.log(tab);

    let handleSelect = (e) => {
        setProjname(e.target.value)
        console.log(e.target.value)
    }
    

    let handleSubmit = (e) => {
        e.preventDefault();
        const pms = { id, mname, desg, projname, num, email };
        setisPending(true);
        fetch('http://localhost:4000/colleague', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pms)
        }).then(()=>{
            setId("");
            setMname("");
            setDesg("");
            setProjname("");
            setNum("");
            setEmail("");
            setMsg("Member Added and Email Sent successfully");
            console.log("Member Added and Email Sent successfully")
            setisPending(false);
        }).then(() => {
            emailjs.sendForm('service_z2awi1a', 'template_r3u7si9', form.current, 'q9xVXQ0TxitheX1LQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1200)
        })
    }

    

    return (
        <div className='main'>
            <form ref={form} onSubmit={handleSubmit} className='proforms'>
                <h1 style={{color:'#494e56'}}>Add New Member</h1>
                <p>Mandatory(<span>*</span>)</p>
                <label>Member ID<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={id}
                    onChange={(e)=>setId(e.target.value)}
                /><br></br>
                <label>Member Name<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={mname}
                    name="member_name"
                    onChange={(e)=>setMname(e.target.value)}
                /><br></br>
                <label>Designation</label><br></br>
                <input
                    type='text'
                    value={desg}
                    onChange={(e)=>setDesg(e.target.value)}
                /><br></br>
                <label>Project Name</label><br></br>
                <select onChange={handleSelect} className='sel' name='member_project'>
                    <option value=''></option>
                    {tab.map((project) =>
                        <option value={project.name}>{project.name}</option>
                    )}
                </select><br></br>
                <label>Mobile Number<span> *</span></label><br></br>
                <input
                    required
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
                    {!isPending && <button type='submit'>Add Member</button>}
                    {isPending && <button disabled>Add Member...</button>}
                </div>

                <div className='msgg'>{msg ? <p>{msg}</p> : null}</div>
            </form>
        
        </div>
    )
}

export default Forms1
