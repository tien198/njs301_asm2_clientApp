function Button({ label, className, ...props }) {
    return <button className={className} {...props} >{label}</button>
}

export default Button;