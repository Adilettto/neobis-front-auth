import React from 'react'
import MainImage from '../components/MainImage'
import BackBtn from '../components/BackBtn';
import "./MailCheck.css"

const MailCheck = () => {
  return (
    <div className='mailcheck-page'>
        <BackBtn/>
        <MainImage />
        <div className="mailcheck-text">
            <h4 className='mailcheck-top-text'>You have received an email with a link to complete your registration at example@gmail.com</h4>
            <h4 className='mailcheck-mid-text'>If you haven't received the email, don't rush to wait for the regular mailbox - it's better to check the 'Spam' folder. (´｡• ω •｡`)</h4>
            <h5 className='mailcheck-bottom-text'>The email hasn't arrived</h5>
        </div>
    </div>
  )
}

export default MailCheck