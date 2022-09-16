import "./Post.css";
import {db} from "../firebase";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect,useState } from "react";

const Post = ({username,caption,imageUrl,id,currentUserName}) => {
  const [profilePic,setProfilePic]=useState(null);

  const handlePostDelete=async (id)=>{
    try{
      await deleteDoc(doc(db, "posts", id));
    }catch(error)
    {
      console.log(error.message);
    }
  }

  const getProfilePic=async ()=>{
    const docRef = doc(db, "usernames", username);
    try {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()) {
         setProfilePic(docSnap.data().profilePic)
          return;
      }
    } catch(error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getProfilePic();
    // eslint-disable-next-line
  },[])

  return (
    <div className='post'>
     
        <div className="post_header">
          <div className="display_flex_center">
            <Avatar className='post_avatar'
                alt={username}
                src={profilePic}/>
            <h3>{username}</h3>
          </div>
          
          <div className="display_flex_center">
            {
              (username===currentUserName)?<DeleteIcon className="delete" onClick={()=>handlePostDelete(id)}/>:""
            }
          </div>
        
        </div>

        <img className='post_image' src={imageUrl} alt="" />

        <h4 className='post_text'><strong>{username} </strong> {caption}</h4>


    </div>
  )
}

export default Post;