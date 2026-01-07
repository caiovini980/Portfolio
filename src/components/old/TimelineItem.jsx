import Project from "./Project";

function TimelineItem( { year, title, company, description, projects } ) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-300 dark:border-stone-400">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-stone-300 dark:border-stone-400 dark:bg-stone-400" />
                
                {/* Bigger list */}
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 dark:text-stone-900 dark:bg-stone-200 rounded-md">
                        { year }
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                        { title }
                    </h3>
                    <p className="text-lg font-normal text-stone-900 dark:text-stone-200">
                        -
                    </p>
                    <p className="text-lg font-normal text-stone-900 dark:text-stone-200">
                        { company }
                    </p>
                </p>
                
                    {/* Smaller list */}
                    <ol className="flex flex-col ml-5 mt-0 md:flex-row relative border-l border-stone-900 dark:border-stone-400">
                        <li className="mt-5 ml-5 ">
                            {projects.map(project => (
                                <Project 
                                    title={project.Title}
                                    impactOnProject={project.Impact}
                                />
                            ))}
                        </li>
                    </ol>
                    <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-300">
                        { description }
                    </p>
            </li>
        </ol>
    )
}

export default TimelineItem;