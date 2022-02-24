import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
function App(){
  let user="";
  let pass="";
  const[usererror ,setusermessage]=useState(" ");
    const usernamehandler=(e)=>{
    user= e.target.value;
    if(user.length<8){
      setusermessage("user name should be more than 6 character");
     }
     if(user.length>15){
       setusermessage("user name should be less than 15 character");
      }
      if(user.length>=8 && user.length<=15)
      setusermessage("");
  }
  const passwordhandler=(e)=>{
    pass=e.target.value;
  }
 const submithandler=(e)=>{
e.preventDefault();
console.log(" submit function called")
console.log(user.length);
console.log(pass.length);


}

  return (
    <div className="contain">
     <div className='login'>Login</div>
     <form onSubmit={submithandler}>
     <div className='username'>
       <label>Username</label>
       <input type="text" onChange={usernamehandler}></input>
       </div> 
       <div className='error'>{usererror}</div>
       <div className='passwrd'>
       <label>Password</label>
       <input type="password" onChange={passwordhandler}></input>
       </div> 
       <button value  ="Submit">Let's Go!</button>
       </form>
       <div className='para'>Don't have an account <a href="#">Create an account</a></div>
     
    </div>
  );
}

export default App;
