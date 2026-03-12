import axios from 'axios';
import { useState } from 'react'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState("modi@gmail.com");
  const [password, setPassword] = useState("Modi@1234");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        }, { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");          // FEED page

    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className='flex justify-center my-20'>
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">Login</h2>
          <div>
            <fieldset className="fieldset my-5">

              <label className='font-semibold py-2'>Email</label>
              <input
                type="email"
                className="input"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email id"
              />

              <label className='font-semibold py-2 pt-3'>Password</label>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </fieldset>
          </div>
          <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
          </div>
          <div className='text-center flex mt-2'>
            <span className='text-sm'>Don't have an account?</span> 
            <Link to={"/signup"}>
              <button className="text-primary font-semibold hover:underline ml-1 cursor-pointer">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;