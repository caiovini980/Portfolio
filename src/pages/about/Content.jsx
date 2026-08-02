import AboutData from "../../data/AboutData"
import FormattedText from "../../components/FormattedText"

function Content() {
    return (
        <div className="flex justify-center">
            <div className="w-[90%] md:w-[916px] pt-0">
                <div className="grid grid-rows-[auto_auto_auto] items-start">

                    {/* Title */}
                    <div className="">
                        <p className="text-3xl leading-relaxed font-Rubik font-semibold pb-5 text-stone-800 dark:text-stone-100 transition-colors duration-300 ease-in-out">
                            A bit
                            <span className="inline-block font-bold bg-gradient-to-tr from-amber-400 to-violet-600 bg-clip-text text-transparent pr-2 pl-2">
                                about me
                            </span>
                        </p>
                    </div>

                    {/* My story */}
                    <div className="col-span-1 pt-4 grid grid-cols-1 gap-y-4">
                        {AboutData.story.map((paragraph, index) => (
                            <p key={index} className="text-base font-Rubik leading-7 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">
                                <FormattedText text={paragraph} />
                            </p>
                        ))}
                    </div>

                    {/* What motivates me */}
                    <div className="col-span-1 pt-16">
                        <div className="border-t-2 pb-10 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out"></div>
                        <p className="text-2xl font-Rubik font-semibold pb-4 text-stone-800 dark:text-stone-100 transition-colors duration-300 ease-in-out">
                            What motivates me
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {AboutData.motivation.map((entry) => (
                                <div key={entry.title}>
                                    <p className="font-Rubik text-lg font-semibold text-stone-700 dark:text-stone-200 pb-2 transition-colors duration-300 ease-in-out">
                                        {entry.title}
                                    </p>
                                    <p className="text-base font-Rubik leading-7 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">
                                        {entry.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="col-span-1 pt-16 pb-20">
                        <div className="border-t-2 pb-10 border-gray-200 dark:border-gray-800 transition-colors duration-300 ease-in-out"></div>
                        <p className="text-2xl font-Rubik font-semibold pb-4 text-stone-800 dark:text-stone-100 transition-colors duration-300 ease-in-out">
                            Experience
                        </p>
                        <div className="grid grid-cols-1 gap-y-8">
                            {AboutData.experience.map((entry) => (
                                <div key={entry.company}>
                                    <a href={entry.website} className="font-Rubik text-lg font-semibold text-stone-700 dark:text-stone-200 pb-3 transition-colors duration-300 ease-in-out">
                                        {entry.company}
                                    </a>
                                    <div className="grid grid-cols-1 gap-y-4">
                                        {entry.roles.map((role) => (
                                            <div key={role.name} className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-x-6 md:items-baseline">
                                                <p className="font-Rubik text-lg text-stone-700 dark:text-stone-300 transition-colors duration-300 ease-in-out">
                                                    {role.name}
                                                </p>
                                                <p className="font-Rubik text-lg text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">
                                                    {role.period}
                                                </p>
                                                <p className="font-Rubik text-base leading-7 pt-1 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">
                                                    <FormattedText text={role.description} />
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;
