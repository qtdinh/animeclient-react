import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn: boolean = false;

    return (
        <Wrapper>
            <header>
                <nav>
                    <Link to="/">
                        <span className="link">Home</span>
                    </Link>
                    
                    <Link to="/characters">
                        <span className="link">Characters</span>
                    </Link>

                    <Link to="/series">
                        <span className="link">Series</span>
                    </Link>
                    
                    <span className="separator"></span>

                    {!isLoggedIn ? (
                        <Link to="/login">
                            <span className="link">Login</span>
                        </Link>
                    ) : (
                        <Link to="/">
                            <span className="link">Logout</span>
                        </Link>
                    )}
                </nav>
            </header>
        </Wrapper>
    )
}

export default Navbar;