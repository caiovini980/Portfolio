import React from "react";

function PortfolioItem({ title, imageUrl, stack, link }) {
    return (
        <a 
            href={ link }
            target="_blank"
            rel="noreferrer noopener"
        >
            <div className="border-2 border-stone-900 dark:border-stone-200 rounded-md overflow-hidden">
                <img 
                    src={ imageUrl } 
                    alt={ title }
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />

                <div className="x-full p-4">
                    <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-stone-200">{ title }</h3>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-stone-200">
                        { stack.map(item => (
                            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-200 rounded-md">
                                { item }
                            </span>
                        )) }
                    </p>
                </div>
            </div>
        </a>
    )
}

export default PortfolioItem;