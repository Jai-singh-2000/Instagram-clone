import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Dummy = () => {
    const [open,setOpen]=useState(false);
    const [user,setUser]=useState(null)
    const signUp=async (e)=>{
        e.preventDefault();
        try{
          const authUser=await createUserWithEmailAndPassword(auth,email,password);
          
          setOpen(!open);
          setUserName("");
          setEmail("");
          setPassword("");
    
          return await updateProfile(authUser.user,{
            displayName:username
          })
    
        }catch(err)
        {
          alert(err.message);
        }
    
        
    
      }




      
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (authUser) => {
        
        if(authUser){
          console.log(authUser);
          setUser(authUser);

        }else{
          setUser(null);
        }

      return ()=>{
        unsubscribe();
      }

    },[user])
  })
    
    return (
//     <div>
//     {
//       user?(
//         <Button onClick={()=> auth.signOut()}>Log out</Button>
//         ):(
//       <Button onClick={()=>setOpen(!open)}>Sign up</Button>
//       )
//     }
//   </div>

  <Modal open={open} onClose={()=>setOpen(!open)}>
    <Box sx={style}>
      
      <form className='app_signup'>
      
      <center>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" height={50} />
      </center>


     
        <Input type="text" name="username" placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
      
      
        <Input type="text" name="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
      
        <Input type="text" name="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>


      <button type='submit' onClick={signUp}>Sign Up</button>

      </form>
      
    </Box>
  </Modal>

  )
}

export default Dummy