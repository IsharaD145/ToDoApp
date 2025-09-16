import "../css/Signup.css"
import Logo from "../components/Logo"
import SignupForm from "../components/SignupForm"

function Signup() {
  return (
    <div className="signup-main">
        <div className="signup-section">
            <div className="logo">
                <Logo/>
            </div>
            <h1>Signup</h1>
            <SignupForm/>
        </div>
    </div>
  )
}

export default Signup