import pp from '../assets/pp.png'

function Navbar() {
  return (
    <>
    <div>
    <div className="navbar bg-black p-5 max-sm:hidden  max-md:hidden">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl flex">
  
 <img  className="w-[3em] mr-4 " src="https://cdn.icon-icons.com/icons2/2506/PNG/512/menu_icon_150667.png" ></img>  
  <img className="w-[3em]  mx-8  absolute top-0 translate-y-6 max-sm:mr-[4em] " src="https://i.pinimg.com/564x/fa/16/b8/fa16b892512b3df516211c68fc489134.jpg" ></img>
  
  </a>
 
  </div>
  <div className="flex-none gap-2">
   {/*  */}
   <label className="input input-bordered flex items-center gap-2 w-[20em] mx-auto mr-[12em] ">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

   {/*  */}
<div className='flex gap-3'>

<p className='text-[#fff]'>EN </p>
    <p className='text-[#fff]'>Hello,sign in</p>
    <p className='text-[#fff]'> Returns order</p>
</div>
   

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full object-cover">
          <img className=''
            alt="Tailwind CSS Navbar component"
            src={pp}/>
        </div>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

    {/*mobil  */}


    <div className="navbar bg-black  lg:hidden">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-[#fff]">amazon</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


</div>

    
    </>
  )
}

export default Navbar