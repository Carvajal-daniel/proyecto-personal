import React from 'react'

const Gradient = ({ 
  primaryColor = "var(--primary)", 
  secondaryColor = "var(--secondary)" 
}) => {
  return (
    <div 
      // MANTIDO: Exatamente as mesmas classes e posicionamento do seu original
      className="pointer-events-none absolute left-1/2 top-1/4 md:top-1/2 h-[300px] w-[300px] -translate-x-[80%] -translate-y-1/2 rounded-full blur-[80px] md:h-[600px] md:w-[800px] md:blur-[130px] opacity-30"
      style={{
        // MANTIDO: Lógica de gradiente que você tinha, mas com as cores dinâmicas
        // O "80%" e "20%" de opacidade do seu original eu simulei aqui para não ficar forte
        background: `linear-gradient(to bottom right, ${primaryColor} 50%, ${secondaryColor} 10%, transparent)`
      }}
    />
  )
}

export default Gradient