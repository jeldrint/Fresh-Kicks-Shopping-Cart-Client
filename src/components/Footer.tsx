import GitIcon from '../images/github.png'

const Footer = (): React.ReactElement => {
    return (
        <footer className='w-full font-montserrat text-xs text-center md:text-base lg:text-lg flex justify-center items-center p-2 md:p-1'>
            <span className=""> 2024 {String.fromCharCode(169)} jeldrint{" "}
                <a href='https://github.com/jeldrint' target='_blank' rel='noopener'>
                    <img alt='Github Icon' src={GitIcon} className='w-5 inline-flex transition-opacity hover:opacity-50' />
                </a>{" "}
                || Icons by{" "}
                    <a href='https://icons8.com' target='_blank' className='underline transition-opacity hover:opacity-50' rel='noopener'>Icons 8</a>
                {" "} || Data from{" "}
                <a href='https://www.footlocker.ph/' target='_blank' className='underline transition-opacity hover:opacity-50' rel='noopener'>Footlocker PH</a>
            </span>
        </footer>

    )
}

export default Footer