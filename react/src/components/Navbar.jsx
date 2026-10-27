import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        {name: 'Home', path: '#home'},
        {name: 'About', path: '#about'},
        {name: 'Skills', path: '#skills'},
        {name: 'Projects', path: '#projects'},
    ];

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#home" className="navbar-logo">
                    TLJS<span>.</span>
                </a>

                <nav
                    className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
                    aria-label="Main navigation"
                    id="main-navigation"
                >
                    {navLinks.map((link) => {
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={closeMenu}>
                                {link.name}
                            </a>
                    })}

                    <a 
                        href="#contact"
                        className="mobile-contact"
                        onClick={closeMenu}
                        >
                            Contact Me
                        </a>
                </nav>

                <a 
                    href="#contact"
                    className="navbar-contact"
                    onClick={closeMenu}
                    >
                        Contact Me
                        <ArrowUpRight size={18}/>
                    </a>
                
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation">
                        {isMenuOpen ? <X size={16}/> : <Menu size={26}/>}
                    </button>
            </div>
            
        </header>
    );
}

export default Navbar;

// --------------------------- End Of File ------------------------------ //