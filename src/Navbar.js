import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="/my-app" className='site-title'>Data Science</a>
            <ul>
                <li>
                    <a href="/my-app/repl">REPL</a>
                </li>
                <li>
                    <a href="/my-app/jlite">J Lite</a>
                </li>
                <li>
                    <a href="/my-app/observable">
                        Observable
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar