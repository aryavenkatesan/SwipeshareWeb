import { useState, useCallback } from 'react';
import logo from '/assets/logo.png'
import { useLenis } from "./components/lenis"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lenis = useLenis();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (lenis) {
            lenis.scrollTo(section, { offset: -80, duration: 1.2 });
        } else {
            // Fallback to native scrolling
            const element = document.querySelector(section);
            if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [lenis]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20">
                <div className="flex items-center justify-between px-4 lg:px-12 py-4">
                    <div className='flex flex-row items-center'>
                        <img src={logo} alt="Swipeshare logo" className="h-6 lg:h-8 w-auto pr-2 lg:pr-4" />
                        <h1 className="text-xl lg:text-2xl" style={{
                            fontFamily: 'Montserrat', fontWeight: 300
                        }}>Swipeshare</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-4" style={{ fontFamily: 'Montserrat', fontWeight: 400 }}>
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            onClick={(e) => handleNavClick(e, '#features')}
                            className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden relative w-8 h-8 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-[11px]' : 'top-0'
                                }`}></span>
                            <span className={`absolute w-full h-0.5 bg-gray-700 top-[11px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span className={`absolute w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-[11px]' : 'top-[22px]'
                                }`}></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'
                }`}>
                {/* Backdrop blur */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={toggleMenu}
                ></div>

                {/* Menu Panel */}
                <div className={`absolute right-0 top-0 h-full w-3/4 max-w-sm shadow-xl transform transition-transform duration-300 overflow-hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#A98CE4] via-white/90 to-white/90 backdrop-blur-msm"></div>

                    {/* Content */}
                    <div className="relative flex flex-col pt-20 px-8" style={{ fontFamily: 'Montserrat', fontWeight: 400 }}>
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, '#home')}
                            className="py-4 text-2xl border-b border-gray-200/50 hover:text-[#A98CE4] transition-colors duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#features"
                            onClick={(e) => handleNavClick(e, '#features')}
                            className="py-4 text-2xl border-b border-gray-200/50 hover:text-[#A98CE4] transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className="py-4 text-2xl hover:text-[#A98CE4] transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header