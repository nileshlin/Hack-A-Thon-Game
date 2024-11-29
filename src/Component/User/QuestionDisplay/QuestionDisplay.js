import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionDisplay.css';

const QuestionDisplay = () => {
  return (
    <section className="prompt-main-ques">
    <div className="question-in">
      <div className="ques_in_sort">
        <Link to="/chatBot">
          How can AI-driven recommendation systems enhance player experiences in games?
          <div className="ques-arwo">
            <img src="assets/img/arrow.png" className="img-fluid" alt="arrow" />
          </div>
        </Link>
        <Link to="/chatBot">
          What is the role of AI in player feedback analysis in game development?
          <div className="ques-arwo">
            <img src="assets/img/arrow.png" className="img-fluid" alt="arrow" />
          </div>
        </Link>
        <Link to="/chatBot">
          Explain the concept of dynamic difficulty adjustment (DDA) in Game AI.
          <div className="ques-arwo">
            <img src="assets/img/arrow.png" className="img-fluid" alt="arrow" />
          </div>
        </Link>
        <Link to="/chatBot">
          What is the role of AI in game testing and quality assurance?
          <div className="ques-arwo">
            <img src="assets/img/arrow.png" className="img-fluid" alt="arrow" />
          </div>
        </Link>
        <Link to="/chatBot">
          How can AI be used to create personalized marketing campaigns and offers for players?
          <div className="ques-arwo">
            <img src="assets/img/arrow.png" className="img-fluid" alt="arrow" />
          </div>
        </Link>
      </div>
      <div className="btn-load-more">
        <Link to="/chatBot">Next
          <img src="assets/img/right-arrow.png" className="img-fluid" alt="next arrow" />
        </Link>
      </div>
    </div>
  </section>
  )
}

export default QuestionDisplay
