/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
import React from 'react'
import { SurveyStyled } from './Survey.styled'
import Photos from '../ui/Photos/Photos'
import { botInfo } from '../../vars'

function Survey() {
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const botId = botInfo.TELEGRAM_BOT_TOKEN
    const chatId = botInfo.TELEGRAM_USER_ID
    fetch(
      `https://api.telegram.org/bot${botId}/sendMessage?chat_id=${chatId}&text=${data.get('telegram')}, ${data.get(
        'biscuit'
      )}, ${data.get('filling')}, ${data.get('feedback')}`,
      {
        method: 'GET'
      }
    )
  }
  return (
    <SurveyStyled>
      <section className="formcarry-container">
        <form id="telegramForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="formcarry-block">
            <label htmlFor="telegram">Telegram</label>
            <input type="text" name="telegram" id="telegram" placeholder="Your Telegram" />
          </div>

          <div className="formcarry-block">
            <label htmlFor="biscuit">Which biscuit do you prefer?</label>
            <select name="biscuit" id="biscuit" defaultValue="Please select..">
              <option value="Vanilla">Vanilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Poppy Seed">Poppy Seed</option>
              <option value="Cocunut">Coconul</option>
            </select>
          </div>

          <div className="formcarry-block">
            <label htmlFor="filling">Which filling do you prefer?</label>
            <select name="filling" id="filling" defaultValue="Please select..">
              <option value="Vanilla">Vanilla</option>
              <option value="Coffee">Coffee</option>
              <option value="Cherry">Cherry</option>
              <option value="Orange">Orange</option>
            </select>
          </div>
          <div className="formcarry-block">
            <label htmlFor="feedback">Additional comments</label>
            <textarea name="feedback" id="feedback" placeholder="Enter your message..." />
          </div>
          <Photos />
          <div className="formcarry-block">
            <button type="submit" className="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </SurveyStyled>
  )
}

export default Survey
