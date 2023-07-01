import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-evenly items-center bg-blue-200">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to="/contact us">Contact Us</NavLink>
    </nav>
  ) 
}
