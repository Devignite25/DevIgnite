const Card = ({ children, className = '', hover = false }) => {
  const hoverStyles = hover ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300' : ''

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}

export default Card
