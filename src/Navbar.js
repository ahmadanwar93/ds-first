import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="/" className='site-title'>Data Science</a>
            <ul>
                <li>
                    <a href="/repl">REPL</a>
                </li>
                <li>
                    <a href="/jlite">J Lite</a>
                </li>
                <li>
                    <a href="/observable">
                        Observable
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar