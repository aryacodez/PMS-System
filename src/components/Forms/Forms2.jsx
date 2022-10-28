import './forms2.scss'
import React, {
    useState,
    useEffect
} from 'react'
import { storage } from '../../firebaseConfig'
import { getDownloadURL, ref,uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'


const Forms2 = () => {


    const [table, setTable] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/users/', {
            method: 'GET'
        })
            .then((users) => users.json())
            .then((users) => setTable(users))
    }, [])

    const tab=table;
    
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");
    const [msg,setMsg]=useState("");    
    const [proname,setProject]=useState("");
    const [files,setFiles]=useState("");
    const [isPending, setisPending] = useState(false);
    

    
    const [imageUpload, setImageUpload] = useState(null)
    const [url, setUrl] = useState("");

    const uploadImage = async() => {
        if (imageUpload == null) {
            return;
        }
        //setUrl('LINK')

        const imageRef = ref(storage, `images/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then(() => {
            getDownloadURL(ref(storage,  `images/${imageUpload.name}`)).then((url) => {
                const y = (url)
                console.log(y)
            })
        })
        
    }

    // const uploadImage = async() => {
    //     if (imageUpload == null) {
    //         return;
    //     }
    //     setUrl('LINK')

    //     const imageRef = storage.ref(`image/${imageUpload.name}`).put(imageUpload)
    //         .on('state_changed', alert('success'), alert);
        
    //     imageRef();
        


    //     // uploadBytes(imageRef, imageUpload).then(() => {
    //     //     console.log('image Uploaded')
    //     // })
        
    // }

    // var diff;
   
    
   
    let handleSelect = (e) => {
        setProject(e.target.value) 
        console.log(e.target.value)
    }
    
    let handleSubmit=(e)=>{
        e.preventDefault();        
        // diff = setEnd.getTime()-setStart.getTime(); 
        //setUrl(url)
        const task={id,name,desc,start,end,proname }; 
        setisPending(true);
        fetch('http://localhost:4000/tasks',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)     
        }).then(()=>{
            setId("");
            setName("");
            setDesc("");
            setStart("");
            setEnd(""); 
            setProject("");   
            setUrl("");        
            setMsg("Task Added Successfully!!!");
            console.log('Task Added Sucessfully');
            setisPending(false);
        }).then(()=>{
            setTimeout(()=>{
                setMsg("");
            },1500)
        })
    };




    return (
        <div className='main'>
            <form onSubmit={handleSubmit} className='proforms'>
                <h1>Add New Task</h1>
                <p>Mandatory(<span>*</span>)</p>
                <label>Task ID<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                /><br></br>
                <label>Task Name<span> *</span></label><br></br>
                <input
                    required
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br></br>
                <label>Select Project<span> *</span></label><br></br>
                <select onChange={handleSelect} className='select'>                     
                    <option value=''></option>                 
                    {tab.map((project) =>                        
                        <option value={project.name}>{project.name}</option>                        
                        )
                    }
                </select><br></br>
                <label>Start Date</label><br></br>
                <input
                    type='date'
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                /><br></br>
                <label>End Date</label><br></br>
                <input
                    type='date'
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                /><br></br>
                <label>Upload Files</label>
                <input
                    type='file'                    
                    name='files[images]'
                    multiple="true"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0])
                    }}
                /><br></br>
                <div className='buttonshadow'>
                    {!isPending && <button type='submit' onClick={uploadImage}>Create</button>}
                    {isPending && <button disabled>Create...</button>}
                </div>

                <div className='msgg'>{msg ? <p>{msg}</p> : null}</div>
                <div><p><a href={url}>{url}</a></p></div>

            </form>
        </div>
    )
}

export default Forms2;