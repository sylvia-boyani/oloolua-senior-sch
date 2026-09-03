import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [academicsOpen, setAcademicsOpen] = useState(false);

    const academicsRef = useRef(null);

    /* =========================
       SCROLL
    ========================= */

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    /* =========================
       CLOSE DROPDOWN OUTSIDE
    ========================= */

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                academicsRef.current &&
                !academicsRef.current.contains(event.target)
            ) {
                setAcademicsOpen(false);
            }

        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    const closeMenu = () => {
        setMenuOpen(false);
        setAcademicsOpen(false);
    };


    return (

        <header
            className={`olooluaNavbar ${
                scrolled ? "scrolled" : ""
            }`}
        >

            <div className="olooluaNavContainer">


                {/* LOGO */}

                <Link
                    to="/"
                    className="olooluaLogo"
                    onClick={closeMenu}
                >

                    <span>OLOOLUA</span>

                    <small>Senior School</small>

                </Link>


                {/* NAVIGATION */}

                <nav
                    className={
                        menuOpen
                            ? "navMenu active"
                            : "navMenu"
                    }
                >

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>


                    <Link
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </Link>


                    {/* =========================
                        ACADEMICS DROPDOWN
                    ========================= */}

                    <div
                        className="navDropdown"
                        ref={academicsRef}
                    >

                        <button
                            className="navDropdownButton"
                            onClick={() =>
                                setAcademicsOpen(
                                    !academicsOpen
                                )
                            }
                        >

                            Academics

                            <span
                                className={
                                    academicsOpen
                                        ? "arrow rotate"
                                        : "arrow"
                                }
                            >
                                ⌄
                            </span>

                        </button>


                        {academicsOpen && (

                            <div className="navDropdownMenu">

                                <Link
                                    to="/academics"
                                    onClick={closeMenu}
                                >
                                    Academics Overview
                                </Link>

                                <Link
                                    to="/academics/stem"
                                    onClick={closeMenu}
                                >
                                    STEM Pathway
                                </Link>

                                <Link
                                    to="/academics/social-sciences"
                                    onClick={closeMenu}
                                >
                                    Social Sciences
                                </Link>

                                <Link
                                    to="/academics/arts-sports"
                                    onClick={closeMenu}
                                >
                                    Arts & Sports Science
                                </Link>

                            </div>

                        )}

                    </div>


                    <Link
                        to="/admissions"
                        onClick={closeMenu}
                    >
                        Admissions
                    </Link>


                    <Link
                        to="/student-life"
                        onClick={closeMenu}
                    >
                        Student Life
                    </Link>


                    <Link
                        to="/gallery"
                        onClick={closeMenu}
                    >
                        Gallery
                    </Link>


                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>


                    <Link
                        to="/admissions"
                        className="navButton"
                        onClick={closeMenu}
                    >
                        Apply Now
                    </Link>

                </nav>


                {/* MOBILE MENU BUTTON */}

                <button
                   className="menuButton"
                   onClick={() => setMenuOpen(!menuOpen)}
                   aria-label={menuOpen ? "Close menu" : "Open menu"}
                   >
                 {menuOpen ? "x" : "☰"}
                </button>

            </div>

        </header>

    );

};

export default Navbar;