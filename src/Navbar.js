import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="/ds-first" className='site-title'>Data Science</a>
            <ul>
                <li>
                    <a href="/ds-first/repl">REPL</a>
                </li>
                <li>
                    <a href="/ds-first/jlite">J Lite</a>
                </li>
                <li>
                    <a href="/ds-first/observable">
                        Observable
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar