export default function ErrorMsg({ msg, textColor, className }) {
    return (
        <div className={`${msg ? 'h-8' : 'h-0'} ${textColor || 'text-red-700'} duration-700 ${className}`}>
            <b className="block"> {msg} </b>
        </div>
    )
}