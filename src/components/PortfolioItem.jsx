// IMPORTANT: Images must be  788x788

import { Link } from "react-router-dom";
import Tag, {Colors} from "./Tag";

function PortfolioItem({ project }) {
    return (
        <>
            <div>
                <Link to={ `/projects/${project.slug}` } className="row-span-1">
                    {/* Item card */}
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden bg-light-200">
                        <img 
                            src={ project.imageUrl } 
                            alt={ project.title }
                            className="w-full h-50 md:h-[445px] md:w-[445px] object-cover"
                        />
                    </div>
                </Link>

                {project.tagColor && project.tagText && (
                    <div className="flex flex-row pt-7 items-start">
                        <Tag color={project.tagColor} text={project.tagText}></Tag>
                    </div>
                )}

                {/* Text area */}
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="flex-1 flex">
                        <a href={ project.link } target="_blank" rel="noreferrer noopener">
                            <p className="font-semibold text-start font-Rubik mt-2 text-lg md:text-2xl text-dark-100 dark:text-light-100 transition-colors duration-300 ease-in-out">{ project.title }</p>
                        </a>
                    </div>

                    {/* Period */}
                    <div className="flex-1 flex h-fit">
                        <p className="text-sm font-Rubik font-semibold mt-2 text-dark-100 dark:text-light-100 transition-colors duration-300 ease-in-out">{ project.period }</p>
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                        <p className="text-normal font-Rubik mt-2 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">{ project.shortDescription }</p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default PortfolioItem;