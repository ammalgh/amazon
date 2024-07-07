import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";

import axios from 'axios';

function SignUp() {
  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');
  const navigate = useNavigate();

  const addUser = () => {
    

   const check_email=/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/
    
    if(email=="")
        {
            alert("cannot be empty!");
          
            return ;
        }
    
        else if(!check_email.test(email))
        {
            alert("enter valid email address!");
           
            return ;
        }



        axios.post('https://6657373e9f970b3b36c869ed.mockapi.io/data', {
            name, email , password,
          
          })
          .then(function (response) {

            alert('Rejester Sucsses')
            navigate("/Login");

            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

  }


  return (
    <>
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">SignUp</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

        
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="enter your name" className="input input-bordered" required  value={name} onChange={(e) => {
            setName(e.target.value)
          }}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" required  value={email} onChange={(e) => {
           setEmail(e.target.value) 
          }}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="enter your password" className="input input-bordered" required value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <label className="label">
            <Link to={'/Login'} className="label-text-alt link link-hover">I have an acount?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
       <Link to={'/Login'} >  <button onClick={addUser}  className="btn btn-primary w-[22em]">SignUp</button> </Link>
        </div>
      </form>
    </div>
  </div>
</div>
    
    
    
    
    </>
  )
}

export default SignUp