import Post from "./Post";
import React,{ useState, useEffect } from 'react';
import {db, auth } from "../firebase";
import { signOut} from 'firebase/auth';
import {onSnapshot, collection, orderBy,query} from "firebase/firestore";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import Upload from "./Upload"; 
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import ProfileUpload from "./ProfileUpload";

const Main = () => {
    const [posts,setPosts]=useState([])
    const {currentUser}=useContext(AuthContext);
    
    useEffect(()=>{
      const q = query(collection(db, "posts"), orderBy("timestamp","desc"));
      onSnapshot(q,(snapshot)=>{

        setPosts(snapshot.docs.map((doc)=> (
          {
          id:doc.id, 
          post:doc.data()
          }
        )))

      })
    },[])

  return (
    <>
      <div className="app_header">
        <div className="app_header_image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
          <div className='tools'>

            <div>
            <VideoLibraryIcon/>
            </div>
            <Upload/>
            <ProfileUpload profilePic={currentUser.photoURL}/>
          
          </div>
        </div>
        <div className='logout'>
        <button className='btn' onClick={()=>signOut(auth)}>Log Out</button>
        </div>
      </div>

      <div className="container">
        <div className="app_posts">
          {
            posts.map(({id,post})=>{
              return <Post key={id} id={id} {...post} currentUserName={currentUser.displayName}/>
            })
          }
        </div>      
      </div>

    </>
  )
}

export default Main;