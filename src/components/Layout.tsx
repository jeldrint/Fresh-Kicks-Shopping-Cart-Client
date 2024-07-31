import { Link, Outlet } from "react-router-dom"
import GitIcon from '../images/github.png'
import HotIcon from '../images/icons8-hot-48.png'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) : JSX.Element => {
    return (
        <>
            <header className="w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between bg-indigo-700">
                <Link to='/' className='font-varelaRound self-end transition duration-200 hover:invert cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>
                    <span className=''>Fresh</span>
                    <span className='text-slate-100'>Kicks</span>
                </Link>
                <section className="text-slate-100 opacity-90 tracking-wide flex flex-col">
                    <Link to='' className="transition duration-150 hover:invert flex justify-end text-[6px] md:text-[10px] lg:text-[12px] xl:text-[13px]">
                        LOGIN | REGISTER
                    </Link>
                    <div className='list-none cursor-pointer flex items-start gap-x-3 md:gap-x-5 lg:gap-x-7 text-[11px] md:text-[15px] lg:text-[17px] xl:text-[19px]'>
                        <Link to='/fresh-kicks/shop' className="transition duration-150 hover:invert">
                            Shop Now
                        </Link>
                        <Link to='/fresh-kicks/shop/hot-items' className="transition duration-150 hover:invert flex items-center">
                            <img alt='hot-item' src={HotIcon} width='15px' />Hot!
                        </Link>
                        <Link to='/fresh-kicks/shop/new-arrivals' className="transition duration-150 hover:invert hidden sm:block">
                            New Arrival
                        </Link>
                        <Link to='/fresh-kicks/shop/men' className="transition duration-150 hover:invert hidden sm:block">
                            Men
                        </Link>
                        <Link to='/fresh-kicks/shop/women' className="transition duration-150 hover:invert hidden sm:block">
                            Women
                        </Link>
                        <Link to='/fresh-kicks/shop/kids' className="transition duration-150 hover:invert hidden sm:block">
                            Kids
                        </Link>
                    </div>
                </section>
            </header>
            <Outlet />
            <footer className='w-full static bottom-0 text-xs md:text-base lg:text-lg font-myFont flex justify-center items-center p-2 md:p-1'>
                <span className=""> 2024 {String.fromCharCode(169)} jeldrint{" "}
                    <a href='https://github.com/jeldrint' target='_blank' rel='noopener'>
                        <img alt='Github Icon' src={GitIcon} className='w-5 inline-flex transition-opacity hover:opacity-50' />
                    </a>{" "}
                    || Icons by{" "}
                        <a href='https://icons8.com' target='_blank' className='underline transition-opacity hover:opacity-50' rel='noopener'>Icons 8</a>
                </span>
            </footer>

        </>
    )    

}

export default Layout;


