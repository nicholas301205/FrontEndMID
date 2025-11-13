const Header = () => {
    return (
        <div className="w-full shadow-lg bg-white text-black flex items-center font-mono font-bold fixed h-16 top-0 left-0 w-full px-10">
            <div className="px-4 text-xl bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 bg-clip-text text-transparent">
                NM
            </div>
            <a href="#profile" className="ml-auto p-5 hover:bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 hover:text-white transition">
                Profile
            </a>
            <a href="#about-me" className="p-5 hover:bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 hover:text-white transition">
                About
            </a>
            <a href="#contact" className="p-5 hover:bg-gradient-to-br from-green-400 via-emerald-500 to-green-700 hover:text-white transition">
                Contact
            </a>
        </div>
    );
}

export default Header;