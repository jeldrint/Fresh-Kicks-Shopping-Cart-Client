import { Link } from "react-router-dom"

const Header = () : JSX.Element => {
    return (
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between bg-indigo-700">
            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-varelaRound transition duration-200 hover:invert cursor-pointer'>
                <span className=''>Fresh</span>
                <span className='text-slate-100'>Kicks</span>
            </div>
            <section className='list-none cursor-pointer flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-sm md:text-base lg:text-lg xl:text-xl font-medium font-varela'>
                <Link to=''>
                    <button className="transition duration-150 hover:invert" >Login</button>
                </Link>
                <Link to=''>
                    <button className="transition duration-150 hover:invert">Sign up</button>
                </Link>
            </section>
        </header>
    )    

}

export default Header;