import React from 'react'
import logo from "../media/login-logo.png"

const ForgotPasswordPage = () => {
  return (
    <div className='login-container'>
        <div className='login-content' >
            <div>
                <img className='login-logo' alt='logo' src={logo}></img>
                <div className='login-title'>
                    Forgot Password?
                </div>
            </div>
            <div className="instruction mt-3">
                Please input your email address and an email will be sent to you with a new password.<br /><br />     
                Please allow a few minutes for the delivery.<br /><br />
                If you do not receive the email, please be sure to whitelist the address 
                <span className="support-email"> no-reply@messagewatcher.com</span><br /><br />
                Also, note that if you request a new password more than once, only the last request is valid.<br /><br />
                For any additional questions please contact us at 
                <span className="support-email"> support@messagewatcher.com</span><br /><br />
            </div>
            <div className='login-form'>
                <form>
                    <div className="text-start">
                        <label>Email Address</label>
                        <input type="email" className="form-input"/>
                    </div>
                    <div>    
                        <button type="submit" className='login-btn'>
                            Send New Password
                        </button>
                    </div>
                </form>
            </div>
            <div className='mt-4'>
                <a className='forgot-pass' href="/login">
                    <div>Go Back</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordPage