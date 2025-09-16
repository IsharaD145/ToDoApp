import LoginForm from "../components/LoginForm"
import "../css/Login.css"
import Logo from "../components/Logo"

function Login() {
  return (
    <div className="login-main">
        <section className="login-section">
            <div className="logo">
                <Logo/>
            </div>
            <h1>Login</h1>
            <LoginForm/>
            <p>Don't have an account? <a href="#">Sign up</a></p>
        </section>
    </div>
  )
}

export default Login