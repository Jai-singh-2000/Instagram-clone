import React from 'react';
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import {onSnapshot, collection} from "firebase/firestore";
import Post from "./Post";

const Main = () => {

    const [posts,setPosts]=useState([])
  

    useEffect(()=>{
      onSnapshot(collection(db,"posts"),snapshot=>{
        setPosts(snapshot.docs.map(doc=> ({
          id:doc.id, 
          post:doc.data()
        })))
      })
  
    },[])
  return (
    <>
    <div className="app_header">
        <img className="app_header_image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
      </div>

      <div className="container">

      <div className="app_posts">
        {
          posts.map(({id,post})=>{
            return <Post key={id} {...post}/>
          })
        }
      </div>
      
      </div>

  
    </>
  )
}

export default Main;