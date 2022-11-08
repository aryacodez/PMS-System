import React,{useState} from 'react'
import { useEffect } from 'react';
import './forms.scss'
const Forms = () => {
    
    

    // function incr(){
    //     setCount(c=>c+1);
    //     console.log(count);
    //     const increment={count};
    //     fetch('http://localhost:4000/count/1',{
    //         method:'PUT',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(increment)
    //     }).then(()=>{
    //         console.log('INCREMENTED!!!');
    //     })
    // }
    
    

    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [msg,setMsg]=useState("");    
    const [isPending,setisPending]=useState(false);
    //const [count,setCount]=useState(1);
    const [status,setStatus]=useState("");


    const storedValue= Number(localStorage.getItem('count'));
    const [count,setCount]=useState(Number.isInteger(storedValue)?storedValue:1);
    useEffect(()=>{
        localStorage.setItem('count',String(count));
    },[count]);

    let diffdays=(date1,date2)=>{
        const diff = Math.abs(date2-date1);
        return diff/(1000*60*60*24);
    };

    let handleSubmit=(e)=>{
        e.preventDefault();          
        
        var diffdates=0;
        const date1 = new Date(start);
        const date2 = new Date(end);
        diffdates=diffdays(date1, date2);
        
        setStatus(""); 

        const pms={id,name,desc,start,end,diffdates,status}; 
        setisPending(true);
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pms)     
        }).then(()=>{            
            setCount(c=>c+1);
            const c= {count};
            fetch('http://localhost:4000/count/1',{
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(c)     
            }).then(()=>{
                console.log("Incremented Successfully");
            })
        }).then(()=>{
            setId("");
            setName("");
            setDesc("");
            setStart("");
            setEnd("");      
            setStatus("");      
            setMsg("Data Added Successfully!!!");
            console.log('Data Added Sucessfully');
            setisPending(false);
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1500)
        });

        

    };

  return (
    <div className='main'>        
        <form onSubmit={handleSubmit} className='proforms'>
            <h2>Add New Project</h2>
            <p>Mandatory(<span>*</span>)</p>
            <label>Project ID<span> *</span></label><br></br>
            <input
                required
                type='text'
                value={id}
                onChange={(e)=>setId(e.target.value)}
            /><br></br>
            <label>Project Name<span> *</span></label><br></br>
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