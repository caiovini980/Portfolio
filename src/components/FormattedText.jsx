// Renders text with **word** wrapped in bold.
function FormattedText({ text }) {
    const segments = text.split(/(\*\*.+?\*\*)/g).filter(Boolean)

    return segments.map((segment, index) =>
        segment.startsWith("**") && segment.endsWith("**") ? (
            <strong key={index} className="font-semibold text-stone-700 dark:text-stone-200">
                {segment.slice(2, -2)}
            </strong>
        ) : (
            <span key={index}>{segment}</span>
        )
    )
}

export default FormattedText;
