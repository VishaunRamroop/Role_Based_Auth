import {useState} from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <li className="text-lg font-bold">StoreFront</li>
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}
