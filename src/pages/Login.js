import './pages.css';
import { Link } from "react-router-dom";

function Login() {
  
    return (
      <div className='img'>
        <div className='form'>
            <form>
                <div className='row'>
                    <label>Username or email address
                        <input type="text" />
                    </label>
                </div>
                <div className='row'>
                    <label>Password
                        <input type="text" />
                    </label>
                </div>
                <div className='row'>
                    <Link to={"/Home"}>Login</Link>
                    <Link to={"/Registration"}>Don't have an account?</Link>
                </div>
        
            </form>
        </div>
        
      </div>
    )
  };
  
  export default Login
