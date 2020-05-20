import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () =>
{
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/newQuestion">
                        New Question
                    </Link>
                </li>
                <li>
                    <Link to="/board">
                        Leader Board
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
