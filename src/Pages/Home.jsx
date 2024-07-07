import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cor from "../Componentes/Cor"
import Navbar from "../Componentes/Navbar"
import Foter from '../Componentes/Foter';


function Home() {

 const[prodect , setProdect]= useState([])


 useEffect(() => {

    axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setProdect(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    
 },[])




  return (
    <>
   <Navbar />
    <Cor/>

 <div className='grid grid-cols-4 gap-4 bg-[#e3e6e6] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center'> 
{prodect.map((e) => {
 return <div className="flex flex-row " key={e.id} >
  
<div className=" card bg-base-100 w-96 shadow-xl  ">
<figure className="px-10 pt-10 ">
<img
  src={e.image}
  alt="Shoes"
  className="rounded-xl " />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{e.title}</h2>
<p>{e.price}</p>
<div className="card-actions">
<Link to={`/Details/${e.id}`} ><button className="btn btn-primary">View Details</button></Link> 
</div>
</div>
</div>
</div> 
  
})}
</div>  

<Foter/>
    
    </>
  )
}

export default Home