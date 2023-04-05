const index = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg transition-shadow duration-500 hover:shadow ${className}`}>{children}</div>
  )
}

export default index