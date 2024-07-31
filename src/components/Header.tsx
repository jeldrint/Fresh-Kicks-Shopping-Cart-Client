import { Link } from "react-router-dom"
import HotIcon from '../images/icons8-hot-48.png'

const Header = () : JSX.Element => {
    return (
        <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between bg-indigo-700">
            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-varelaRound transition duration-200 hover:invert cursor-pointer'>
                <span className=''>Fresh</span>
                <span className='text-slate-100'>Kicks</span>
            </div>
            <section className='list-none cursor-pointer text-slate-100 opacity-90 tracking-wide flex items-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] font-varela'>
                <Link to='' className="transition duration-150 hover:invert">
                    Shop Now
                </Link>
                <Link to='' className="transition duration-150 hover:invert flex items-center">
                    <img alt='hot-item' src={HotIcon} width='15px' />Hot!
                </Link>
                <Link to='' className="transition duration-150 hover:invert">
                    New Arrival
                </Link>
                <Link to='' className="transition duration-150 hover:invert hidden sm:block">
                    Men
                </Link>
                <Link to='' className="transition duration-150 hover:invert hidden sm:block">
                    Women
                </Link>
                <Link to='' className="transition duration-150 hover:invert hidden sm:block">
                    Kids
                </Link>
                <Link to='' className="transition duration-150 hover:invert hidden sm:block">
                    Login
                </Link>
                <Link to='' className="transition duration-150 hover:invert hidden sm:block">
                    Sign-up
                </Link>
            </section>
        </header>
    )    

}

export default Header;