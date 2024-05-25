// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnaillId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setActiveThumbnaillId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img
          className={thumbnailClassName}
          alt={thumbnailAltText}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
