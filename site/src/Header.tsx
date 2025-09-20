import logo from '../public/assets/logo.png';

function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20">
                <div className="flex items-center justify-between px-16 py-4">
                    <div className='flex flex-row items-center'>
                        <img src={logo} alt="Swipeshare logo" className="h-8 w-auto pr-4" />
                        <h1 className="text-2xl" style={{
                            fontFamily: 'Montserrat', fontWeight:
                                300
                        }}>Swipeshare</h1>
                    </div>
                    <nav className="flex gap-4" style={{ fontFamily: 'Montserrat', fontWeight: 400 }}>
                        <a href="#" className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200 ">
                            Home
                        </a>
                        <a href="#" className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200">
                            About
                        </a>
                        <a href="#" className="px-6 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:text-[#A98CE4] transition-all duration-200 ">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header