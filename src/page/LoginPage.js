import React,{useState} from 'react'
import logo from '../media/login-logo.png'
import fbLogo from "../media/facebook-logo.svg";
import miLogo from "../media/microsoft.svg";
import liLogo from "../media/linkedin.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";



const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-container'>
        <div className='login-content'>
            <img className='login-logo' alt='logo' src={logo}></img>
            <div className='login-title'>
                A Single Dashboard for Your Messaging Compliance
            </div>
            <div className='login-form'>
                <form>
                    <div className="text-start">
                        <label>Username</label>
                        <input type="email" className="form-input"/>
                    </div>
                    <div>
                        <div className=' d-flex flex-row align-items-center justify-content-between'>
                            <label>Password</label>
                            <a className='forgot-pass' href="/forgot-password">
                                <div>Forgot Password</div>
                            </a>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input type={showPassword ? "text" : "password"} className="form-input"/>
                            <div className='icon-showpass align-items-center ' onClick={handleTogglePassword}>
                            <FontAwesomeIcon
                                icon={showPassword ? faEye : faEyeSlash}
                                />
                            </div>
                        </div>
                    </div>  
                    <div>    
                    <button type="submit" className='login-btn'>
                        Sign In
                    </button>
                    </div>
               </form>
            </div>
            <div type='button' className='login-with-social-btn'>
                <div className=' login-with with-fb'>
                    <img className='login-with-logo' alt='logo' src={fbLogo}/>
                    <p>Log in With Facebook</p>
                </div>
                <div type='button' className=' login-with with-mi'>
                    <img className='login-with-logo' alt='logo' src={miLogo}/>
                    <p>Sign in With Microsoft</p>
                </div>
                <div type='button' className=' login-with with-li'>
                    <img className='login-with-logo' alt='logo' src={liLogo}/>
                    <p>Sign in With LinkedIn</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
