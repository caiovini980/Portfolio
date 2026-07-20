import PortfolioData from "../../data/PortfolioData"
import PortfolioItem from "../../components/PortfolioItem"

import SmallPortfolioData from "../../data/SmallPortfolioData"
import SmallPortfolioItem from "../../components/SmallPortfolioItem"

import Tag, {Colors} from "../../components/Tag"

import profileImage from "../../assets/profile-alt.jpg"

function Content() {
    return (
        <div className="flex justify-center">
            <div className="w-[90%] md:w-[916px] pt-10">
            {/* Sections */}
                <div className="grid grid-rows-[auto_auto_auto] items-start">
                    {/* Intro */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        {/* Left side */}
                        <div className="col-span-1 md:col-start-1 flex justify-center items-center text-wrap">
                            {/* Text */}
                            <div className="">
                                {/* Title */}
                                <p className="text-2xl leading-relaxed font-Rubik font-semibold text-center md:text-left pb-5 text-stone-800 dark:text-stone-100 transition-colors duration-300 ease-in-out">
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
                                <p className="text-lg font-Rubik leading-7 text-center md:text-left text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">
                                    Playing video games since a little kid, and been making them since 2020. I've been in AAA, AA and indie teams. Always thriving for a friendly and funny working environment.
                                    <br />
                                </p>

                                <div className="flex flex-row pt-9 gap-x-3 items-start">
                                    <Tag text={"Unity"} color={Colors.BLUE}></Tag>
                                    <Tag text={"Unreal"} color={Colors.PURPLE}></Tag>
                                    <Tag text={"Roblox Studio"} color={Colors.GREEN}></Tag>
                                    <Tag text={"Custom Engines"} color={Colors.ORANGE}></Tag>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="col-span-1 md:col-start-2 flex justify-center items-center pt-10 md:pt-0">
                            {/* Image/Gif */}
                            <img 
                                className="h-44 w-44 md:h-64 md:w-64 rounded-full object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 shadow-dark-100 dark:shadow-neutral-900" 
                                src={profileImage}
                                alt="Profile pic, why not? Right?" 
                            />
                        </div>
                    </div>


                    {/* Game Projects / Main projects */}
                    <div className="col-span-1 pt-16 bg-transparent text-dark-100 dark:text-light-100 transition-colors duration-300 ease-in-out"> 
                        <div className="border-t-2 pb-20 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out"></div>
                        {/* Background */}
                        <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto] gap-y-16 gap-x-8 items-start">
                                { PortfolioData.map(project => (
                                    <PortfolioItem project={project} />
                                )) }
                            </div>
                        </div>
                    </div>

                    {/* Side Projects */}
                    <div className="col-span-full pt-5 bg-transparent"> 
                        <div className="border-t-2 pb-16 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out"></div>
                        <p className="text-3xl leading-relaxed font-Rubik font-semibold line pb-5 text-stone-800 dark:text-stone-100 transition-colors duration-300 ease-in-out">
                            Side projects
                        </p> 
                        <div className='grid grid-cols-2 grid-rows-[auto_auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto_auto] gap-x-5 gap-y-16 items-start'>
                            { SmallPortfolioData.map(project => (
                                <SmallPortfolioItem project={project} />
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;