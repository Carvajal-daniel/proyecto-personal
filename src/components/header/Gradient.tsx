const Gradient = () => {
  return (
    <div
      style={{
        background: `
          linear-gradient(135deg,
            #facc15 30%,
            #facc15 20%,

            #3b82f6 47%,
            #3b82f6 35%,

            #dc2626 85%,
            #dc2626 20%
          )
        `
      }}
      className="
        absolute right-[-9px] top-1/2 -translate-y-1/2
        w-24 h-18
        opacity-70
        rotate-12
        rounded-lg
        z-0
        pointer-events-none
      "
    />
  )
}

export default Gradient