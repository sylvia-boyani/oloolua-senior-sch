import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <header className={`olooluaNavbar ${scrolled ? "scrolled" : ""}`}>

            <div className="olooluaNavContainer">

                <a href="/" className="olooluaLogo">

                    <span>OLOOLUA</span>

                    <small>Senior School</small>

                </a>

                <nav className={menuOpen ? "navMenu active" : "navMenu"}>

                    <a href="/">Home</a>

                    <a href="/about">About</a>

                    <a href="/academics">Academics</a>

                    <a href="/">Admissions</a>

                    <a href="/">Student Life</a>

                    <a href="/">Gallery</a>

                    <a href="/">Contact</a>

                    <a href="/" className="navButton">
                        Apply Now
                    </a>

                </nav>

                <button
                    className="menuButton"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

        </header>

    );

};

export default Navbar;