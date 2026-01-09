import PortfolioData from "../data/PortfolioData";
import PortfolioItem from "./PortfolioItem";

import SmallPortfolioData from "../data/SmallPortfolioData";
import SmallPortfolioItem from "../components/SmallPortfolioItem";

function Content() {
    return (
        <div className="flex-grow">
                <div className="flex justify-center">
                    <div className="w-[90%] md:w-[916px]">
                    {/* Sections */}
                        <div className="grid grid-col-3 gap-4">
                            {/* Intro */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Left side */}
                                <div className="col-span-1 grid grid-row-3 w-auto h-auto text-wrap">
                                    {/* Text */}
                                    <div className="row-start-2 row-end-2">
                                        {/* Title */}
                                        <p className="text-2xl leading-relaxed font-semibold line pb-5 text-stone-800 dark:text-stone-100">
                                            Hi! I'm Caio, a
                                            <span className="inline-block font-bold bg-gradient-to-tr from-amber-400 to-violet-600 bg-clip-text text-transparent pr-2 pl-2">
                                                software engineer
                                            </span>
                                            <br />
                                            <span className="">
                                                really into games and UI.
                                            </span>
                                        </p>
                                        {/* Subtitle */}
                                        <p className="text-lg leading-7 text-stone-500 dark:text-stone-400">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>

                                {/* Right side */}
                                <div className="col-span-1 flex justify-center items-center">
                                    {/* Image/Gif */}
                                    <img 
                                        className="h-64 w-64 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 shadow-dark-100 dark:shadow-neutral-900" 
                                        src="./images/profile-alt.jpg" 
                                        alt="Profile pic, why not? Right?" 
                                    />
                                </div>
                            </div>

                            {/* Game Projects / Main projects */}
                            <div className="col-span-full pt-20 bg-transparent text-dark-100 dark:text-light-100"> 
                                {/* Background */}
                                <div className="">
                                    <div className="grid grid-cols-2 grid-rows-3 gap-y-16 gap-x-8">
                                        { PortfolioData.map(project => (
                                            <PortfolioItem 
                                                imageUrl = { project.ImageUrl }
                                                title = { project.Title }
                                                stack = { project.Stack }
                                                period= { project.Period }
                                                link = { project.Link } 
                                                description= { project.Description }
                                            />
                                        )) }
                                    </div>
                                </div>
                            </div>

                            {/* Side Projects */}
                            <div className="col-span-full pt-20 pb-[4.8rem] bg-transparent"> 
                                <p className="text-3xl leading-relaxed font-semibold line pb-5 text-stone-800 dark:text-stone-100">
                                    Side projects
                                </p> 
                                <div className="grid grid-cols-3 grid-rows-2 gap-y-16 gap-x-5">
                                    { SmallPortfolioData.map(project => (
                                        <SmallPortfolioItem 
                                            imageUrl = { project.ImageUrl }
                                            title = { project.Title }
                                            stack = { project.Stack }
                                            period= { project.Period }
                                            link = { project.Link } 
                                            description= { project.Description }
                                        />
                                    )) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Content;