
export default function ServiceItem(props) {
  const { bgColor, text } = props
  
  return (
    <div className="service-item" style={{ backgroundColor: bgColor }}>
      <p>{ text }</p>
    </div>
  )
}