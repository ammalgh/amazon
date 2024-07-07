import { useState } from "react"
import axios from 'axios';
import { Link ,useNavigate } from "react-router-dom";
function Login() {
 const[email , setEmail] = useState('');
 const[password , setPassword] = useState('');
 const navigate = useNavigate();

const handelLogin = (e) => {
    e.PreventDefault();
   
    axios.get('https://6657373e9f970b3b36c869ed.mockapi.io/data')
    .then(function (response) {
    
        const user =response.data.find(user => (user.email === email && user.password === password));
        
        if(user) {


            localStorage.setItem('user' , JSON.stringify('user'))
            alert("Login successful");
            navigate('/Home');
          }else {
            console.log("Wrong password or username");
          }





      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });


    


}





  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <label className="label">
            <Link to={'/'} className="label-text-alt link link-hover">I Do not have acount?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
      <Link to={'/Home'} >  <button  onClick={handelLogin} className="btn btn-primary w-[22em]">Login</button></Link> 
        </div>
      </form>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Login