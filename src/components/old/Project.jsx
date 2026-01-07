function Project({ title, impactOnProject }) {
    return(
        <>
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border bg-stone-900 border-stone-900 dark:border-stone-400 dark:bg-stone-400" />
            <p className="text-lg font-semibold text-stone-900 dark:text-stone-200">
                { title }
            </p>  
            <p className="mb-5 text-base font-normal text-stone-500 dark:text-stone-300">
                { impactOnProject }
            </p>
        </>
    )
}

export default Project;

