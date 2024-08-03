import { Link } from "react-router-dom"
import HotIcon from '../images/icons8-hot-48.png'
import CartIcon from '../images/shopping-bag-blk.png'

const Header = () : React.ReactElement => {

    return (
        <>
            <header className="bg-indigo-800 font-poppins w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between">
                <Link to='/' className='font-varelaRound tracking-wide font-bold self-end transition duration-200 hover:invert cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl '>
                    <span>Fresh</span>
                    <span className='text-slate-100'>Kicks</span>
                </Link>
                <section className="text-slate-100 opacity-90 tracking-wide flex flex-col gap-y-1">
                    <Link to='' className="font-montserrat transition duration-150 hover:invert flex justify-end self-end text-[9px] md:text-[11px] lg:text-[12px] xl:text-[13px]">
                        LOGIN | REGISTER
                    </Link>
                    <div className='list-none cursor-pointer flex items-start gap-x-3 md:gap-x-5 lg:gap-x-7 text-[11px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
                        <Link to='/fresh-kicks/shop' className="transition duration-150 hover:invert hover:scale-[1.15]">
                            Shop Now
                        </Link>
                        <Link to='/fresh-kicks/hot-items' className="transition duration-150 hover:scale-[1.25] flex items-center">
                            <img alt='hot-item' src={HotIcon} width='15px' /><span className="transition duration-150 hover:invert">Hot!</span>
                        </Link>
                        <Link to='/fresh-kicks/new-arrivals' className="transition duration-150 hover:invert hover:scale-[1.15] hidden sm:block">
                            New Arrival
                        </Link>
                        <Link to='/fresh-kicks/men' className="transition duration-150 hover:invert hover:scale-[1.15] hidden sm:block">
                            Men
                        </Link>
                        <Link to='/fresh-kicks/women' className="transition duration-150 hover:invert hover:scale-[1.15] hidden sm:block">
                            Women
                        </Link>
                        <Link to='/fresh-kicks/kids' className="transition duration-150 hover:invert hover:scale-[1.15] hidden sm:block">
                            Kids
                        </Link>
                        <img alt='hot-item' src={CartIcon} width='15px' className="w-4 md:w-5 lg:w-7 invert transition duration-150 hover:invert hover:scale-[1.15]" />
                    </div>
                </section>
            </header>
        </>
    )    

}

export default Header;


