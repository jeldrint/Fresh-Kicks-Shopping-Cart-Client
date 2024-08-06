import Footer from "./Footer";


const Checkout = () : React.ReactElement => {
    return(
        <div className="min-h-screen h-full w-full flex flex-col justify-between items-center">
            <header className="bg-indigo-800 font-poppins w-full px-5 py-9 md:p-8 lg:p-9 flex items-center justify-between"></header>
            <div className='font-sans max-w-xs rounded shadow-lg border-2 flex flex-col p-2 lg:p-4 transition duration-250 hover:scale-105'>
                Thank you for visiting my app!
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;