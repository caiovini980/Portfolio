function SmallPortfolioItem({ title, imageUrl, period, link, description }) {
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

                {/* Text area */} 
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="flex-1 flex items-center">
                        <a href={ link } target="_blank" rel="noreferrer noopener">
                            <p className="font-semibold mt-4 text-lg md:text-2xl text-dark-100 dark:text-light-100 ">{ title }</p>
                        </a>
                    </div>

                    {/* Description */}
                    <div className="flex-1 items-center">
                        <p className="text-normal mt-2 text-stone-500 dark:text-stone-400">{ description }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmallPortfolioItem;