import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Componentes/Navbar"

function Details() {
  const {id} = useParams();
  const[viewDetails , setViewDetails]=useState([]);


  useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    // const details = response.data.find((data) => data.id === id)
    setViewDetails(response.data)
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  },[id])


  if(!viewDetails){
    return <p>Looding..</p>
  }



  return (
    <>
     <div>
     <Navbar/>
        {/* component */}
        <div className="flex min-h-screen items-center justify-center  max-sm:w-[24em]">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img src={viewDetails.image} alt="image" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
               {viewDetails.title}
              </h6>
              {/* <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Lyft launching cross-platform service this week
              </h4> */}
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {viewDetails.description}
              </p>

              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {viewDetails.price}
              </p>
              <a className="inline-block" href={'/Home'}>
                <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                 Back 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          {/* stylesheet */}
          <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />
        </div>
        <div className="flex items-center justify-center">
         
        </div>
      </div>
    
    
    
    
    </>
  )
}

export default Details