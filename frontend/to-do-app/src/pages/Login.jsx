import LoginForm from "../components/LoginForm"
import "../css/Login.css"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="login-main">
        <section className="login-section">
            <div className="logo">
                <Logo/>
            </div>
            <h1>Login</h1>
            <LoginForm/>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </section>
    </div>
  )
}

export default Login