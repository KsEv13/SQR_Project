import React from 'react'
import { SurveyStyled } from './Survey.styled'

function Survey() {
  return (
    <SurveyStyled>
      <section className="formcarry-container">
        <form action="#" method="POST" encType="multipart/form-data">
          <div className="formcarry-block">
            <label htmlFor="telegram">Telegram</label>
            <input type="text" name="telegram" id="telegram" placeholder="Your Telegram" />
          </div>

          <div className="formcarry-block">
            <label htmlFor="biscuit">Which biscuit do you prefer?</label>
            <select name="biscuit" id="biscuit">
              <option value="" selected disabled>
                Please select..
              </option>
              <option value="Vanilla">Vanilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Poppy Seed">Poppy Seed</option>
              <option value="Cocunut">Coconul</option>
            </select>
          </div>

          <div className="formcarry-block">
            <label htmlFor="filling">Which filling do you prefer?</label>
            <select name="filling" id="filling">
              <option value="" selected disabled>
                Please select..
              </option>
              <option value="Vanilla">Vanilla</option>
              <option value="Coffee">Coffee</option>
              <option value="Cherry">Cherry</option>
              <option value="Orange">Orange</option>
            </select>
          </div>
          <div className="formcarry-block">
            <label htmlFor="feedback">Additional comments</label>
            <textarea name="message" id="feedback" placeholder="Enter your message..." />
          </div>

          <div className="formcarry-block">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </SurveyStyled>
  )
}

export default Survey
