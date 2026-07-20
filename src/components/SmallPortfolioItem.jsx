
import { Link } from "react-router-dom";
import Tag, {Colors} from "./Tag";

function SmallPortfolioItem({ project }) {
    return (
        <>
            <div>
                <Link to={ `/side-projects/${project.slug}` } className="row-span-1">
                    {/* Item card */}
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img 
                            src={ project.imageUrl } 
                            alt={ project.title }
                            className="w-full h-36 md:h-60 object-cover"
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
                    <div className="flex-1 flex items-center">
                        <Link to={ `/side-projects/${project.slug}` }>
                            <p className="font-semibold font-Rubik mt-4 text-lg md:text-2xl text-dark-100 dark:text-light-100 transition-colors duration-300 ease-in-out">{ project.title }</p>
                        </Link>
                    </div>

                    {/* Description */}
                    <div className="flex-1 items-center">
                        <p className="text-normal font-Rubik mt-2 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">{ project.shortDescription }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallPortfolioItem;