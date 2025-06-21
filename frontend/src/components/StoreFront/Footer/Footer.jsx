
import {Link }from 'react-router-dom';


export default function Footer({background}) {
  return (
   <footer className={`${background? background:'bg-gray-800'}`}>
    <div className=" text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 StoreFront. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
        </ul>
      </div>
    </div>
   </footer>
  )
}
