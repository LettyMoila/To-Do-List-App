import { Link } from "react-router-dom"
import  "./pages.css"

function Registration() {

    return (
      <div className='img'>
        <div className='heading'>
            <h1>Sign Up</h1>
        </div>
         <form>
            <div className='row'>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </div>
            <div className='row'>
                <label>Email Address
                    <input type="email" />
                </label>
            </div>
            <div className='row'>
                <label>Password
                    <input type="password" />
                </label>
            </div>
            <div className='row'>
                <label>Confirm Password
                    <input type="password" />
                </label>
            </div>
            <div className='row'>
                <label>I agree to the T's and C's
                    <input type="checkbox" />
                </label>
            </div>
            <div className='row'>
                <Link to={"/Home"} style={{color: 'purple', textDecoration: 'none', height: '5vh'}}>SignUp</Link>
                <Link to={"/Login"} style={{color: 'purple', textDecoration: 'none'}}>Already have an account?</Link>
            </div>
        </form>
      </div>
    )
  };
  
  export default Registration