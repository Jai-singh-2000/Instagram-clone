import "./UploadPost.css";
import React, { useState } from 'react';
import {Button} from "@mui/material"
import {storage,db} from "../firebase";


const UploadPost = () => {
  const [caption,setCaption]=useState("");
  const [image,setImage]=useState(null);

  const handleChange=(e)=>{
    if(e.target.files[0]){
        setImage(e.target.files[0])
    }
  }

  const handleUpload=()=>{
    const uploadTask=storage.ref(`images/${image.name}`).put(image);
  }

  return (
    <div className='upload_header'>
        <input type="text" value={caption} onChange={(e)=>setCaption(e.target.value)} />
        <input type="file" onChange={handleChange}/>
        <Button onClick={handleUpload}>Upload</Button>
    </div>

  )
}

export default UploadPost;