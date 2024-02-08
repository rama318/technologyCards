// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} subCard-container`}>
      <h1 className="subCard-heading">{title}</h1>
      <p className="subCard-description">{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="subCard-images" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
