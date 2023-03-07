import { Link, NavLink } from 'react-router-dom';

import { useState } from 'react';



function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className=' h-auto md:h-24 p-2 bg-white-200  mx-auto flex justify-around md:items-center'>
      <Link to='/'>
        <h1>Kreator</h1> 
      </Link>
      <div
        className={
          togglerNav ? 'flex flex-col p-4 gap-4 md:inline' : 'hidden md:inline'
        }
      >
        <NavLink className='nav-link' onClick={clickHandler} to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link' onClick={clickHandler} to='/expenditure'>
          Expenditure
        </NavLink>
        
      </div>
      <div
      className={
        togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
      }
      >
      <NavLink className='nav-link' onClick={clickHandler} to='/signup'>
      Signup
    </NavLink>
      </div>
      
    </nav>
  );
}

export default Navbar;