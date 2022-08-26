import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            {/* <a href="/" className='site-title'>Data Science</a> */}
            <Link to="/" >Data Science</Link>
            <ul>
                <li>
                    {/* <a href="/repl">REPL</a> */}
                    <Link to ="/repl">REPL</Link>
                </li>
                <li>
                    {/* <a href="/jlite">J Lite</a> */}
                    <Link to="/jlite">J Lite</Link>
                </li>
                <li>
                    {/* <a href="/observable">
                        Observable
                    </a> */}
                    <Link to="/observable">Observable</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar