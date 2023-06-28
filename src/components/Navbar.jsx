import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-evenly items-center bg-blue-200">
      <Link to='/' className="text-3xl">Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  ) 
}
