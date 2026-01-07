import SocialsData from "../data/SocialsData";

function Footer() {
    return(
        <>
            {/* Background */}
            <div className="pt-10 pb-5 flex-grow bg-stone-800 dark:bg-stone-100">
                {/* Content */}
                <div className="flex justify-center">
                    <div className="w-[90%] md:w-[916px]">
                        <div className="grid grid-cols-2 h-56">
                            <div className="col-span-1 flex flex-col">
                                {/* Left side */}
                                <div className="h-full">
                                    <div className="row-span-1 pb-8 flex items-start">
                                        {/* Title */}
                                        <span className="inline-block font-bold text-3xl bg-gradient-to-tr from-violet-600 to-amber-400 bg-clip-text text-transparent">
                                            Awesome to see you here!
                                        </span>
                                    </div>
                                    <div className="row-span-1 flex items-start">
                                        {/* Subtitle */}
                                        <p className="align-text-top text-left font-sm leading-6 text-stone-400 dark:text-stone-500">
                                            <p>caiovini.aa@gmail.com</p>
                                            <p>This website is best viewed in a desktop</p>
                                            <p>&copy; { new Date().getFullYear() } Caio Vinicius Aguiar Alves</p>
                                            <p className="pt-8">
                                                All design credits to 
                                                <span className="pl-1 pr-1">
                                                    <a href={'https://www.leah-lee.com/'} className="inline-block font-bold bg-gradient-to-tr from-violet-700 to-amber-400 bg-clip-text text-transparent">
                                                        <div className="hover:inline-block hover:bg-clip-text hover:text-transparent hover:bg-violet-700">
                                                            Leah Lee's
                                                        </div>
                                                    </a>
                                                </span>
                                                portfolio
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-end items-end pb-8">
                                <a href="https://www.linkedin.com/in/caioaguiar22/" className="font-semibold text-stone-400 dark:text-stone-500 hover:text-light-100 hover:dark:text-dark-100">
                                    <div className="transition-colors duration-300 ease-in-out">
                                        LinkedIn
                                    </div>
                                </a>
                                <a href="https://github.com/caiovini980" className="font-semibold text-stone-400 pl-5 dark:text-stone-500 hover:text-light-100 hover:dark:text-dark-100">
                                    <div className="transition-colors duration-300 ease-in-out">
                                        Github
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;