export default function Container({ variant = 'main', className, children }) {
    const maxW = variant === 'main' ? 'max-w-[83rem]' : 'max-w-md'
    return <div className={`mx-auto ${maxW} ` + className}>
        {children}
    </div>
}