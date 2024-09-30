import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from '../../assets/image/Nadim.jpg'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
    const Links = <>
    <li><NavLink to={"/"}><a href="">Home</a></NavLink></li>
    <li><NavLink to={"/about"}><a href="">About</a></NavLink></li>
    {
      user &&  <><li><NavLink to={"/privet"}><a href="">Sell with Redfin</a></NavLink></li>
      <li><NavLink to={"/update"}><a href="">Update Profile</a></NavLink></li></> 
    }
    </>

const handlerLogout = ()=>{
  logOut()
  .then()
  .catch(error => console.log(error))
}


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {
            Links
           } 
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">RedFin</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            Links
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?
          <>
            <img className="w-[50px] h-[50px ] rounded-[50%]" title={user.displayName} src={user?.photoURL || {logo}} alt="" />
          <Link onClick={handlerLogout}><a className="btn">Sign out</a></Link>
          </>:
          <Link to={"/login"}><a className="btn">Login</a></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
