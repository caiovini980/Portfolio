
import Tag, {Colors} from "./Tag";

function SmallPortfolioItem({ title, imageUrl, period, link, description, tagColor, tagText }) {
    return (
        <>
            <div>
                <a href={ link } target="_blank" rel="noreferrer noopener" className="row-span-1">
                    {/* Item card */}
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden">
                        <img 
                            src={ imageUrl } 
                            alt={ title }
                            className="w-full h-36 md:h-60 object-cover"
                        />
                    </div>
                </a>

                {tagColor, tagText && (
                    <div className="flex flex-row pt-7 items-start">
                        <Tag color={tagColor} text={tagText}></Tag>
                    </div>
                )}

                {/* Text area */} 
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="flex-1 flex items-center">
                        <a href={ link } target="_blank" rel="noreferrer noopener">
                            <p className="font-semibold font-Rubik mt-4 text-lg md:text-2xl text-dark-100 dark:text-light-100 transition-colors duration-300 ease-in-out">{ title }</p>
                        </a>
                    </div>

                    {/* Description */}
                    <div className="flex-1 items-center">
                        <p className="text-normal font-Rubik mt-2 text-stone-500 dark:text-stone-400 transition-colors duration-300 ease-in-out">{ description }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallPortfolioItem;