// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewsIndex: 0,
  }

  onClickRightArrow = () => {
    const {reviewsIndex} = this.state
    const {reviewsList} = this.props
    if (reviewsIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewsIndex: prevState.reviewsIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {reviewsIndex} = this.state
    if (reviewsIndex > 0) {
      this.setState(prevState => ({
        reviewsIndex: prevState.reviewsIndex - 1,
      }))
    }
  }

  renderReviewContainer = () => {
    const {reviewsList} = this.props
    const {reviewsIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewsIndex
    ]
    return (
      <ul className="reviews-container">
        <li className="review-item">
          <img src={imgUrl} alt={username} className="review-img" />
          <div className="buttons-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <p className="review-name">{username}</p>
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="review-company">{companyName}</p>
          <p className="review-description">{description}</p>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="review-bg-container">
        <h1 className="main-heading">Reviews</h1>
        {this.renderReviewContainer()}
      </div>
    )
  }
}

export default ReviewsCarousel
