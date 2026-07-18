export const Colors = Object.freeze({
    GREEN: "green",
    BLUE: "blue",
    PURPLE: "purple",
    ORANGE: "orange",
    BLUE_GREEN: "blue green fade"
})

function Tag({text, color}) {
    switch (color) {
        case Colors.PURPLE:
            return (
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 font-Rubik font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs border-0 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    {text}
                </span>
            )
            break
        case Colors.BLUE:
            return (
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 font-Rubik font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs border-0 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {text}
                </span>
            )
            break
        case Colors.GREEN:
            return (
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 font-Rubik font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs border-0 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
                    {text}
                </span>
            )
            break
        case Colors.ORANGE:
            return (
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 font-Rubik font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs border-0 bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
                    {text}
                </span>
            )
            break
        case Colors.BLUE_GREEN:
            return (
                <span className="inline-flex items-center rounded-md px-2.5 py-0.5 font-Rubik font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs border-0 bg-gradient-to-tr from-blue-300 to-green-300 text-blue-800">
                    {text}
                </span>
            )
            break
    }
}

export default Tag;