import { useState } from "react"
import axios from "axios";
function LoginForm() {

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
        const res = await axios.get("https://localhost:7219/Auth/login");
        console.log(res.data); 
    } catch (err) {
        console.error(err);
    }
};


  return (
    <form className="login-form" onSubmit={handleLogin}>
        <div className="log-sec">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
         </div>
        <div className="log-sec">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
         <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
