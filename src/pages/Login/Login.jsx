import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import{login,signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
  const [sign_init,signstates]=useState("Sign In"); 
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [loading,setloading]=useState(false);
  const user_auth=async(event)=>{
    setloading(true);
event.preventDefault();
if(sign_init==="Sign In"){
  await login(email,password)
}
else{
  await signup(name,email,password);
}
setloading(false);
  }
  return (
    loading?<div className='loading_spinner'><img src={netflix_spinner} alt="" /></div>: 
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className='login-form'>
        <h1>{sign_init}</h1>
        <form  onSubmit={(event)=>{event.preventDefault()}}>
          {sign_init==="Sign Up"?<input type="text" placeholder='Your name' value={name} onChange={(e)=>{setname(e.target.value)}}/>:<></>}
          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder='Email'  />
          <input type="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
          <button onClick={user_auth} type='submit'>{sign_init}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label >Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {sign_init==="Sign In"?<p>New to Netflix <span onClick={()=>{signstates("Sign Up");}}>Sign Up Now</span></p>:<p>Aleredy have account?<span onClick={()=>{signstates("Sign In");}}>Sign In Now</span></p>}  
        </div>
      </div>
    </div>
  )
}

export default Login
