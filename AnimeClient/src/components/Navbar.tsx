import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';


const Navbar = () => {
    return (
        <Wrapper>
            <header>
                <nav>
                    <Link to="/">
                        <a>
                            <span className="link">Home</span>
                        </a>
                    </Link>
                    
                    <Link to="/characters">
                        <a>
                            <span className="link">Characters</span>
                        </a>
                    </Link>

                    <Link to="/series">
                        <a>
                            <span className="link">Series</span>
                        </a>
                    </Link>
                    
                    <span className="separator"></span>
                </nav>
            </header>
        </Wrapper>
    )
}

export default Navbar;