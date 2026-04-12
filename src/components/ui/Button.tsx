type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost" | "outline"
  onClick?: () => void
  className?: string
}

const variants = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  ghost: "bg-transparent text-black hover:bg-gray-100",
  outline: "bg-transparent border border-gray-900 text-black hover:bg-gray-100",
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-2xl
        cursor-pointer
        font-medium text-sm
        transition-all duration-200
        shadow-md hover:shadow-lg hover:scale-[1.03]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button