import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookApi, getToken } from "./apis";
import { AuthContext } from "./authContext";

function Login() {
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await getToken({ auth, username, password });
      // BookApi({auth})
      navigate('/profile'); 
    } catch (error) {
      console.error("error during token retrieval: ", error);
    }
  };

 

  return (
    <>
    <div>
      <div className="p-4 text-center">
        <h1 id="login">Login</h1>
      </div>
      <div className="text-center">
        <input 
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder="Enter Username"
        />
      </div>
      <div className="text-center">
        <input 
          type="password" // Ensure password input is hidden
          style={{marginTop: 20}} 
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder="Enter Password"
        />
      </div>
      <div className="text-center p-3">
        <button class="button-55" role="button"
          style={{marginTop: 20}}
          onClick={submit}
        >Login</button>
      </div>
      <div className="text-center">
        <Link to='/signup'>Don't Have an account? Sign up here!</Link>
        
      </div>
      </div>
    </>
  );
}
{/* <button class="button-55" role="button">Button 55</button> */}
export default Login;

