import "./login.scss"
import Footer1  from "../footer1/Footer1"
import Header1 from "../header1/Header1"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { useState } from "react"

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const {login} = useContext(AuthContext);

  const handleLogin =  async (e) => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    }catch(err){
      setErr(err.response.data);
    }
  }

  return (
    <div className="login">
        <Header1 />
        <div className="card">
           <div className="left">
               <h1>Hello Amigos</h1>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
               </p>
               <span>
                   Don't you have an account?
               </span>
               <Link to="/register">
                 <button>Register</button>
               </Link>
           </div> 
           <div className="right">
               <h1>Login</h1>
               <form>
                   <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                   <input type="text" placeholder="Password" name="password" onChange={handleChange}/>
                   {err && err}
                   <button onClick={handleLogin}>Login</button>
               </form>
           </div> 
        </div>
        <Footer1 />
    </div>
  )
}

export default Login
